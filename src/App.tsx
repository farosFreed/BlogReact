import { useState, useEffect } from "react";
import { supabase } from "./superbaseClient";
import Login from "./components/login";

import "./App.css";

function App() {
  // const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      {/* if user isn't null, show home 
      else show login  */}
      {session !== null ? (
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
        <div>
          <Login />
        </div>
      )}
    </>
  );
}

export default App;
