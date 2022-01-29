import React from "react";
import NewButton from "./Button";
import Footer from "./Footer";
import AddText from "./AddText";

const Navbar = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ width: "100%", minHeight: "10%", background: "red" }}
        onClick={props.selectTag}
        tabIndex="1"
      >
        hi navbar compo
      </div>
    </>
  );
};

export default Navbar;
