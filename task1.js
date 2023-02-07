import React from "react";
import ReactDom from "react-dom";

// // *Lecture - 13----- Event Basics**

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, event handler
  //onClick, onMouseOver
  // const clickHandler = () => {
  //   alert("Hello World");
  // };
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      {/* inline function  */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* // referencing the function */}
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));