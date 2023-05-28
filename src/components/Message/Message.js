import style from "./Message.module.css";

function Message({ msg, auth }) {
  const { currentUser: user } = auth;
  const messageStyle = msg.uid === user.uid ? style.sent : style.recieved;
  console.log(auth.currentUser);
  return (
    <div className={`${messageStyle} ${style.message}`}>
      <p className={style.sender}>{msg.senderName} says:</p>
      <p className={style.text}>{msg.text}</p>
    </div>
  );
}

export default Message;
