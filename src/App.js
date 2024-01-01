import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CreatePost, Home } from "./Pages";
import { Topbar } from "./components";
function App() {
  return (
    <div className="">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
