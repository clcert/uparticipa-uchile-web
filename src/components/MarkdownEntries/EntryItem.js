import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EntryItem = ({item}) => {

  return (
      <div className='box has-background-white' key={item.file}>
        <article className='media'>
          
          { item.img !== undefined &&  
            <figure className='media-left has-text-centered entry-img'>
              <img src={item.img} alt='Imagen de la noticia' />
            </figure>
          }

          <div className='media-content'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
          </div>

          <div className='media-right'>
            <div className='block has-text-centered'>
              <i>{item.date}</i>
            </div>
            <div className='block'>
              {
                item.url !== undefined ? 
                  item.url.includes('http') ?
                  <button className='block button is-link' onClick={() => window.open(item.url)}>
                      <FontAwesomeIcon className='spaced-fa-icon' icon={faBarsStaggered} />
                      Leer Más
                    </button>
                    :
                    <Link to={item.url}>
                      <button className='block button is-link'>
                        <FontAwesomeIcon className='spaced-fa-icon' icon={faBarsStaggered} />
                        Leer Más
                      </button>
                    </Link>
                  : ''
                }
            </div>
          </div>
        </article>
      </div>
  )
}

export default EntryItem