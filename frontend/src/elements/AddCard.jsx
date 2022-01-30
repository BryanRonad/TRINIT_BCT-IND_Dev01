import React from "react";
const AddCard = (props) => {
  return (
    <>
      <div className="div_wrrapper">
        <div
          id={props.id}
          style={{
            width: props.properties.width,
            minHeight: props.properties.height,
            maxWidth: "100%",
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
      </div>
    </>
  );
};

export default AddCard;
