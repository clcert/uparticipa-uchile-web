import React from 'react';
import FooterLogo from './FooterLogo';

import logoCLCERT from '../../assets/images/clcert-white.png';

const Footer = () => {

  return (
    <footer className='footer'>
      <FooterLogo
        picture={logoCLCERT}
        reference={'https://clcert.cl'}
        alt={'Logo CLCERT'}
        padding={0}
        text={
          <>
            <p> Proyecto desarrollado por el <b> CLCERT, Universidad de Chile </b></p>
            <p> Ubicado en Beauchef 851, Edificio Poniente, 2do Piso, Of. 201D, Santiago, Chile. Código Postal 8370459.</p>
            <p> participa(arroba)uchile.cl </p>
          </>
        }
      />
    </footer>
  )
}

export default Footer;
