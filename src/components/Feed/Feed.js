import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useState, useRef } from "react";
import style from "./Feed.module.css";
import Message from "../Message/Message";
import Input from "../Input/Input";
import uniqid from "uniqid";
import {
  query,
  orderBy,
  limit,
  addDoc,
  doc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

function Feed({ db, auth }) {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const scrollToElement = useRef();

  const [formValue, setFormValue] = useState("");

  function handleChange(e) {
    setFormValue(e.target.value);
  }

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      senderName: displayName.split(" ")[0],
    });
    setFormValue("");
    scrollToElement.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={style.container}>
      <p>
        To: Global {"<"}global_chat@hotmail.com{">"}
      </p>
      <div className={style.messages}>
        {messages &&
          messages
            .slice(0)
            .reverse()
            .map((msg) => <Message key={uniqid()} msg={msg} auth={auth} />)}
        <div ref={scrollToElement}></div>
      </div>
      <Input
        sendMessage={sendMessage}
        className={style.input}
        formValue={formValue}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Feed;
