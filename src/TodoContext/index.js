import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
	const [openModal, setOpenModal] = React.useState(false);
  //usamos nuestro custom hoock
	const {
		item: todos, 
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("STORAGETODO_V1", [])

	//creamos el estado para todoSearch
	const [searchValue, setSearchValue] = React.useState("")

	const todoCompleted = todos.filter((todo) => !!todo.completed).length
	const totalTodos = todos.length

	let searchedTodos = []

	if(!searchValue.length > 1) {
		//mostramos todos los todos
		searchedTodos = todos
	} else {
		//filtramos los todos con incluides
		searchedTodos = todos.filter((todos) => {
			const searchText = searchValue.toLowerCase()
			const text = todos.text.toLocaleLowerCase()
			return text.includes(searchText)
		}) 
	}

	//creamos una función para eliminar y completar todos
	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => text === todo.text);
		
		const newTodos = [...todos]
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos)
	}

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => text === todo.text);
		
		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		saveTodos(newTodos)
	}
	return (
		<TodoContext.Provider value={{
		loading,
    	error,
    	todoCompleted,
    	totalTodos,
    	searchValue,
    	setSearchValue,
    	searchedTodos,
    	completeTodo,
    	deleteTodo,
			openModal,
			setOpenModal,
		}}>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };