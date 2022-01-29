import React, { useState } from "react";
import "./Website.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import NewButton from "./elements/Button";
import AddText from "./elements/AddText";
import AddCard from "./elements/AddCard";
import AddImg from "./elements/AddImg";

const Website = (props) => {
  let key_index = "";

  return (
    <div className="main_div">
      {props.elements.map((ele, index) => {
        if (ele.element === "Navbar") {
          return (
            <Navbar
              key={index}
              id={index}
              childtags={ele.children}
              addchildtags={props.addchildtags}
            />
          );
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
        if (ele.element === "Image") {
          return <AddImg key={index} id={index} />;
        }
        if (ele.element === "Card") {
          return <AddCard key={index} id={index} />;
        }
      })}
    </div>
  );
};

export default Website;
