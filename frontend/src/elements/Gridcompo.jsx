import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { webtagsContext } from "../App";

const Gridcompo = (props) => {
  const [webtags, setwebTags] = useContext(webtagsContext);

  const changeColsandRows = () => {
    document
      .getElementById(props.id)
      .setAttribute(
        "style",
        `display: grid;grid-template-rows: repeat(${parseInt(
          props.properties.rows
        )}, 1fr);grid-template-columns: repeat(${parseInt(
          props.properties.columns
        )}, 1fr);width: 100%;min-height: 200px;background-color: white;padding:5px`
      );
  };

  var i = 0;

  useEffect(() => {
    changeColsandRows();
  }, [props.properties]);

  return (
    <>
      <div className="Grid_div" id={props.id} onClick={props.selectTag}>
        {props.properties.columns !== "" &&
          props.properties.rows !== "" &&
          [...Array(parseInt(props.properties.rows))].map((x, i1) =>
            [...Array(parseInt(props.properties.columns))].map((x, i2) => (
              <div
                key={`${props.id}_${i}`}
                id={`${props.id}_${i}`}
                onClick={props.selectTag}
                style={{ width: "auto", minHeight: "50px", background: "red" }}
              >
                {i++}
              </div>
            ))
          )}
      </div>
    </>
  );
};

export default Gridcompo;
