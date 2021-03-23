import React, { createContext } from "react";
import { useAllPosts, useAllUsers } from "../hooks";
import Blog from "./Blog";
import Header from "./Header";

export const usersContext = createContext({ users: [] });
export const postsContext = createContext({ posts: [] });

export function Home({ userId }) {
  const postService = useAllPosts();
  const userService = useAllUsers();

  return postService.loading || userService.loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Header
        username={
          userService.userState.users.filter((user) => user.id === 1)[0].name
        }
      ></Header>
      <h1>Featured Posts</h1>
      <Blog
        posts={postService.postState.posts.slice(0, 7)}
        users={userService.userState.users}
      ></Blog>
    </div>
  );
}
