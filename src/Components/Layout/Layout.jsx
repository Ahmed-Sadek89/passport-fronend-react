import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { memo } from 'react'

const Layout = ({children, user}) => {
  console.log('i am Layout component');
  return (
    <>
        <Header user={user}/>
          {children}
        <Footer />
    </>
  )
}

export default memo(Layout)