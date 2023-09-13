import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "../../store/todos/todos-actions";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import { selectActiveFilter } from "../../store/filters/filters-selectors";
import styles from "./TodoList.module.scss";
import { ReactComponent as CircleIcon } from "../../assets/images/circle.svg";
import { ReactComponent as FilledCircleIcon } from "../../assets/images/circleFilled.svg";

export const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoWrapper}>
          <input
            type="checkbox"
            checked={todo.completed}
            className={styles.textField}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className={styles.checkboxCustom}>
            <CircleIcon />
          </span>
          {todo.title}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className={styles.todoListButton}
          ></button>
        </li>
      ))}
    </ul>
  );
};
