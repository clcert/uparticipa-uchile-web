import React from 'react';

const FooterLogo = ({picture, reference, alt, padding, text}) => {

  return (
    <div className='footer-logo'>
      <div className='footer-logo-img-container'>
        <a href={reference} target='_blank' rel='noreferrer'>
          <img 
            src={picture} 
            alt={alt} 
            style={{'--padding': `${padding}px`}} 
            className='footer-logo-img'
          />
        </a>
      </div>
      <div className='footer-logo-text'>
        { text }
      </div>
    </div>
  )
}

export default FooterLogo