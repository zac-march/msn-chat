import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.container}>
      <h1>MSN Chat</h1>
      <button>Sign out</button>
    </div>
  );
}

export default Header;
