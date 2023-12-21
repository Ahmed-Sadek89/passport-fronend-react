import { memo } from 'react'
import './Styles.css'
import {Link} from 'react-router-dom';

const Header = ({user}) => {
    console.log('i am header component');
    console.log(user);
    const logout = () => {
        window.open('https://simple-passportjs-app.onrender.com/auth/logout', '_self')
        //window.open('http://localhost:5000/auth/logout', '_self')
    }
    return (
        <div className='header'>
            <div className='container layout'>
                <div className='left'>
                    <Link to='/'>Ahmed sadek</Link>
                </div>
                <div className='right'>
                    <ul>
                        {
                            (user) ? 
                            <>
                                <li>
                                    <div>
                                        <img src={user?.thumbnail} alt={user?.username} />
                                    </div>
                                </li>
                                <li>
                                    {user?.username}
                                </li>
                                <li className='logout' onClick={logout}>
                                    logout
                                </li>
                            </>
                                :
                            <li>
                                <Link to='/login'>login</Link>
                            </li>
                            
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(Header)
