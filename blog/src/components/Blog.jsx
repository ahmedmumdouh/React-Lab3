import React from 'react'
import {PostCard} from './PostCard'

function Blog({users,posts}) {
    return (
        <div>
        {posts.map((post) => {
          return (
            <PostCard
              post={post}
              
              user={
                users.filter(
                  (user) => parseInt(user.id) === parseInt(post.userId)
                )[0]
              }
            ></PostCard>
          );

        })}
        </div>
    )
}

export default Blog
