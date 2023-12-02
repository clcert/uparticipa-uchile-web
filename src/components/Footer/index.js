import React from 'react';
import FooterLogo from './FooterLogo';

import logoUChile from '../../assets/images/uchile.png';
import logoVTI from '../../assets/images/vti.png';
import logoFCFM from '../../assets/images/fcfm.png';
import logoCLCERT from '../../assets/images/clcert.min.svg';

const Footer = () => {

  return (
    <footer className='footer'>
      <p>
        Participa UChile es un proyecto de <b>Prorrectoría U. de Chile</b>, desarrollado por el 
        <a href='https://clcert.cl'> Lab. de Criptografía Aplicada y Ciberseguridad (CLCERT)</a>, y
        patrocinado por la <a href='https://vti.uchile.cl/'> Vicerrectoría de Tecnología de la Información</a>,
        la <b>Vicerrectoría de Asuntos Económicos y Gestión Institucional</b>, y la
        <a href='https://ingenieria.uchile.cl/'> Facultad de Ciencias Físicas y Matemáticas </a>
        de la U. de Chile.
      </p>
      <FooterLogo
        picture={logoUChile}
        reference={'https://uchile.cl/'}
        alt={'Logo UChile'}
        padding={0}
        text={<></>}
      />
      <FooterLogo
        picture={logoVTI}
        reference={'https://vti.uchile.cl/'}
        alt={'Logo VTI'}
        padding={0}
        text={<></>}
      />
      <FooterLogo
        picture={logoFCFM}
        reference={'https://ingenieria.uchile.cl/'}
        alt={'Logo FCFM'}
        padding={0}
        text={<></>}
      />
      <FooterLogo
        picture={logoCLCERT}
        reference={'https://clcert.cl'}
        alt={'Logo CLCERT'}
        padding={0}
        text={<></>}
      />
      <p>Participa UChile - 2023 - Universidad de Chile</p>
    </footer>
  )
}

export default Footer;
