import React from 'react';
import { LoginImage, Logo,GoogleIcon } from '../EntryFile/imagePath'
import { useNavigate } from 'react-router-dom';



const SignInPage = (props) => {
    const navigate = useNavigate()
    return (
        
            <div className="main-wrapper">
                <div className="account-content">
                    <div className="login-wrapper">
                        <div className="login-content">
                            <div className="login-userset">

                                {/* <div> 
                                  <div className="login-logo"> 
                                        <img src={Logo} alt="img" />
                                    </div> */}
                                    <div className="login-userheading">
                                        <h3>Sign In </h3>
                                        <h4>Please Add Your Login Creadentials</h4>
                                    </div>

                                
                                    <div className="form-login">
                                        <label>Email / Mobile</label>
                                        <div className="form-addons">
                                            <input
                                                type="text"
                                                placeholder="Enter your email address or mobile number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-login">
                                        <label>Password</label>
                                        <div className="form-addons">
                                            <input
                                                type="text"
                                                placeholder="Enter your password"
                                                required
                                            />
                                            <div className="iconify-position-signup">
                                                <iconify-icon icon="ic:round-remove-red-eye" style={{ color: 'grey' }}></iconify-icon>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-login">
                                        <div className="alreadyuser">
                                            <h4>
                                                <span className="hover-a" onClick={()=>navigate('/forgot')} >
                                                    Forget Password?
                                                </span>
                                            </h4>
                                            
                                        </div>
                                    </div>
                                    <div className="form-login">
                                        <button className="btn btn-login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Submit
                                        </button>
                                    </div>
                                    <div className="form-setlogin pt-4" >
                                        <h4>Or sign In with</h4>
                                    </div>
                                    <div className="form-sociallink-googlelogin" >
                                        <img
                                            src={GoogleIcon}
                                            className="me-2"
                                            alt="google"
                                        />
                                        <span style={{ lineHeight: '100%' }} onClick={() => window.open( 'http://www.google.com')}>Sign In with Google</span>
                                    </div>
                                    <div className="signinform text-center mt-4">
                                        <h4>
                                            <span className="hover-a " onClick={()=>navigate('/signup')} >
                                                No account? Signup
                                            </span>
                                        </h4>
                                    </div>
                        
                            </div>
                        </div>
                        <div className="login-img">
                            <img src={LoginImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SignInPage;