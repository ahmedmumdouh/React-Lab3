import React, { Children, createContext } from "react";
import { useAllPosts, useAllUsers } from "../hooks";
import Blog from "./Blog";
import Header from "./Header";
import { useContext } from "react";
import { BlogContext } from "../context";

export const usersContext = createContext({ users: [] });
export const postsContext = createContext({ posts: [] });

export function Home({ children }) {
  const postService = useAllPosts();
  const userService = useAllUsers();

  const context = useContext(BlogContext);
  const postLength = postService.postState.posts.length
  // const curUser = children.props.children.blogApi.currentUser
  console.log(context)

  return postService.loading || userService.loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
    
      <h1 style={{ display: "flex", justifyContent: "center" }}>Featured Posts</h1>
      <Blog
        posts={postService.postState.posts.slice(0, 7)}
        users={userService.userState.users}
      ></Blog>
    </div>
  );
}
