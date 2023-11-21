import React from 'react';
import { useTranslation } from 'react-i18next';
import { App } from './App';
import { GlobalTranslationsContext } from './pages/Contexts';

export const ParticipaUChile = () => {
    return (
        <GlobalTranslationsContext.Provider value={ useTranslation('global') }>
            <App />
        </GlobalTranslationsContext.Provider>
	)
}