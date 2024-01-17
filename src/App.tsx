import { useState, useEffect } from "react";
import { supabase } from "./superbaseClient";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "./App.css";
import CreatePostForm from "./components/createpost";
import PostList from "./components/postlist";

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    //return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select();
      if (error) {
        alert(error.message);
      } else if (data) {
        console.log(data);
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {window.location.pathname === "/" ? (
        <div className="Home">
          <h1>Home</h1>
          <PostList posts={posts} />
          <a href="/admin">Go to Admin Dashboard</a>
        </div>
      ) : (
        <>
          {/* if user isn't null, show admin dash
      else show login  */}
          {session !== null ? (
            <div className="Home">
              <h1>Admin Dashboard</h1>
              <CreatePostForm user={session.user} />
              <a href="/">Go Home</a>
            </div>
          ) : (
            <div>
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
