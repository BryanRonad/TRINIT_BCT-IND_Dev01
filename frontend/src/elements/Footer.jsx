import React from "react";
const Footer = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ width: "100%", minHeight: "10%", background: "green",position:'absolute',bottom:'0px' }}
        onClick={props.selectTag}
      >
        hi Footer compo
      </div>
    </>
  );
};

export default Footer;
