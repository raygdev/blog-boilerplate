import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

function PostList() {
  const [posts, setPosts] = useState({})

  async function getPosts() {
    const res = await axios.get('http://posts.com/posts')

    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const renderedPosts = Object.values(posts)
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
        {
            renderedPosts?.map(post => {
                return (
                    <div key={post.id} className='card' style={{width: "30%", marginBottom: '20px'}}>
                        <div className='card-body'>
                            <h3>{post.title}</h3>
                        </div>
                        <CommentList comments={post.comments}/>
                        <CommentCreate postId={post.id} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostList