import style from "./App.module.css";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import winXPBackground from "./resources/windows-xp-bg.webp";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn/SignIn";
import getFirebaseConfig from "./utils/getFirebaseConfig";

const app = initializeApp(getFirebaseConfig());

const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div
      style={{ backgroundImage: `url(${winXPBackground})` }}
      className={style.App}
    >
      <div className={style.container}>
        <Header auth={auth} />
        {user ? (
          <>
            <Feed db={db} auth={auth} />
          </>
        ) : (
          <SignIn auth={auth} />
        )}
      </div>
    </div>
  );
}

export default App;
