import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import './index.css';

function AppUI() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
   } = React.useContext(TodoContext);

  return (
		<main>
      <TodoCounter />
      <TodoSearch />
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

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </main>
	)
}

export { AppUI };