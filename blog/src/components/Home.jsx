import React from "react";
import { useCreators, usePosts } from "../hooks";
import Header from "./Header";

export function Home({ userId }) {
  const postService = usePosts();
  const creatorService = useCreators();

  return postService.loading || creatorService.loading ?(
    <h1>Loading...</h1>
  ) :(
    <div>
      <Header username={creatorService.creatorState.creators.filter(user=>user.id === 1)[0].name}></Header>
      <h1>Featured Posts</h1>

      
    </div>
  );
}


