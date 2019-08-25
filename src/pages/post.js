import React from 'react'
import Layout from '../layout/Layout'
import PostComponent from '../components/PostComponent'
const Post = (props) =>{
    return(
        <div>
        <Layout>
            <PostComponent data={props.match.params.id}/>
        </Layout>
    </div>
    )
 
}

export default Post