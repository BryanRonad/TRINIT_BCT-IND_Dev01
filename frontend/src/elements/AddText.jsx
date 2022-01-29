import React from "react";
const AddText = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ width: "auto", height: "auto" }}
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
