import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const PropertiesTab = (props) => {
  return (
    <Box className="properties-tab">
      This is properties
      {console.log(props)}
      {props.properties &&
        Object.keys(props.properties).map(function (key, index) {
          return (
            <FormControl key={index}>
              <FormLabel htmlFor={key}>{key}</FormLabel>
              <Input
                id={key}
                type="text"
                maxW="xs"
                value={props.properties[key]}
                onChange={props.changeprop}
              />
            </FormControl>
          );
        })}
    </Box>
  );
};

export default PropertiesTab;
