import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FooterContext } from '../../pages/Contexts';

const FooterItem = ({text, url}) => {

  const [ t ] = useContext(FooterContext);

  return (
    <li>
      <NavLink className='footer-item' to={url} key={text}>
        { t(`sites.${text}`) }
      </NavLink>
    </li>
  )
}

export default FooterItem