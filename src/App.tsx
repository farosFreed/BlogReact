import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {/* if user isn't null, show home 
      else show login  */}
      {user !== null ? (
        <div className="Home">
          <h1>Home</h1>
          <p>Home is where the heart is</p>
          <ul>
            <li>Blog Post 1</li>
            <li>Blog Post 2</li>
            <li>Blog Post 3</li>
          </ul>
        </div>
      ) : (
        <div className="Login">
          <h1>Login</h1>
          <p>Please login</p>
          <form id="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
