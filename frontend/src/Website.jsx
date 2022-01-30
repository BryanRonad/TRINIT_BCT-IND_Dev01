import React, { useState } from "react";
import "./Website.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import NewButton from "./elements/Button";
import AddText from "./elements/AddText";
import AddCard from "./elements/AddCard";
import AddImg from "./elements/AddImg";
import Gridcompo from "./elements/Gridcompo";

const Website = (props) => {
  return (
    <div className="main_div" onClick={props.selectTag}>
      {props.elements instanceof Array &&
        props.elements.map((ele, index) => {
          if (ele.element === "Navbar") {
            return (
              <Navbar
                key={index}
                id={index}
                childtags={ele.children}
                selectTag={props.selectTag}
                properties={ele.properties}
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
                properties={ele.properties}
              />
            );
          }
          if (ele.element === "Button") {
            return (
              <NewButton
                key={index}
                id={index}
                selectTag={props.selectTag}
                properties={ele.properties}
              />
            );
          }
          if (ele.element === "Text") {
            return (
              <AddText
                key={index}
                id={index}
                selectTag={props.selectTag}
                properties={ele.properties}
              />
            );
          }
          if (ele.element === "Image") {
            return (
              <AddImg
                key={index}
                id={index}
                selectTag={props.selectTag}
                properties={ele.properties}
              />
            );
          }
          if (ele.element === "Grid") {
            return (
              <Gridcompo
                key={index}
                id={index}
                selectTag={props.selectTag}
                properties={ele.properties}
                childselectTag={props.childselectTag}
              />
            );
          }
          if (ele.element === "Card") {
            return (
              <AddCard
                key={index}
                id={index}
                childtags={ele.children}
                selectTag={props.selectTag}
                properties={ele.properties}
              />
            );
          }
        })}
    </div>
  );
};

export default Website;
