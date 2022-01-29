import React from "react";
const AddCard = (props) => {
  return (
    <>
        <div id={props.id} style={{width:"150px", minHeight: "200px",background:"orange",margin:"10px"}} onClick={props.selectTag}>

        </div>
    </>
  );
};

export default AddCard;