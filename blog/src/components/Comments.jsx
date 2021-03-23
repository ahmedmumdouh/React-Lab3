export default function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}
