import React from 'react';

import Quote from './Quote';

const Home = () => {
  return (
    <div className='body-center container'>
      <div className='columns is-vcentered'>
        <div className='column is-three-fifths has-text-centered'> 
          <Quote/>
        </div>
        <div className='column'>
          <div className='box-content'>
            <p>Aquí pondría mi votación actual...</p>
            <p>¡Si tuviera una!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
