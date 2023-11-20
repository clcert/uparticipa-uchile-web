import React from 'react';
import { Link } from 'react-router-dom';

import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsBreadcrumb = () => {

  return (
    <Link to="/news">
      <span className="icon is-small">
        <FontAwesomeIcon icon={faNewspaper} />  
      </span>
      <span>Noticias</span>
    </Link>
  )
}

export default NewsBreadcrumb