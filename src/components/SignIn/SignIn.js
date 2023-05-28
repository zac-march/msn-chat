import style from "./SignIn.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import msnLogo from "../../resources/msnLogo.png";

function SignIn({ auth }) {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img alt="MSN Logo" src={msnLogo} />
      </div>
      <button onClick={signIn}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
