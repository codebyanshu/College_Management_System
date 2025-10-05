import React from "react";
import LoginPage from "./Components/LoginPage";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
// import './App.css'

function App() {
  return (
    <>
      <div className="bg-white border-gray-200 dark:bg-gray-900 ">
        {/* <LoginPage /> */}
        <HomePage/>
      </div>
    </>
  );
}

export default App;
