import style from "./SignIn.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn({ auth }) {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className={style.container}>
      <button onClick={signIn}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
