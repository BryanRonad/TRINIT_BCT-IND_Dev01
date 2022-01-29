import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Grid,
  GridItem,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Elements = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Flex color="white">
              <Center w="100px" bg="green.500">
                <Text>header</Text>
              </Center>
              <Center w="100px" bg="green.500">
                <Text>div</Text>
              </Center>
              <Center w="100px" bg="green.500">
                <Text>footer</Text>
              </Center>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Elements;
