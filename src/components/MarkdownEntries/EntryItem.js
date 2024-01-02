import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EntryItem = ({item}) => {

  return (
    <div className='entry-item'>
      <div className='columns' key={item.file}>
        <i className='entry-date'>{item.date.substring(0,7)}</i>
        { item.img !== undefined &&  
          <div className='column is-one-fifth has-text-centered entry-img'>
            <img src={item.img} alt='News icon' />
          </div>
        }
        <div className='column'>
          <div className='entry-content'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
          </div>
          <div className='entry-link-button has-text-right'>
            {
              item.url !== undefined ? 
                item.url.includes('http') ?
                  <button className='button is-link' onClick={() => window.open(item.url)}>
                    <FontAwesomeIcon className='spaced-fa-icon' icon={faBarsStaggered} />
                    Leer Más
                  </button>
                  :
                  <Link to={item.url}>
                    <button className='button is-link'>
                      <FontAwesomeIcon className='spaced-fa-icon' icon={faBarsStaggered} />
                      Leer Más
                    </button>
                  </Link>
                : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntryItem