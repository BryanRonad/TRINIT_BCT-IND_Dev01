import React, { useState } from "react";
import "./Website.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import Button from "./elements/Button";

const Website = (props) => {
  let key_index = "";

  // const Addchildren = (value, index, prevind) => {
  //   if (prevind) {
  //     key_index = prevind + `${index}_`;
  //   } else {
  //     key_index = `${index}_`;
  //   }

  //   if (value.element === "Navbar") {
  //     return (
  //       <Navbar key={key_index} id={key_index}>
  //         {value.children.map((value, index) => {
  //           return Addchildren(value, index, key_index);
  //         })}
  //       </Navbar>
  //     );
  //   }

  //   if (value.element === "Footer") {
  //     return <Footer key={key_index} id={key_index} />;
  //   }
  //   if (value.element === "Button") {
  //     console.log(value);
  //     return <Button key={key_index} id={key_index} />;
  //   }
  // };

  return (
    <div className="main_div">
      {props.elements.map((ele, index) => {
        if (ele.element === "Navbar") {
          return (
            <Navbar key={index} id={index} childtags={ele.children} addchildtags={props.addchildtags}/>
          );
        } else if (ele.element === "Footer") {
          return <Footer key={index} id={index} />;
        } else if (ele.element === "Button") {
          return <Button key={index} id={index} />;
        }
      })}
    </div>
  );
};

export default Website;
