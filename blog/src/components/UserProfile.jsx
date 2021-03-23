import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { useUserInfo, useUserPosts } from "../hooks";

export default function UserProfile({ userId }) {
  const userInfoService = useUserInfo({ userId });
  const usePostsIService = useUserPosts({ userId });

  return userInfoService.loading || usePostsIService.loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
        <div className="card text-white bg-secondary mb-3" style={{ display: "flex", textAlign: "center" }} >
        <div className="card-header">{userInfoService.userInfo.company.name}</div>
        <div className="card-body">
          <h5 className="card-title">{userInfoService.userInfo.name}</h5>
          <p className="card-text">
          {userInfoService.userInfo.phone}
          </p>
        </div>
      </div>
      {usePostsIService.userPosts.posts && usePostsIService.userPosts.posts.map((post) => (<PostCard post={post}></PostCard>))}
  </div>
  );
}


