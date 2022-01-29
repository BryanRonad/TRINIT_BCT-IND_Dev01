import { Button } from "@chakra-ui/react";
import React from "react";
const NewButton = (props) => {
	return (
		<>
			<button
				style={{
					background: "red",
					fontSize: props.properties.fontsize,
					color: props.properties.fontcolor,
					width: props.properties.width,
					height: props.properties.height,
					padding: "10px",
					margin: "10px",
					borderRadius: "10px",
				}}
				id={props.id}
				onClick={props.selectTag}
				colorScheme="blue"
			>
				Button
			</button>
		</>
	);
};

export default NewButton;
