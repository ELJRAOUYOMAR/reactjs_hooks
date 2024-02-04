import React from 'react'
import axios from 'axios'

const posts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
const Posts = () => {
  return (
    <div>
      posts.get('/posts').then(res => {
        console.log(res.data)
      })
    </div>
  )
}

export default Posts
