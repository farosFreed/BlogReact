import React, { useState } from "react";
import "./postlist.css";

type BlogPost = {
  title: string;
  description: string;
};

const PostList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
