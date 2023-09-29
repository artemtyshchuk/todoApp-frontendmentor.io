import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/filters/filters-slice";
import { clearCompleted } from "../../features/todos/todos-slice";

import styles from "./Filters.module.scss";

export const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const todoCount = useSelector((state) => state.todos.length);

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
