import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

export default function UserProfile({ userId }) {
  const [userblogs, setUserBlogs] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((Response) => Response.json())
      .then((json) => {
        setUserBlogs(json);
        // console.log(userblogs);
      });
  }, [userblogs, userId, setUserBlogs]);
  return (
    <div>
      {userblogs && userblogs.map((post) => <PostCard post={post}></PostCard>)}
    </div>
  );
}
