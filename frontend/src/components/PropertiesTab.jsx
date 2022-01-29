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
      {Object.keys(props.properties).map(function (key) {
        return (
          <FormControl>
            <FormLabel htmlFor={key}>{key} (in px/%/vw)</FormLabel>
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
