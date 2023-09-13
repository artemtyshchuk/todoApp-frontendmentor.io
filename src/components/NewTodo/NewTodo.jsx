import styles from "./NewTodo.module.scss";
import { ReactComponent as CircleIcon } from "../../assets/images/circle.svg";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todos/todos-actions";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.newTodo}>
        <label htmlFor="search" className={styles.label}>
          <CircleIcon style={{ opacity: "inherit" }} />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="todo"
          name="title"
          placeholder="Create a new todo…"
        />
      </div>
    </form>
  );
};
