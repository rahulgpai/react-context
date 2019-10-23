import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Show Me The Meaning Of Being Lonely - Backstreet Boys", id: 1 },
    { title: "As Long As You Love Me - Backstreet Boys", id: 2 },
    { title: "I Want It That Way - Backstreet Boys", id: 3 },
    { title: "Quit Playing Games With My Heart - Backstreet Boys", id: 4 }
  ]);

  const [age, setAge] = useState(20);

  const addSong = title => {
    setSongs([
      ...songs,
      {
        title,
        id: uuid()
      }
    ]);
  };

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect hook ran", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong}></NewSongForm>
      <button onClick={() => setAge(age + 1)}>Add 1 to {age}</button>
    </div>
  );
};

export default SongList;
