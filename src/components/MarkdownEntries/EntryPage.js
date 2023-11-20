import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import MainBreadcrumb from '../../components/MainBreadcrumb';

const EntryPage = ({entry, breadcrumb}) => {

  const [ text, setText ] = useState('');

  useEffect( () => {
    const getText = async () => {
      const filePath = require(`../../markdown/${entry.file}`);
      const mdText = await fetch(filePath).then( response => response.text() );
      setText(mdText);
    }
    getText();
  }, [entry])

  const breadcrumbsList = [
    breadcrumb,
    <div className='breadcrumb-current'>
      <span>{text.split('\n')[0].substring(2)}</span>
    </div>
  ]

  return (
    <div className='body-center container'>
      <div className='box-content markdown-page'>
        <MainBreadcrumb breadCrumbsList={breadcrumbsList} />
        <div className='box-content increased-padding'>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default EntryPage