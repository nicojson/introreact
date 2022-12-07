import React from "react";
import './todoCounter.css';

function TodoCounter({ completed, total }) {
  return (
    <p className="counter">Has completado {completed} de {total} tareas</p>  
  );
}

export { TodoCounter };