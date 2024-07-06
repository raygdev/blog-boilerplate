import React, { useState } from 'react'
import axios from 'axios'

function PostCreate() {
  const [title, setTitle] = useState('')

  async function onSubmit(e) {
    e.preventDefault()

    const post = await axios.post('http://posts.com/posts/create', { title })
    console.log(post.data)
    setTitle('')
  }
  
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='form-control'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default PostCreate