import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import myElementsArray from "./elementsArray";
import Website from "./Website";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MainPageNavbar from "./components/MainPageNavbar";
import { MdOutlineSmartButton } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { BsSegmentedNav } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineTextFields } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import PropertiesTab from "./components/PropertiesTab";

function App() {
  const [elementsArray, setElementsArray] = useState([]);
  const [webtags, setWebtags] = useState([]);
  const [activeid, setactiveid] = useState(null);

  const iconSwitch = (element) => {
    switch (element) {
      case "Button":
        return <MdOutlineSmartButton size={25} />;
      case "Card":
        return <BsCardText size={20} />;
      case "Navbar":
        return <BsSegmentedNav size={25} />;
      case "Footer":
        return <CgWebsite size={20} />;
      case "Text":
        return <MdOutlineTextFields size={20} />;
      case "Image":
        return <BsImage size={20} />;
      default:
        return null;
    }
  };

  // function handleOnDragEnd(result) {
  //   if (!result.destination) return;

  //   const items = Array.from(elementsArray);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setElementsArray(items);
  // }

  useEffect(() => {
    const elementsArrayVariable = myElementsArray();
    setElementsArray(elementsArrayVariable);
  }, []);

  const selectTag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.id);
    setactiveid(e.target.id);
    document.querySelector(".active").classList.remove("active");
    if (e.target.id) {
      document.getElementById(e.target.id).classList.add("active");
    } else {
      document.querySelector(".main_div").classList.add("active");
    }
  };

  const unselectTag = (e) => {
    e.preventDefault();
    document.getElementById(e.target.id).style.border = "";
    setactiveid(null);
  };

  const deletetag = (e) => {
    e.preventDefault();
    document.getElementById(activeid).remove();
    document.querySelector(".main_div").classList.add("active");
    setactiveid(null);
  };

  const addelement = (event, element) => {
    event.preventDefault();
    if (activeid) {
      if (element.child) {
        webtags[activeid]["children"].push(element);
      } else {
        alert("yhe sir nahi hoga");
      }
    } else {
      webtags.push(element);
    }
    setWebtags([...webtags]);
  };

  const moveLeft = (e) => {
    e.preventDefault();
    console.log(
      document.getElementById(activeid).offsetTop,
      document.getElementById(activeid).offsetLeft
    );
  };

  const moveRight = (e) => {
    e.preventDefault();
    console.log(activeid.offsetTop, activeid.offsetLeft);
  };

  const moveTop = (e) => {
    e.preventDefault();
    console.log(activeid.offsetTop, activeid.offsetLeft);
  };

  const moveBottom = (e) => {
    e.preventDefault();
    console.log(activeid.offsetTop, activeid.offsetLeft);
  };
  return (
    <>
      <DragDropContext>
        <Grid
          templateColumns="repeat(10, 1fr)"
          templateRows="repeat(18, 1fr)"
          height="100vh"
        >
          {/* Navigation Bar */}
          <GridItem w="100%" rowSpan={1} colSpan={10} bg="pink">
            <MainPageNavbar />
          </GridItem>

          <GridItem
            p={5}
            m={3}
            bg={useColorModeValue("gray.100", "gray.900")}
            borderRadius="lg"
            rowSpan={17}
            colSpan={{ base: 2, md: 2, sm: 10 }}
          >
            <PropertiesTab />
          </GridItem>

          {/* Website Workspace */}
          <GridItem
            p={5}
            m={3}
            rowSpan={17}
			colSpan={{ base: 6, md: 6, sm: 7 }}
            bg={useColorModeValue("gray.100", "gray.900")}
            borderRadius="lg"
          >
            <Website
              elements={webtags}
              selectTag={selectTag}
              unselectTag={unselectTag}
            />
          </GridItem>

          {/* DnD bar */}
          <GridItem
            p={5}
            m={3}
            borderRadius="lg"
            bg={useColorModeValue("gray.100", "gray.900")}
            rowSpan={17}
            colSpan={{ base: 2, md: 2, sm: 3 }}
          >
            <Droppable droppableId="characters">
              {(provided) => (
                <Grid
                  p={1}
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    xl: "repeat(2, 1fr)",
                    md: "repeat(1, 1fr)",
                    sm: "repeat(1, 1fr)",
                  }}
                  gap={4}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div>
                    <Button onClick={moveLeft}>Left</Button>
                    <Button onClick={moveRight}>Right</Button>
                    <Button onClick={moveTop}>Top</Button>
                    <Button onClick={moveBottom}>Bottom</Button>
                  </div>
                  <Button onClick={deletetag}>delete</Button>
                  {elementsArray.map((ele, index) => (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <>
                          <GridItem
                            className="hover-items"
                            bg="pink.200"
                            textAlign="center"
                            p={2}
                            borderRadius="lg"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={(e) => addelement(e, ele)}
                          >
                            <Flex direction="row" justifyContent="space-evenly">
                              {iconSwitch(ele.element)}
                              {ele.element}
                            </Flex>
                          </GridItem>
                        </>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </GridItem>
        </Grid>
      </DragDropContext>
    </>
  );
}

export default App;
