import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './index.css';

function AppUI({
  loading,
  error,
	todoCompleted,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
	completeTodo,
	deleteTodo,
}) {
  return (
		<main>
      <TodoCounter 
        completed={todoCompleted}
        total={totalTodos}
        />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
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
      <CreateTodoButton />
    </main>
	);
}

export { AppUI };