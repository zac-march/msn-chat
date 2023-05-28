import style from "./Header.module.css";

function Header({ auth }) {
  return (
    <div className={style.container}>
      <div className={style.headerTop}>
        <div className={style.title}>
          <div className={style.titleIcon}>
            <img src="https://picsum.photos/15/15" />
          </div>
          <h4>MSN Chat</h4>
        </div>
        <div className={style.windowBtns}>
          <button>_</button>
          <button>□</button>
          <button>x</button>
        </div>
      </div>
      <div className={style.headerBottom}>
        <button>File</button>
        <button>Contacts</button>
        <button>Actions</button>
        <button>Tools</button>
        <button>Help</button>
      </div>
      {auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign out</button>
      )}
    </div>
  );
}

export default Header;
