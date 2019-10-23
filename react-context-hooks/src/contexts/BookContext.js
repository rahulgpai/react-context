import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "React Programming For Dummies", id: 1 },
    { title: "React Redux and More", id: 2 },
    { title: "Because Only Dead Dont React", id: 3 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
