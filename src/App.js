import style from "./App.module.css";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Input from "./components/Input/Input";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState, userAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "./components/SignIn/SignIn";
import getFirebaseApp from "./utils/getFirebaseApp";

const app = initializeApp(getFirebaseApp());

const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.App}>
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
