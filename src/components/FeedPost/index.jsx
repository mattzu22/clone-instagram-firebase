import { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import { PostStyle } from './style'

export const FeedPost = ({setUser}) => {
  const [posts, setPosts] = useState([]);

  function postData(){
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
    auth.onAuthStateChanged(user =>{
      setUser(user.displayName)
    })
    postData()
  }, []);

  function comment(id, e){
    e.preventDefault();

    alert('comentário feito com sucesso!')
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <PostStyle>
            <h3>{post.info.titulo}</h3>
            <img src={post.info.image} />
            <form onSubmit={(e) =>comment(post.id,e)}>
              <textarea></textarea>
              <input type="submit" value="Comentar"/>
            </form>
          </PostStyle>
        );
      })}
    </>
  );
};
