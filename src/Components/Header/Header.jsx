import { memo } from 'react'
import './Styles.css'
import {Link} from 'react-router-dom';

const Header = () => {
    const user = false
    console.log('i am header component');
    return (
        <div className='header'>
            <div className='container layout'>
                <div className='left'>
                    <Link to='/'>Ahmed sadek</Link>
                </div>
                <div className='right'>
                    <ul>
                        {
                            user ? 
                            <>
                                <li>
                                    img
                                </li>
                                <li>
                                    Sadek test
                                </li>
                                <li>
                                    logot
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