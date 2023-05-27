import style from "./App.module.css";
import Header from "./components/header/Header";
import Feed from "./components/Feed/Feed";
import Input from "./components/Input/Input";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState, userAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "./components/SignIn/SignIn";
import getFirebaseApp from "./utils/getFirebaseApp";

firebase.initializeApp(getFirebaseApp);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header auth={auth} />
        {user ? (
          <>
            <Feed /> <Input />
          </>
        ) : (
          <SignIn firebase={firebase} auth={auth} />
        )}
      </div>
    </div>
  );
}

export default App;
