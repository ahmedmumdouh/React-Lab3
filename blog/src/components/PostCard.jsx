import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "@reach/router";


export const PostCard = ({ user, post }) => {
 
 

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "60rem",
          textAlign: "center",
          marginBottom: "3rem",
          marginTop: "3rem",
          backgroundColor: "lightgray",
        }}
      >
        <h2 style={{ color: "blueviolet" }}><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
        {user && <h3 style={{ color: "orange" }}>By:<Link to={`/users/${user.id}`}>{user.name}</Link> </h3>}
        <Card.Text 
          style={{
            color: "lightcyan",
            backgroundColor: "silver",
            borderColor: "darkgray",
          }}
        >
          {post.body}
        </Card.Text>
      </Card>
    </div>
  );
};
