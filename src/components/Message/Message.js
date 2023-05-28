import style from "./Message.module.css";

function Message({ msg, auth }) {
  const { currentUser: user } = auth;
  const messageStyle = msg.uid === user.uid ? style.sent : style.recieved;

  return (
    <div className={`${messageStyle} ${style.message}`}>
      <p>{msg.text}</p>
      <img alt="user profile" src={msg.photoURL}></img>
    </div>
  );
}

export default Message;
