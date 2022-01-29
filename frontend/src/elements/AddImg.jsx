import React from "react";
const AddImg = (props) => {
	return (
		<>
			<img
				style={{
					margin: props.properties.margin,
					padding: props.properties.padding,
				}}
				alt={props.properties.alt}
				id={props.id}
				src={props.properties.src}
				onClick={props.selectTag}
				width={props.properties.width}
				height={props.properties.height}
			/>
		</>
	);
};

export default AddImg;
