import React from "react";
import { useState } from "react";
import { navigate, redirectTo } from "@reach/router"
import Post from "./Post";

function CreatePost() {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
//  let showPost=false;
 // let jsonToPass={};
  //const [state, setstate] = useState(initialState);

  
  return (
    <div>
      <label> title</label>
      <input type="text" name="title"  onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}/>
      <label htmlFor="body">body</label>
      <input
        type="text"
        name="body"
        onChange={(e) => {
          setBody(e.target.value);
          console.log(body);
        }}
      />
      <label htmlFor="userId">userId</label>
      <input type="text" name="userId" value="1" />
      <button type="submit"  onClick={(e) => {
          e.preventDefault();
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) =>{ console.log(json); localStorage.setItem("newPost",JSON.stringify(json)) });
            console.log("haha");
            
            
           console.log(localStorage.getItem("newPost"));
           navigate("/posts/101");


      }}>submit</button>
       
     
    </div>
  );
}

export default CreatePost;
