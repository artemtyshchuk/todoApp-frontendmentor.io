import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { Filters } from "./components/Filters/Filters";

import "./index.css";

export default function App() {
  return (
    <Container>
      <Header />
      <NewTodo />
      <TodoList />
      {/* <Filters /> */}
    </Container>
  );
}
