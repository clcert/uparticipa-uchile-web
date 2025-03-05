// import logoParticipaUchile from '../../assets/images/logo-square.svg'
import logoParticipaUchile from '../../assets/images/uparticipa-logo-uchile-white.png'
import NavBarSocial from './NavBarSocial';
import { menuItems } from '../../data/menuItems';

import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {

    const showMobile = () => {
        const navBar = document.querySelector('#navbar');
        navBar.classList.toggle('is-active');
    }

    return (
        <div className='container'>
            <div className='main'>

                <NavBarSocial />

                <nav className='navbar' role='navigation' aria-label='main navigation'>

                    <div className='navbar-brand'>
                        <Link className='navbar-item' to='/'>
                            <img src={logoParticipaUchile}
                                alt='Participa UChile Logo'
                                width="140" />
                        </Link>
                        <button onClick={showMobile}
                            className='navbar-burger'
                            aria-label='menu'
                            aria-expanded='false'
                            data-target='navbarBasicExample'>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </button>
                    </div>

                    <div id='navbar' className='navbar-menu'>
                        <div className='navbar-start'>
                            {
                                menuItems.map(({ text, url }) => (
                                    <NavLink className='navbar-item has-text-centered has-text-weight-bold'
                                        to={url}
                                        key={
                                            'nav-' + text
                                        }>
                                        {
                                            `${text}`
                                        } </NavLink>
                                ))
                            }
                            <a className="navbar-item" href="https://psifos-participa.uchile.cl/psifos/api/app/eleccion-prueba-general/vote" target='_blank' rel='noreferrer'>
                                <b>DEMO</b>
                            </a>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default NavBar;
