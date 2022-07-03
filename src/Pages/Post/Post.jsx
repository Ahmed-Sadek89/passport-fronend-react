import React from 'react'
import { memo } from 'react';
import {posts} from '../../Assets/env';
import Layout from '../../Components/Layout/Layout';
import { useLocation } from 'react-router-dom'
import './Styles.css'

const Post = () => {
    console.log('i am Post page');
    const location = useLocation()
    const postNumber = parseInt(location.pathname.split('/')[2]);
    const post = posts.find(i => i.id === postNumber );
    return (
        <Layout>
            <div>
                <div className='postImg'>
                    <img src={post.img} alt={post.title} />
                </div>
                <div className='container onepost_content'>
                    <h1>{post.title}</h1>
                    <p className="postDesc">{post.desc}</p>
                    
                    <p className="postLongDesc">{post.longDesc}</p>
                </div>
            </div>
        </Layout>
    )
}

export default memo(Post)