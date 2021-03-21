import React from 'react'
import Card from 'react-bootstrap/Card'
export const PostCard = ({user,post}) => {
  return (<div style={{ display:'flex', justifyContent:'center'  }}>
  <Card style={{ width: '60rem' , textAlign:'center' ,marginBottom:'3rem',marginTop:'3rem'}} >
  <h2>{post.title}</h2>
  <h3>By: {user.name}</h3>
  <Card.Text>
      {post.body}
  </Card.Text>
  </Card>
  </div>
  )
}


