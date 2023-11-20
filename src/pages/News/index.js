import React from 'react';

import Entries from '../../components/MarkdownEntries/Entries';

const News = () => {
  return <Entries entriesFile='news/entries.json' title='news' />
}

export default News