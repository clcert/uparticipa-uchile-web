import React from 'react';
import { Link } from 'react-router-dom';

import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsBreadcrumb = ({t}) => {

  return (
    <Link to="/noticias">
      <span className="icon is-small">
        <FontAwesomeIcon icon={faNewspaper} />  
      </span>
      <span>{t('sites.noticias')}</span>
    </Link>
  )
}

export default NewsBreadcrumb