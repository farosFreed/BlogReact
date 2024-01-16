import React, { useState } from "react";
import { supabase } from "../superbaseClient";
import "./createpost.css";

type User = {
  id: string;
};

const CreatePostForm = ({ user }: { user: User }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(user.id);
    const { status, error } = await supabase
      .from("posts")
      .insert({ created_by: user.id, title: title, description: description });

    if (error) {
      alert(error.message);
    }
    if (status === 201) {
      // clear form & show success message
      setTitle("");
      setDescription("");
      setSubmitSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`success-msg ${submitSuccess ? "show" : ""}`}>
        Success! Your post was created.
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
