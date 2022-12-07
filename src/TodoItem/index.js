import React from "react";
import { FaCheck } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import './todoItem.css';

function TodoItem(props) {

	return (
  	<li className="item-wrapper">
		<span 
		  className={`icon-completed ${props.completed && `todo-icon-completed`}`}
      onClick={props.onComplete}>
			  <FaCheck /> 
		</span>
		<p className={`item-text ${props.completed && `text-completed`}`}>
      {props.text}
    </p>
		<span 
      className="icon-delete"
      onClick={props.onDelete}
      > 
      <TiDelete /> 
    </span>
	</li> 
	);
}

export { TodoItem };