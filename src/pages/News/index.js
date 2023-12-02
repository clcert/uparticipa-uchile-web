import React from 'react';

import Entries from '../../components/MarkdownEntries/Entries';

const News = () => {
  return <Entries entriesFile='News/entries.json' title='noticias' />
}

export default News