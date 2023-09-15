import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter } from "../../store/filters/filters-selectors";
import { selectTodoCount } from "../../store/todos/todos-selectors";
import { setFilter } from "../../store/filters/filters-actions";
import styles from "./Filters.module.scss";
import { clearCompleted } from "../../store/todos/todos-actions";

export const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  const todoCount = useSelector(selectTodoCount);

  return (
    <div className={styles.filters}>
      <p className={styles.itemsLeft}>{todoCount} items left</p>
      <div className={styles.mainButtons}>
        <button
          className={styles.filterButton}
          onClick={() => dispatch(setFilter("all"))}
          style={{ color: activeFilter === "all" ? "#3A7CFD" : "" }}
        >
          All
        </button>

        <button
          className={styles.filterButton}
          onClick={() => dispatch(setFilter("active"))}
          style={{ color: activeFilter === "active" ? "#3A7CFD" : "" }}
        >
          Active
        </button>

        <button
          className={styles.filterButton}
          onClick={() => dispatch(setFilter("completed"))}
          style={{
            color: activeFilter === "completed" ? "#3A7CFD" : "",
          }}
        >
          Completed
        </button>
      </div>

      <div className={styles.clearCompleted}>
        <button
          className={styles.filterButton}
          onClick={() => dispatch(clearCompleted())}
          style={{
            color: activeFilter === "clearCompleted" ? "#3A7CFD" : "",
          }}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};
