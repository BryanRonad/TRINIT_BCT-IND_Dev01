import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
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

export const webtagsContext = createContext([]);

function App() {
  var i = 0;
  const [elementsArray, setElementsArray] = useState([]);
  const [webtags, setWebtags] = useState([]);
  const [activeid, setactiveid] = useState(null);
  const [properties, setProperties] = useState({
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
    setWebtags(JSON.parse(webtagsVar) ? JSON.parse(webtagsVar) : []);
    setElementsArray(elementsArrayVariable);
  }, []);

  const selectTag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setactiveid(e.target.id);
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    if (e.target.id) {
      document.getElementById(e.target.id).classList.add("active");
    } else {
      document.querySelector(".main_div").classList.add("active");
    }
  };

  const childselectTag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setactiveid(e.target.id);
    if (document.querySelector(".childactive")) {
      document.querySelector(".childactive").classList.remove("childactive");
    }
    if (e.target.id) {
      document.getElementById(e.target.id).classList.add("childactive");
    } else {
      document.querySelector(".main_div").classList.add("childactive");
    }
  };

  useEffect(() => {
    getProperties();
  }, [activeid]);

  useEffect(() => {
    localStorage.setItem("Webtags", JSON.stringify(webtags));
  }, [webtags]);

  useEffect(() => {
    console.log(properties);
  }, [properties]);

  const deletetag = (e) => {
    e.preventDefault();
    console.log(activeid);
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
    console.log(activeid);
    setProperties(webtags[activeid] && webtags[activeid].properties);
    if (typeof activeid === "string" && activeid.includes("_")) {
      let webtagsVar = webtags;
      setProperties(
        webtagsVar[parseInt(activeid.split("_")[0])]["children"][
          parseInt(activeid.split("_")[1])
        ]
      );
    }
  };

  let name, value;
  const changeprop = (e) => {
    e.preventDefault();
    name = e.target.id;
    value = e.target.value;
    let temp = webtags;
    setProperties({ ...properties, [name]: value });
    if (activeid.includes("_")) {
      temp[parseInt(activeid.split("_")[0])]["children"][
        parseInt(activeid.split("_")[1])
      ] = { ...properties, [name]: value };
      temp = JSON.parse(JSON.stringify(temp));
      setWebtags(temp);
      console.log(temp);
    } else {
      if (temp[activeid])
        temp[activeid].properties = { ...properties, [name]: value };
      temp = JSON.parse(JSON.stringify(temp));
      setWebtags(temp);
    }
  };

  const downloadhtml = () => {
    var code = `<!DOCTYPE html><html>`;
    var codestart = `<body>`;
    var codeend = `</body></html>`;
    var stylestart = `<style>.div_wrrapper{
      width:100%;
      height:auto;
    }
    .main_div {
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      height: 80vh;
      background-color: greenyellow;
      display: flex;
      flex-direction: column;
      overflow-y:scroll;
      position: relative;
    }
    `;
    var styleend = `</style>`;

    webtags.forEach((ele) => {
      let style = document.getElementById(ele.elem_id).getAttribute("style");
      document.getElementById(ele.elem_id).removeAttribute("style");
      let html = document.getElementById(ele.elem_id);
      console.log(style);
      let css = `#${ele.elem_id} {${style}}`;

      // console.log(document.getElementById(ele.elem_id).style)

      codestart = codestart + html.outerHTML;
      stylestart = stylestart + css;
    });
    let pagestyle = stylestart + styleend;
    code = code + pagestyle + codestart + codeend;
    console.log(code);
    // document.write(code);
  };

  return (
    <>
      <DragDropContext>
        <webtagsContext.Provider value={[webtags, setWebtags]}>
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
              <Website
                elements={webtags}
                selectTag={selectTag}
                childselectTag={childselectTag}
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
                    <Button onClick={deletetag}>Delete</Button>
                    <Button onClick={clearWeb}>Clear</Button>
                    <Button onClick={downloadhtml}>Download</Button>
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
                              <Flex
                                direction="row"
                                justifyContent="space-evenly"
                              >
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
        </webtagsContext.Provider>
      </DragDropContext>
    </>
  );
}

export default App;
