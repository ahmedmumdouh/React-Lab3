export default function Header({ username, children }) {
  return (
    <div>
      <p>{username}</p>
      {children}
    </div>
  );
}
