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
  return (
    <div className="main_div active" onClick={props.selectTag}>
      {props.elements.map((ele, index) => {
        if (ele.element === "Navbar") {
          return (
            <Navbar
              key={index}
              id={index}
              childtags={ele.children}
              selectTag={props.selectTag}
            />
          );
        }

        if (ele.element === "Footer") {
          return (
            <Footer
              key={index}
              id={index}
              childtags={ele.children}
              selectTag={props.selectTag}
              unselectTag={props.unselectTag}
            />
          );
        }
        if (ele.element === "Button") {
          return <NewButton key={index} id={index} selectTag={props.selectTag} />;
        }
        if (ele.element === "Text") {
          return <AddText key={index} id={index} selectTag={props.selectTag} />;
        }
        if (ele.element === "Image") {
          return <AddImg key={index} id={index} selectTag={props.selectTag} />;
        }
        if (ele.element === "Card") {
          return (
            <AddCard
              key={index}
              id={index}
              childtags={ele.children}
              selectTag={props.selectTag}
            />
          );
        }
      })}
    </div>
  );
};

export default Website;
