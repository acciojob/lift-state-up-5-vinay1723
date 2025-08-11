
import React from "react";
import './../styles/App.css';

const App = () => {
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
