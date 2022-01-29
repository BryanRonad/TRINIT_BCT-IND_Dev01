import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import myElementsArray from "./elementsArray";
import Website from "./Website";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [elementsArray, setElementsArray] = useState([]);
  const [webtags, setWebtags] = useState([]);
  const [activeid, setactiveid] = useState(null);

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

  const addchildtags = (e) => {
    e.preventDefault();
    setactiveid(e.target.id);
    document.getElementById(e.target.id).style.border = "2px solid white";
  };

  return (
    <>
      <DragDropContext>
        <Grid
          templateColumns="repeat(10, 1fr)"
          templateRows="repeat(18, 1fr)"
          height="100vh"
        >
          <GridItem w="100%" rowSpan={1} colSpan={10} bg="pink" />

          <GridItem w="100%" rowSpan={17} colSpan={8} bg="tomato">
            <Website elements={webtags} addchildtags={addchildtags} />
          </GridItem>

          <GridItem w="100%" rowSpan={17} colSpan={2} bg="papayawhip">
            <Droppable droppableId="characters">
              {(provided) => (
                <Grid
                  p="20px"
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {elementsArray.map((ele, index) => (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <GridItem
                          p="10px"
                          bg="purple"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={(e) => addelement(e, ele)}
                        >
                          {ele.element}
                        </GridItem>
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
