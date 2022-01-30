import React from "react";
import NewButton from "./Button";
import Footer from "./Footer";
import AddText from "./AddText";

const Navbar = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{
          width: `${props.properties.width}`,
          minHeight: "10%",
          background: "orange",
        }}
        className="navbar"
        onClick={props.selectTag}
      >
        <button>
          <a href="#home">
            Home
          </a>
        </button>
        <button>
          <a href="#news">News</a>
        </button>
        <button>
          <a href="#contact">Contact</a>
        </button>
        <button style={{float:"right"}}>
          <a href="#about">About</a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
