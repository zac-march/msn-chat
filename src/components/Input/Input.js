import style from "./Input.module.css";

function Input({ formValue, sendMessage, handleChange }) {
  return (
    <div className={style.container}>
      <form onSubmit={sendMessage}>
        <textarea value={formValue} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Input;
