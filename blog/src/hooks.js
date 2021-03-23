import { useEffect, useState , useRef } from "react";
import { BlogApiService } from "./blog-api.service";


export function useComments({ postId }) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((Response) => Response.json())
      .then((json) => {
        setComments(json);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    comments,
  };
}

export function usePost({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((Response) => Response.json())
      .then((json) => {
        setPost(json);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    post,
  };
}

export function useAllPosts() {
  const [postState, setState] = useState({
    posts: [{ id: 1, userId: 1, title: "test-title", body: "test-body" }],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setState({ ...postState, posts: json });
        setLoading(false);
      });
  }, [postState]);

  return {
    loading,
    postState,
  };
}

export function useAllUsers() {
  const [userState, setUsers] = useState({
    users: [],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers({ ...userState, users: json });
        setLoading(false);
      });
  }, [userState]);

  return {
    loading,
    userState,
  };
}

export function useUserPosts({ userId }) {
  const [userPosts, setUserPosts] = useState({
    posts: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((json) => {
        setUserPosts({ ...userPosts, posts: json });
        setLoading(false);
      });
  }, [userPosts]);

  return {
    loading,
    userPosts,
  };
}

export function useUserInfo({ userId }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setUserInfo(json);
        setLoading(false);
        console.log(userInfo)
      });
  }, [userInfo]);

  return {
    loading,
    userInfo,
  };

}





export function useBlogApi() {
  const blogApi = useRef(new BlogApiService());
  return blogApi.current;
}

// const [userblogs, setUserBlogs] = useState(null);
// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     .then((Response) => Response.json())
//     .then((json) => {
//       setUserBlogs(json);
//       // console.log(userblogs);
//     });
// }, [userblogs, userId, setUserBlogs]);
