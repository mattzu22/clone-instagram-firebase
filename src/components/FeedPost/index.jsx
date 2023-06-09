import { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import { PostStyle } from "./style";
import firebase from "firebase/compat/app";

export const FeedPost = ({ setUser, user, post }) => {
  const [comments, setComments] = useState([]);

  function commentData() {
    db.collection("posts")
      .doc(post.id)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (snapshot) {
        setComments(
          snapshot.docs.map(function (document) {
            return { id: document.id, info: document.data() };
          })
        );
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user.displayName);
      }
    });
    commentData();
  }, []);

  function comment(id, e) {
    e.preventDefault();

    let commentCurrent = document.querySelector(`#comment-${id}`).value;

    db.collection("posts").doc(id).collection("comments").add({
      name: user,
      comment: commentCurrent,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    alert("comentário feito com sucesso!");

    commentCurrent = document.querySelector(`#comment-${id}`).value = "";
  }

  return (
    <PostStyle>
      <img src={post.info.image} />
      <h3>
        {post.info.user}: {post.info.titulo}
      </h3>

      <div className="comments">
        {comments.map((comment) => {
          return (
            <div className="comment">
              <p>
                {comment.info.name}: {comment.info.comment}
              </p>
            </div>
          );
        })}
      </div>
      {user?
        <form onSubmit={(e) => comment(post.id, e)}>
          <textarea id={`comment-${post.id}`}></textarea>
          <input type="submit" value="Comentar" />
        </form>
        : null
      }
    </PostStyle>
  );
};
