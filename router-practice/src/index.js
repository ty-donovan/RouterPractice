import React from 'react';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";
import Home from "./Home";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
