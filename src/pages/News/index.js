import React from 'react';

import Entries from '../../components/MarkdownEntries/Entries';

const News = () => {
  return (
    <div className='body-center container'>
      <div className='box-content'>
        <h1 className='title'>Noticias y Prensa</h1>
        <Entries entriesFile='News/entries.json' title='noticias' />
      </div>
    </div>
  )
}

export default News