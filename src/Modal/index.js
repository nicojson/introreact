import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ children }) {
	return ReactDOM.createPortal(
		<div className="portalModal">
			<input
				className="modal-input">
			</input>
			<div className="modal-button-container">
			<button className="secondary-button modal-button-cancel">Cancelar</button>
			<button className="secondary-button modal-button-add">Agregar</button>
			</div>
		</div>,
		document.getElementById("modal")
	);
};

export { Modal };
