import { memo } from 'react'
import './Styles.css'

const Footer = () => {
  console.log('i am footer component');
  return (
    <div className='footer'>
        <div className='container content'>
            <h5>© 2022 Copyright All Right Reserved </h5>
            <span>
                <a rel="noreferrer" href='https://ahmed-sadek89.github.io/s-a-d-e-k/' target={'_blank'}>
                    Ahmed Sadek
                </a>
            </span>
        </div>
    </div>
  )
}

export default memo(Footer)