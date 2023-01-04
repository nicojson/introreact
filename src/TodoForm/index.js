import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoForm.css";

function TodoForm() {
	const [ newTodoValue, setNewTodoValue ] = React.useState("");

	const {
		addTodo,
		setOpenModal,
	} = React.useContext(TodoContext);

	const onChange = (event) => {
		setNewTodoValue(event.target.value)
	};

	const onSubmit = (event) => {
		event.preventDefault()
		addTodo(newTodoValue)
		setOpenModal(false)
	};

	const onCancel = () => {
		setOpenModal(false)
	};

  return(
		<form onSubmit={onSubmit}>
			<label className="title">Escribe tu nueva Tarea</label>
			<textarea
				placeholder="comprar regalos para navidad"
				onChange={onChange}
				value={newTodoValue}
				className="form-input"
				/>
			<div 
				className="form-button-container"
				>
				<button
					onClick={onCancel}
					type="button" 
					className="secondary-button form-button-cancel"
				>
					Cancelar
				</button>
				<button
					type="submit" 
					className="secondary-button form-button-add"
					>
					Agregar
				</button>
			</div>
		</form>
  );
}

export { TodoForm };