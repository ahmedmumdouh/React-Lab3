import React from "react";
import { useCreators, usePosts } from "../hooks";
import Header from "./Header";

export function Home({ userId }) {
  const postService = usePosts();
  const creatorService = useCreators();

  return (
    <div>
      <Header></Header>
    </div>
  );
}
