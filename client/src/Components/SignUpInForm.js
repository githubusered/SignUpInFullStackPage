import React from 'react'
import './SignUpInForm.css'
const SignUpInForm = (props) => {
    if(props.formFor === 'SIGN UP'){
        return(
        <>
            <div className="white-form-inputs">
              <input type="text" placeholder='Name'  className='white-form-input' name='firstname'/>
              <input type="email" placeholder='Email'  className='white-form-input' name='email'/>
              <input type="text" placeholder='Password'  className='white-form-input' name='password'/>  
            </div>
            <button 
                type='submit' 
                className='white-submit-button'
                disabled={props.isPendingUser}
                >
                    {props.formFor}
            </button>
        </>
        )
    }else if(props.formFor === 'SIGN IN'){
       return( 
        <>
            <div className="white-form-inputs">
                <input type="email" placeholder='Email'  className='white-form-input' name='email'/>
                <input type="text" placeholder='Password'  className='white-form-input' name='password'/>  
            </div>
            <p className='white-forgot-password'>Forget your Password?</p>
            <button type='submit' className='white-submit-button'>{props.formFor}</button>
        </>
       )
    }else{
        return(
            <>
                Error: does not exist this props property, please edit it.
            </>
        )
    }
  
}

export default SignUpInForm;
