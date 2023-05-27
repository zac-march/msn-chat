import style from "./SignIn.module.css";

function SignIn({ firebase, auth }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className={style.container}>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
