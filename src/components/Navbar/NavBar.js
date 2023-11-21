import logoParticipaUchile from '../../assets/images/logodark.svg'
import NavBarSocial from './NavBarSocial';
import { menuItems } from '../../data/menuItems';

import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalTranslationsContext } from '../../pages/Contexts';


const NavBar = () => {

  const showMobile = () => {
    const navBar = document.querySelector('#navbar');
    navBar.classList.toggle('is-active');
  }

  const [ t ] = useContext(GlobalTranslationsContext);

  return (
    <div className='container'>
      <div className='main'>
        
        <NavBarSocial/>
        
        <nav className='navbar is-link' role='navigation' aria-label='main navigation'>

          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              <img src={logoParticipaUchile} width='112' alt='Participa UChile Logo'/>
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
                    { t(`sites.${text}`) }
                  </NavLink>
                ))
              }
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
