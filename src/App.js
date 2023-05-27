import style from "./App.module.css";
import Header from "./components/header/Header";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Feed />
    </div>
  );
}

export default App;
