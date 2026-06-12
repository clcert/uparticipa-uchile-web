import { useState } from 'react';
import logoParticipaUchile from '../../assets/images/uparticipa-logo-uchile-white.png'
import NavBarSocial from './NavBarSocial';
import { menuItems } from '../../data/menuItems';

import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuId = 'main-navbar';

    return (
        <header className='site-header'>
            <div className='site-navbar-wrapper'>
                <div className='container'>
                    <nav className='navbar' role='navigation' aria-label='main navigation'>
                        <div className='navbar-brand'>
                            <Link className='navbar-item' to='/' onClick={() => setIsOpen(false)}>
                                <img src={logoParticipaUchile}
                                    alt='Participa UChile Logo'
                                    width="140" />
                            </Link>
                            <button onClick={() => setIsOpen((v) => !v)}
                                className={'navbar-burger' + (isOpen ? ' is-active' : '')}
                                aria-label='menu'
                                aria-expanded={isOpen}
                                aria-controls={menuId}>
                                <span aria-hidden='true'></span>
                                <span aria-hidden='true'></span>
                                <span aria-hidden='true'></span>
                            </button>
                        </div>

                        <div id={menuId} className={'navbar-menu' + (isOpen ? ' is-active' : '')}>
                            <div className='navbar-start'>
                                {
                                    menuItems.map(({ text, url }) => (
                                        <NavLink className='navbar-item has-text-centered has-text-weight-bold'
                                            to={url}
                                            key={'nav-' + text}
                                            onClick={() => setIsOpen(false)}>
                                            {text}
                                        </NavLink>
                                    ))
                                }
                                <a className='navbar-item has-text-centered has-text-weight-bold'
                                   href='https://psifos-participa.uchile.cl/psifos/api/app/eleccion-prueba/vote'
                                   target='_blank'
                                   rel='noreferrer'>
                                    Demostración
                                </a>
                            </div>
                            <NavBarSocial />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
