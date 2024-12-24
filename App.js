import React, { useState, useEffect } from "react";
import './App.css'; // Import the CSS file for styling

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app-container">
      {user ? (
        <div className="profile-card">
          <img
            className="profile-img"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
              <div className="seperate"></div>
          <div className="profile-info">
            <h1 className="profile-name">{`${user.name.first} ${user.name.last}`}</h1>
            <p className="profile-gender">Gender : {user.gender}</p>
            <p className="profile-phone">Phone Number : {user.phone}</p>
     
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
