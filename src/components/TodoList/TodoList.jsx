import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  selectVisibleTodos,
} from "../../features/todos/todos-slice";

import styles from "./TodoList.module.scss";
import { ReactComponent as CircleIcon } from "../../assets/images/circle.svg";
import { ReactComponent as FilledCircleIcon } from "../../assets/images/circleFilled.svg";

export const TodoList = () => {
  const [iconStates, setIconStates] = useState({});

  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  const toggleIconState = (id) => {
    setIconStates((prevIconStates) => ({
      ...prevIconStates,
      [id]: !prevIconStates[id],
    }));
  };

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={
            iconStates[todo.id] ? styles.todoWrapperFilled : styles.todoWrapper
          }
          onClick={() => {
            toggleIconState(todo.id);
            dispatch(toggleTodo(todo.id));
          }}
        >
          <span className={styles.checkboxCustom}>
            {iconStates[todo.id] ? <FilledCircleIcon /> : <CircleIcon />}
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
