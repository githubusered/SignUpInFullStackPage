import React from 'react';
import './GreenPage.css';
import LeftSideLogo from './LeftSideLogo';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const GreenPage = (props) => {
  if(props.aboutFor === 'SIGN IN'){
    return (
      <div className='green'>
                <div className="animationRound"></div>
                <div className="animationTriangle"></div>
                <div className='green-content'>
                  <p>Hello, Friends</p>
                  <p className='text2OnGreen'>Enter your personal details
                      and strat journy with us.
                  </p>
                  <Link to="/signup" className="green-button">SIGN UP</Link>
                </div>
                
      </div>
    )
  }else if(props.aboutFor === 'SIGN UP'){
    return (
      <div className='green-2'>
                <LeftSideLogo/>
                <div className="animationRound"></div>
                <div className="animationTriangle"></div>
                <div className='green-2-content'>
                  <p>Welcome Back!</p>
                  <p className='text2OnGreen'>
                    To keep connected with us please
                    login with your personal info
                  </p>
                  <Link to="/signin" className="green-button">SIGN IN</Link>
                </div>
      </div>
    )
  }
}

export default GreenPage;
