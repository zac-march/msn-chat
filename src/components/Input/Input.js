import style from "./Input.module.css";

function Input() {
  return (
    <div className={style.container}>
      <form>
        <input></input>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Input;
