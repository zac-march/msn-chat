import style from "./Header.module.css";
import msnLogo from "../../resources/msnLogo.png";

function Header({ auth }) {
  function handleSignOut() {
    if (auth.currentUser) auth.signOut();
  }

  return (
    <div className={style.container}>
      <div className={style.headerTop}>
        <div className={style.title}>
          <div className={style.titleIcon}>
            <img alt="MSN logo" src={msnLogo} />
          </div>
          <h4>MSN Chat</h4>
        </div>
        <div className={style.windowBtns}>
          <button>_</button>
          <button>□</button>
          <button className={style.signOutBtn} onClick={handleSignOut}>
            x
          </button>
        </div>
      </div>
      <div className={style.headerBottom}>
        <button>File</button>
        <button>Contacts</button>
        <button>Actions</button>
        <button>Tools</button>
        <button>Help</button>
      </div>
    </div>
  );
}

export default Header;
