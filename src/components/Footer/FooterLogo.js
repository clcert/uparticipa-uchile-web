import React from 'react';

const FooterLogo = ({ picture, reference, alt, padding }) => {

  return (
    <div className='footer-logo column'>
      <figure className='footer-logo-img-container'>
        <a href={reference} target='_blank' rel='noreferrer'>
          <img
            src={picture}
            alt={alt}
            style={{ '--padding': `${padding}px` }}
            className='footer-logo-img'
          />
        </a>
      </figure>
    </div>
  )
}

export default FooterLogo