import { useComments, usePost } from "../hooks";
import Comments from "./Comments";
export default function Post({ postId }) {
  const postService = usePost({ postId });
  const commentService = useComments({ postId });

  return postService.loading || commentService.loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <img
        src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg"
        alt=""
      ></img>
      <h1>{postService.post.title}</h1>
      <p>{postService.post.body}</p>
      <Comments comments={commentService.comments}></Comments>
    </div>
  );
}
