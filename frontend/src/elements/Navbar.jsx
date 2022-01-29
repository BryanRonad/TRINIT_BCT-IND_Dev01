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
        onFocus={props.selectTag}
        onBlur={(e)=>{props.unselectTag()}}
        tabIndex="1"
      >
        hi navbar compo
        {props.childtags.map((ele, index) => {
          if (ele.element === "Navbar") {
            return <Navbar key={index} id={index} childtags={ele.children} />;
          }
          if (ele.element === "Footer") {
            return <Footer key={index} id={index} />;
          }
          if (ele.element === "Button") {
            return <NewButton key={index} id={index} />;
          }
          if (ele.element === "Text") {
            return <AddText key={index} id={index} />;
          }
        })}
      </div>
    </>
  );
};

export default Navbar;
