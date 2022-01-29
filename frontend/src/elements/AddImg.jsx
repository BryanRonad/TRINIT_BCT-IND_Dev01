import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import React from "react";
const AddImg = (props) => {
  return (
    <>
        <img id={props.id} src='https://bit.ly/dan-abramov'  onClick={props.selectTag} width={200} height={100}/>
    </>
  );
};

export default AddImg;