import React from 'react';

import Quote from './Quote';

const Home = () => {
  return (
    <div className='body-center container'>
      <div className='columns'>
        <div className='column is-three-fifths has-text-centered'> 
          <Quote/>
        </div>
        <div className='column'>
          <div>
            <p>Aquí pondría mi votación actual...</p>
            <p>¡Si tuviera una!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
