import style from "./Input.module.css";

function Input({ formValue, sendMessage, handleChange }) {
  return (
    <div className={style.container}>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={handleChange}></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Input;
