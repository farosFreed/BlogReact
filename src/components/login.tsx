import React, { useState } from "react";
import { supabase } from "../superbaseClient";
import { AuthError } from "@supabase/supabase-js";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  /* const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }; */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    AuthError;
    if (error) {
      alert(error.message);
      //error.error_description
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        {/* <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
  </label> */}
        <br />
        <button type="submit" disabled={loading}>
          {loading ? <span>Loading</span> : <span>Send magic link</span>}
        </button>
      </form>
    </div>
  );
};

export default Login;
