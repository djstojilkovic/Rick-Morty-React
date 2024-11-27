import "./app.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { SinglePage } from "./pages/SinglePage/SinglePage";
import { Head } from "./components/Header/Head";

const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/characters" element={<HomePage />} />
        <Route path="/character/:id" element={<SinglePage />} />
        <Route path="/character/*" element={<Navigate to={"/character/1"} />} />
        <Route path="*" element={<Navigate to={"/characters"} />} />
      </Routes>
    </>
  );
};

export default App;
