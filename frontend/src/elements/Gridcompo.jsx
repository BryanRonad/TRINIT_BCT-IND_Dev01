import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
const Gridcompo = (props) => {
  console.log(props.properties);
  const changeColsandRows = () => {
    document
      .getElementById(props.id)
      .setAttribute(
        "style",
        `display: grid;grid-template-rows: repeat(${props.properties.rows}, 1fr);grid-template-columns: repeat(6, 1fr);width: 100%;height: 100px;background-color: #3b97e3`
      );
  };

	useEffect(() => {
		changeColsandRows();
	}, []);


  return (
    <>
      <div className="Grid_div" id={props.id} onClick={props.selectTag}>
        <div style={{ width: "50px", height: "50px", background: "red" }}></div>
      </div>
    </>
  );
};

export default Gridcompo;
