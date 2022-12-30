import React from "react";
import { ImPlus } from 'react-icons/im';
import './createTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {
	const onCreateTodo = () => {
		!!openModal ?
		setOpenModal(false):
		setOpenModal(true)
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