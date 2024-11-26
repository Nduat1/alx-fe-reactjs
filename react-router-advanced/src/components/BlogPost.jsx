import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying content for Blog Post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
