import React from "react";
import { TodoContext } from "../TodoContext";
import './todoCounter.css';

function TodoCounter() {
  const { totalTodos, todoCompleted } = React.useContext(TodoContext);

  return (
    <p className="counter">Has completado {todoCompleted} de {totalTodos} tareas</p>
  );
}

export { TodoCounter };