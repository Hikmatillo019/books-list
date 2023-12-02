import React from 'react'
import './SignIn.css'
import { facebook, google } from '../components'
function SignIn() {
  return (
    <div className='Sign_in'>
        <div className="sign_epson">
            <div className="sing_text">
                <h1>Sign in</h1>
                <div className="google_enter">
                    <img src={google} alt="" />
                    <h1>Continue with Google</h1>
                </div>
                <div className="facebook_enter">
                    <img src={facebook} alt="" />
                    <h1>Continue with Google</h1>
                </div>
            </div>
            <div className="or">
              <hr />
              <span>OR</span>
              <hr />
            </div>
            <div className="signin_login">
                <div className="sign_inp">
                  <p>Your username</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
