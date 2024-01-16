import React, { useState } from "react";
// import "./createpost.css";

const PostList: React.FC = () => {
  const mockPosts = [
    { title: "test", description: "test" },
    { title: "test2", description: "test2" },
  ];

  return (
    <ul className="post-list">
      {mockPosts.map((post) => (
        <li>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
