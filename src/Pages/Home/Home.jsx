import Layout from '../../Components/Layout/Layout'
import {posts} from '../../Assets/env'
import { Link } from 'react-router-dom'
import './Styles.css'

const Home = ({user}) => {
  console.log('i am Home page');
  
  return (
    <Layout user={user}>
        <div className='homepage'>
            <div className='container home_content'>
                {
                    posts?.map(index => (
                        <div className='post_content' key={index.id}>
                            <h1>{index.title}</h1>
                            <img src={index.img} alt={index.title} />
                            <p>{index.desc}</p>
                            <Link className='button' to={`post/${index.id}`}>read more</Link>
                        </div>
                    ))
                }
            </div> 
        </div>
    </Layout>
  )
}

export default Home