import React from 'react';
import FooterLogo from './FooterLogo';

import logoUChile from '../../assets/images/uchile.png';
import logoVTI from '../../assets/images/vti.png';
import logoFCFM from '../../assets/images/fcfm.png';
import logoCLCERT from '../../assets/images/clcert-white.png';

const Footer = () => {

  return (
    <footer className='footer has-text-centered'>
      <p className='container mt-4'>
        Participa UChile es un proyecto de <b>Prorrectoría U. de Chile</b>, desarrollado por 
        el <b>Lab. de Criptografía Aplicada y Ciberseguridad (CLCERT)</b>,
        y patrocinado por
        la <b>Vicerrectoría de Tecnología de la Información</b>, 
        la <b>Vicerrectoría de Asuntos Económicos y Gestión Institucional</b>, y 
        la <b>Facultad de Ciencias Físicas y Matemáticas</b> de la Universidad de Chile.
      </p>
      <div className='columns'>
        <FooterLogo
          picture={logoUChile}
          reference={'https://uchile.cl/'}
          alt={'Logo UChile'}
          padding={0}
        />
        <FooterLogo
          picture={logoVTI}
          reference={'https://vti.uchile.cl/'}
          alt={'Logo VTI'}
          padding={0}
        />
        <FooterLogo
          picture={logoFCFM}
          reference={'https://ingenieria.uchile.cl/'}
          alt={'Logo FCFM'}
          padding={0}
        />
        <FooterLogo
          picture={logoCLCERT}
          reference={'https://clcert.cl'}
          alt={'Logo CLCERT'}
          padding={0}
        />
      </div>
    </footer>
  )
}

export default Footer;
