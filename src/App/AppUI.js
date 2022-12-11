import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
// import './index.css';

function AppUI() {
  return (
		<main>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
        <TodoList>
          {loading && <p>Estamos cargando no desesperes...</p>}
          {!loading && error && <p>Hubo un error intentalo de nuevo</p>}
          {!loading && !searchedTodos.length && <p>!!Puedes crear tu primera TAREA!!</p>}
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} 
            />
          ))}
          </TodoList>
          )}
        </TodoContext.Consumer>
      <CreateTodoButton />
    </main>
	)
}

export { AppUI };