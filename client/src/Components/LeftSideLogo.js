import React from 'react'

import './LeftSideLogo.css'

import favicon from '../assets/img/favicon.svg'

const LeftSideLogo = () => {
  return (
    <div className='white-logo'>
              <div>
                  <img src={favicon} alt="logo" />
              </div>
             <p>SMS</p>
    </div>
    
  )
}

export default LeftSideLogo;
