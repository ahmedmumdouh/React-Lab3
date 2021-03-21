import React from 'react'

function PostCard() {
  return (
    <div>
        <h2>{post.title}</h2>
        <h3>By: {user.name}</h3>
        <p>{post.body}</p>
      </div>
  )
}

export default PostCard
