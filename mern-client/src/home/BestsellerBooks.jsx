import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  });
  return (
    <div>
      <BookCard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBooks;
