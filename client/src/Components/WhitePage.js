import React from 'react'

import './WhitePage.css';

import facebook_icon from '../assets/img/Vector.svg'
import google_icon from '../assets/img/Vector-1.svg'
import linkedin_icon from '../assets/img/Vector-2.svg'
import LeftSideLogo from './LeftSideLogo';
import SignUpInForm from './SignUpInForm';

import useUsers from '../hooks/useUsers';


const White = (props) => {
  const {
    // isPendingUser,
    // users,
    submitUsers,
    // deleteUsers,
     checkAndEnterAccount} = useUsers();
  console.log(props);
  if (props.formFor === 'SIGN UP'){
    return (
      <div className={props.formFor === 'SIGN IN' ?  'white' : 'white-2'}>
          {props.formFor === 'SIGN IN' ? <LeftSideLogo/> : '' }
          <form className='white-form' onSubmit={submitUsers}>
              <h2>{props.formFor === 'SIGN IN' ? 'SIGN' : 'Create Account' }
              </h2>
              <div className='white-social-pages-icons'>
                <div><img src={facebook_icon} alt="icon_facebook" /></div>
                <div><img src={google_icon} alt="icon_google" /></div>
                <div><img src={linkedin_icon} alt="icon_linkedin" /></div>
              </div>
              <SignUpInForm formFor={props.formFor} />
          </form>
  
      </div>
    )
  }else if(props.formFor === 'SIGN IN') {
    return (
      <div className={props.formFor === 'SIGN IN' ?  'white' : 'white-2'}>
          {props.formFor === 'SIGN IN' ? <LeftSideLogo/> : '' }
          <form className='white-form' onSubmit={checkAndEnterAccount}>
              <h2>{props.formFor === 'SIGN IN' ? 'SIGN' : 'Create Account' }
              </h2>
              <div className='white-social-pages-icons'>
                <div><img src={facebook_icon} alt="icon_facebook" /></div>
                <div><img src={google_icon} alt="icon_google" /></div>
                <div><img src={linkedin_icon} alt="icon_linkedin" /></div>
              </div>
              <SignUpInForm formFor={props.formFor} />
          </form>
  
      </div>
    )
  }
}

export default White;
