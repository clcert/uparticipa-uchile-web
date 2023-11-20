import React, { useContext } from 'react';
import { GlobalTranslationsContext } from '../../pages/Contexts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const NavBarSocial = () => {

  const [ , i18n ] = useContext(GlobalTranslationsContext);

  const storedLang = localStorage.getItem('lang');

  const toggleLanguage = () => {

    switch (storedLang) {
      case 'es':
        localStorage.setItem('lang', 'en');
        i18n.changeLanguage('en');
        return

      case 'en':
        localStorage.setItem('lang', 'es');
        i18n.changeLanguage('es');
        return

      default:
        localStorage.setItem('lang', 'es');
        i18n.changeLanguage('es');
        return
    }
  }

  return (
    <div className='navbar-end social-items'>
      <div className="field is-grouped">
        <a className='external-icon' href='https://twitter.com/participaUChile' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faTwitter} />  
        </a>
        <a className='external-icon' href='mailto:participa@uchile.cl' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faEnvelope} />  
        </a>
      </div>
    </div>
  )
}

export default NavBarSocial