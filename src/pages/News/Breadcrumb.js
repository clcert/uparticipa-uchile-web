import React from 'react';
import { Link } from 'react-router-dom';

import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsBreadcrumb = () => {

    return (
        <Link to="/noticias">
            <span className='icon-text'>
                <span className="icon has-text-white">
                    <FontAwesomeIcon icon={faNewspaper} />
                </span>
                <span className='has-text-white has-text-weight-bold'>Noticias</span>
            </span>
        </Link>
    )
}

export default NewsBreadcrumb
