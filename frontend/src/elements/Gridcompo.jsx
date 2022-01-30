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
        )}, 1fr);width: 100%;min-height: 200px;background-color: white;padding:5px;margin-top:10px`
      );
  };

  var i = 0;

  const setproperties = () => {
    let temp = webtags;

    {
      props.properties.columns !== "" &&
        props.properties.rows !== "" &&
        [...Array(parseInt(props.properties.rows * props.properties.columns))].map((x, i1) =>
            temp[props.id]["children"].push({
              elem_id: `${props.id}_${i1}`,
              gridcolumn: `1 / span 2`,
              gridrow: `1 / span 2`,
            }),
          (temp = JSON.parse(JSON.stringify(temp))),
          setwebTags(temp)
        );
    }

    i = 0
  };

  useEffect(() => {
    setproperties();
  }, []);

  useEffect(() => {
    changeColsandRows();
  }, [props.properties]);

  return (
    <>
      <div className="Grid_div" id={props.id} onClick={props.selectTag}>
        {webtags[props.id]["children"].map((ele) => {
          return (
            <div
              key={ele.elem_id}
              id={ele.elem_id}
              onClick={props.selectTag}
              style={{ width: "auto", minHeight: "50px", background: "red" }}
            ></div>
          )
        }
        )
        }
      </div>
    </>
  );
};

export default Gridcompo;
