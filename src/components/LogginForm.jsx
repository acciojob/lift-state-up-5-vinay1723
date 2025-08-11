import React, { useState } from "react";

export default function LogginForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert("enter both username and password😅😅😅");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:-
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Password:-
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
