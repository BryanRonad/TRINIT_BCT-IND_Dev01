import React from "react";
import NewButton from "./Button";
import Footer from "./Footer";
import AddText from "./AddText";

const Navbar = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ width: `${props.properties.width}`, minHeight: "10%", background: "red" }}
        onClick={props.selectTag}
      >
        hi navbar compo
        {/* <div className="navbtns">
          <button className="navbtn" contentEditable>button1</button>
          <button className="navbtn" contentEditable>button1</button>
          <button className="navbtn" contentEditable>button1</button>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
