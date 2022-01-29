import React from "react";
const AddCard = (props) => {
	return (
		<>
			<div
				id={props.id}
				style={{
					width: props.properties.width,
					minHeight: props.properties.height,
					background: props.properties.color,
					margin: props.properties.margin,
					padding: props.properties.padding,
					fontSize: props.properties.fontsize,
					color: props.properties.fontcolor,
					borderRadius: "15px",
				}}
				onClick={props.selectTag}
			>
				{props.children}
			</div>
		</>
	);
};

export default AddCard;
