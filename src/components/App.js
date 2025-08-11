
import React, { useState } from "react";
import "./../styles/App.css";
import LogginForm from "./LogginForm";

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      {!isLoggedIn ? (
        <LogginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <p>You are logged in!</p>
      )}
   </div>
  );
}

export default App
