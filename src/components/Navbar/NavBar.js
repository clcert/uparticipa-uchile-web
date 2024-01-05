import logoParticipaUchile from '../../assets/images/logo-square.svg'
import { menuItems } from '../../data/menuItems';

import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

  const showMobile = () => {
    const navBar = document.querySelector('#navbar');
    navBar.classList.toggle('is-active');
  }

  return (
    <div className='container'>
      <div className='main'>
        
        <nav className='navbar is-white' role='navigation' aria-label='main navigation'>

          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              <figure className='image is-32x32'>
                <img src={logoParticipaUchile} alt='Participa UChile Logo'/>
              </figure>
            </Link>
            <button onClick={showMobile} className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </button>
          </div>

          <div id='navbar' className='navbar-menu'>
            <div className='navbar-start'>
              {
                menuItems.map( ({text, url}) => (
                  <NavLink className='navbar-item has-text-centered' to={url} key={'nav-'+text}>
                    { `${text}` }
                  </NavLink>
                ))
              }
            </div>
            <div className="navbar-end">
              <a className='navbar-item has-text-centered has-text-primary' href='https://twitter.com/participaUChile' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faTwitter} />  
              </a>
              <a className='navbar-item has-text-centered has-text-primary' href='mailto:participa@uchile.cl' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faEnvelope} />  
              </a>
            </div>
          </div>

        </nav>
      </div>
    </div>
  );
}

export default NavBar;
