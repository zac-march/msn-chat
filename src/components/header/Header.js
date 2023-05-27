import style from "./Header.module.css";

function Header({ auth }) {
  return (
    <div className={style.container}>
      <h1>MSN Chat</h1>
      {auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign out</button>
      )}
    </div>
  );
}

export default Header;
