import React, { useCallback, useContext, useEffect, useState } from 'react';
import EntryItem from './EntryItem';

import loadingGif from '../../assets/images/loading.gif';

const Entries = ({entriesFile, title}) => {

  const [ t ] = useContext(GlobalTranslationsContext);
  const [ markdownItems, setMarkdownItems ] = useState([])
  const [ loading, setLoading ] = useState(true);

  const lang = localStorage.getItem('lang');

  const getMarkdown = async (pathStr) => {
    const filePath = require(`../../markdown/${pathStr}`);
    const text = await fetch(filePath).then( response => response.text() );
    return text;
  }

  const getEntries = useCallback( async () => {
    const { entries } = require('../../markdown/' + entriesFile);
    const filteredEntries = entries.filter( (entry) => (
      entry.lang === localStorage.getItem('lang') && entry.show
    ))

    let listEntries = []

    for (let i = 0; i < filteredEntries.length; i++) {
      const text = await getMarkdown(filteredEntries[i].summaryFile);
      listEntries.push({
        'content': text,
        'date': filteredEntries[i].date,
        'file': filteredEntries[i].summaryFile,
        'img': filteredEntries[i].image !== undefined ? 
          require(`../../markdown/${filteredEntries[i].image}`)
          :
          undefined,
        'url': filteredEntries[i].route || undefined
      })
    }
    return listEntries.sort((a, b) => (a.date < b.date));
  }, [entriesFile]);

  useEffect( () => {
    setLoading(true);
    setTimeout( async () => {
      getEntries().then( (entries) => {
        setMarkdownItems(entries);
      }).catch( () => {
        setMarkdownItems([]);
      }).finally( () => {
        setLoading(false);
      })
    }, 300);
    return () => setMarkdownItems([]);
  }, [lang, getEntries])

  return (
    <div className='body-center container'>
      <div className='box-content'>
        <h1>{ t(`sites.${title}`) }</h1>
        <hr />
        {
          loading ?
            <div className='loading-container has-text-centered'>
              <img src={loadingGif} alt='loading...' />
            </div>
            :
            <div className='markdown-entry-items'>
              {
                markdownItems.map( (item) => (
                  <EntryItem item={item} key={item.file} />
                ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default Entries