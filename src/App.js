import style from "./App.module.css";
import Header from "./components/header/Header";
import Feed from "./components/Feed/Feed";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Feed />
      <Input />
    </div>
  );
}

export default App;
