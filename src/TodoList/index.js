import React from "react";
import './todoList.css';

function TodoList(props) {
	return (
  <section className="list-container">
		<ul className="list-wrapper">
			{props.children}
		</ul>
  </section>
	);
}

export { TodoList };