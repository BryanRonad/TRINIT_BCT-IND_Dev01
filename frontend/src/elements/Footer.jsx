import React from "react";
const Footer = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ width: "100%", minHeight: "10%", background: "green",position:'absolute',bottom:'0px',color: 'white',textAlign: 'center' }}
        onClick={props.selectTag}
        contentEditable
      >
        Footer
      </div>
    </>
  );
};

export default Footer;
