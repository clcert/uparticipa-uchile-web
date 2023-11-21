import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ParticipaUChile } from './ParticipaUChile';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './translations/es/global.json';
import people_es from './translations/es/people.json';


import './assets/css/styles.css';

const initLang = () => {
  const storedLang = localStorage.getItem('lang')
  if (!!storedLang) {
    return storedLang
  } else {
    localStorage.setItem('lang', 'es');
    return 'es'
  }
}

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: initLang(),
  resources: {
    es: {
      global: global_es,
      people: people_es,
    }
  }
})

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
      <ParticipaUChile />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
