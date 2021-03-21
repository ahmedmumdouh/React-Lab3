import React from 'react'


function PostCard({post , user}) {
  return (
    <div>
        <h2>{post.title}</h2>
        <h3>By: {user.name}</h3>
        <p>{post.body}</p>
      </div>
  );
}

export default function Blog({users,posts}) {
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


