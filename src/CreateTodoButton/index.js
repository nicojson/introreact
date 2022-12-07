import React from "react";
import { ImPlus } from 'react-icons/im';
import './createTodoButton.css';

function CreateTodoButton() {
	const onCreateTodo = () => {
		console.log("Has creado un todo")
	}

	return (
		<div className="button-container">
			<button 
			className="primary-button" 
			type="button"
			onClick={onCreateTodo}
			> 
				<ImPlus />
			</button>
		</div>
	);
}

export { CreateTodoButton };