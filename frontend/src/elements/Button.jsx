import { Button } from "@chakra-ui/react";
import React from "react";
const NewButton = (props) => {
  return (
    <>
      <Button id={props.id} colorScheme='blue'>Button</Button>
    </>
  );
};

export default NewButton;