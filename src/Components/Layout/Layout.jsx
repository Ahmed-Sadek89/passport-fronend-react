import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { memo } from 'react'

const Layout = ({children}) => {
  console.log('i am Layout component');
  return (
    <>
        <Header />
          {children}
        <Footer />
    </>
  )
}

export default memo(Layout)