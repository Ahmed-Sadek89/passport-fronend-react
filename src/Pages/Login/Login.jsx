import Layout from '../../Components/Layout/Layout'
import './Styles.css';
import Google from '../../Assets/Images/google.png';
import Facebook from '../../Assets/Images/facebook.png';
import Github from '../../Assets/Images/github.png';
import { memo } from 'react';


const Login = () => {
    console.log('i am Login page');
  return (
    <Layout>
        <div className='container login'>
            <div className='login_layout'>
                <h1>choose a login method</h1>
                <div className='login_content'>
                    <div className='login_manual'>
                        <input type='text' placeholder='username' />
                        <input type='password' placeholder='password' />
                        <div className='button'>
                            <button>
                                login
                            </button>
                        </div>
                    </div>
                    <div className='login_separetor'>
                        <div className='divider'></div>
                        <span>or</span>
                    </div>
                    <div className='login_social'>
                        <button className='google'>
                            <img src={Google} alt='Google' />
                            <span>Google</span>
                        </button>
                        <button className='facebook'>
                            <img src={Facebook} alt='Facebook' />
                            <span>Facebook</span>
                        </button>
                        <button className='github'>
                            <img src={Github} alt='Github' />
                            <span>Github</span>
                        </button>
                    </div>
                </div>
                
            </div> 
        </div>
    </Layout>
  )
}

export default memo(Login)