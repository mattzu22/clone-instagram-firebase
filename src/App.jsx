import { useEffect, useState } from "react";
import { Header } from "./components/header/index.jsx";
import { FeedPost } from "./components/FeedPost/index.jsx";
import CSSreset from "./components/CSSreset/CSSreset.js";
import { db } from "./firebase.js";

function App() {
  const [user, setUser] = useState();

  const [posts, setPosts] = useState([]);

  function postData() {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, info: doc.data() };
          })
        );
      });
  }

  useEffect(() => {
    postData()
  }, []);

  return (
    <>
      <CSSreset />
      <Header user={user} setUser={setUser} />
      {posts.map((post, key)=>{
        return(
          <FeedPost post={post} setUser={setUser} user={user} key={key}/>
        )
      })}
    </>
  );
}

export default App;
