import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const NavBarSocial = () => {

  return (
    <div className="navbar-end social-items is-transparent">
      <div className='field is-grouped'>
        <a className='navbar-item has-text-centered has-text-primary' href='https://twitter.com/participaUChile' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faTwitter} color="#d44000" />  
        </a>
        <a className='navbar-item has-text-centered has-text-primary' href='https://instagram.com/participauchile' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} color="#d44000" />  
        </a>
        <a className='navbar-item has-text-centered has-text-primary' href='https://www.linkedin.com/company/participa-uchile/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} color="#d44000" />  
        </a>
        <a className='navbar-item has-text-centered has-text-primary' href='mailto:participa@uchile.cl' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faEnvelope} color="#d44000" />  
        </a>
      </div>
    </div>
  )
}

export default NavBarSocial