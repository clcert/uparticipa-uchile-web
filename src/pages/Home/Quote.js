import React from 'react';

import logoParticipaUchile from '../../assets/images/logolight.svg'

const Quote = () => {

  return (
    <div className='quote-container'>
      <div>
        SISTEMA DE VOTACIÓN Y CONSULTAS <br />
        <img src={ logoParticipaUchile } className='logo-white' alt='Participa UChile Logo' /> 
      </div>
    </div>
  )
}

export default Quote