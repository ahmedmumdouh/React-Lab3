import React from "react";
import { PostCard } from "./PostCard";

export default function Blog({ users, posts }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <PostCard key={post.id}
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
  );
}
