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
  var i = 0;
  const [elementsArray, setElementsArray] = useState([]);
  const [webtags, setWebtags] = useState([]);
  const [activeid, setactiveid] = useState(null);
  const [properties, setProperites] = useState({
    width: "",
    height: "",
  });

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

  useEffect(() => {
    const elementsArrayVariable = myElementsArray();
    const webtagsVar = localStorage.getItem("Webtags");
    // console.log(JSON.parse(webtagsVar));
    setWebtags(JSON.parse(webtagsVar));
    setElementsArray(elementsArrayVariable);
  }, []);

  const selectTag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setactiveid(e.target.id);
    document.querySelector(".active").classList.remove("active");
    if (e.target.id) {
      document.getElementById(e.target.id).classList.add("active");
    } else {
      document.querySelector(".main_div").classList.add("active");
    }
  };

  useEffect(() => {
    getProperties();
  }, [activeid]);

  useEffect(() => {
    localStorage.setItem("Webtags", JSON.stringify(webtags));
  }, [webtags]);

  const deletetag = (e) => {
    e.preventDefault();
    document.getElementById(activeid).remove();
    document.querySelector(".main_div").classList.add("active");
    setactiveid(null);
  };

  const clearWeb = (e) => {
    e.preventDefault();
    setWebtags([]);
  };

  const addelement = (event, element) => {
    event.preventDefault();
    element["elem_id"] = webtags.length;
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

  const getProperties = () => {
    if (activeid) {
      setProperites(webtags[activeid].properties);
    }
  };

  let name, value;
  const changeprop = (e) => {
    e.preventDefault();
    name = e.target.id;
    value = e.target.value;

    setProperites({ ...properties, [name]: value });
    webtags[activeid].properties = { ...properties, [name]: value };
    setWebtags(webtags);
  };

  return (
    <>
      <DragDropContext>
        {console.log(properties)}
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
            <PropertiesTab properties={properties} changeprop={changeprop} />
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
            <Website elements={webtags} selectTag={selectTag} />
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
                  <Button onClick={deletetag}>Delete</Button>
                  <Button onClick={clearWeb}>Clear</Button>
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
