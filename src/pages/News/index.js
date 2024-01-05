import React from 'react';

import Entries from '../../components/MarkdownEntries/Entries';

const News = () => {
  return (
    <div className='box'>
      <h1 className='title has-text-centered has-text-primary'>Noticias y Prensa</h1>
      <Entries entriesFile='News/entries.json' title='noticias' />
    </div>
  )
}

export default News