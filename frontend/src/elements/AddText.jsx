import React from "react";
const AddText = (props) => {
	return (
		<>
			<div
				id={props.id}
				style={{
					width: props.properties.width,
					height: props.properties.height,
					color: props.properties.fontcolor,
					fontSize: props.properties.fontsize,
				}}
				contentEditable
				onClick={props.selectTag}
				suppressContentEditableWarning={true}
			>
				edit text here
			</div>
		</>
	);
};

export default AddText;
