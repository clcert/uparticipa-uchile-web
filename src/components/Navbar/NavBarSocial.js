import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const NavBarSocial = () => {

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