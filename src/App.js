import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" Component={Detail}></Route>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route
            path="*"
            element={
              <>
                <h1>404</h1>
                <h3>page not found</h3>
              </>
            }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
