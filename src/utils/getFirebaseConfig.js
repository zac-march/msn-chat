const getFirebaseConfig = () => {
  return {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "msn-chat-dd68d.firebaseapp.com",
    projectId: "msn-chat-dd68d",
    storageBucket: "msn-chat-dd68d.appspot.com",
    messagingSenderId: "420144339926",
    appId: "1:420144339926:web:9ea355a39d42070d6a2277",
    measurementId: "G-VJ793PZMR8",
  };
};

export default getFirebaseConfig;
