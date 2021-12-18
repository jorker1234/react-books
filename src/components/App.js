import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import BookList from "./BookList";
import BookNew from "./BookNew";
import BookEdit from "./BookEdit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="new" element={<BookNew />} />
          <Route path="edit/:id" element={<BookEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
