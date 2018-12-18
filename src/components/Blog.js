import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';

const Blog = ({ id, name, body, }) => (
  <div style = {{width: "300px"}}>
      <h4>{name}</h4>
      <hr />
      <p>{body}</p>
  </div>
)

export default connect()(Blog);