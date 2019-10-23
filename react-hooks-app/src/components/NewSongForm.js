import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Song Name</label>
      <input
        type="text"
        required
        name="title"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSongForm;
