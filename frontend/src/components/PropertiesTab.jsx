import {
  Box,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const PropertiesTab = (props) => {
  return (
    <Box className="properties-tab">
      This is properties
	  {console.log(props)}
      {props.properties && Object.keys(props.properties).map(function (key, index) {
        if (props.properties instanceof Array) {
          Object.keys(props.properties[key]).map(function (key1, index1) {
            return (
              <FormControl key={index+index1}>
                <FormLabel htmlFor={key1}>{key1}</FormLabel>
                <Input
                  id={key1}
                  type="text"
                  maxW="xs"
                  value={props.properties[key][key1]}
                  onChange={props.changeprop}
                />
              </FormControl>
            )
          })
        } else {
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
          )
        }
      })}
    </Box>
  );
};

export default PropertiesTab;
