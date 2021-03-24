// eslint-disable-next-line no-restricted-globals
import { useComments, usePost } from "../hooks";
import Comments from "./Comments";
import { useHistory } from 'react-router'
import { navigate } from "@reach/router";
export default function Post({ postId}) {
  const postService = usePost({ postId });
  const commentService = useComments({ postId });
  
  
 

  return postService.loading || commentService.loading ? (
    <h1>Loading...</h1>
  ) : (
  <div >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img 
        src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg"
        alt="" 
      ></img>
      </div>
      <div className="container">
      {console.log(JSON.parse(localStorage.getItem("newPost")))}
     {postId<=100&&<h1>{postService.post.title}</h1>}
     {postId<=100&&<p>{postService.post.body}</p>}
     {postId<=100&&<Comments comments={commentService.comments}></Comments>}

      {postId>100&&<h1>{JSON.parse(localStorage.getItem("newPost")).title}</h1>}
      {postId>100&& <h1>{JSON.parse(localStorage.getItem("newPost")).body}</h1>}
      </div>
    
    </div>
  );
}
