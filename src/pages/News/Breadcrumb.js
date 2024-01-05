import React from 'react';
import { Link } from 'react-router-dom';

import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsBreadcrumb = () => {

  return (
    <Link to="/noticias">
      <span className='icon-text'>
        <span className="icon">
          <FontAwesomeIcon icon={faNewspaper} />  
        </span>
        <span>Noticias</span>
      </span>
    </Link>
  )
}

export default NewsBreadcrumb