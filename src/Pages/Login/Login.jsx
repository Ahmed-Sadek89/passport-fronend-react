import Layout from '../../Components/Layout/Layout'
import './Styles.css';
import Google from '../../Assets/Images/google.png';
import Facebook from '../../Assets/Images/facebook.png';
import Github from '../../Assets/Images/github.png';
import { memo } from 'react';


const Login = ({user}) => {
    console.log('i am Login page');
    
    const google = () => {
        window.open("http://localhost:5000/auth/google/", "_self");
    };
    const github = () => {
        window.open("http://localhost:5000/auth/github/", "_self");
    };
    const facebook = () => {
        window.open("https://file-api-sadek.herokuapp.com/auth/facebook/", "_self");
    };
    
    return (
        <Layout user={user}>
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
                            <button className='google' onClick={google}>
                                <img src={Google} alt='Google' />
                                <span>Google</span>
                            </button>
                            <button className='facebook' onClick={facebook}>
                                <img src={Facebook} alt='Facebook' />
                                <span>Facebook</span>
                            </button>
                            <button className='github' onClick={github}>
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