import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import myElementsArray from "./elementsArray";

function App() {
  const [elementsArray, setElementsArray] = useState([]);

  useEffect(() => {
    const elementsArrayVariable = myElementsArray();
    setElementsArray(elementsArrayVariable);
  }, []);

  return (
    <>
      <Grid
        templateColumns="repeat(10, 1fr)"
        templateRows="repeat(18, 1fr)"
        height="100vh"
      >
        <GridItem w="100%" rowSpan={1} colSpan={10} bg="pink" />
        <GridItem w="100%" rowSpan={17} colSpan={8} bg="tomato" />
        <GridItem w="100%" rowSpan={17} colSpan={2} bg="papayawhip">
          <Grid p="20px" templateColumns="repeat(2, 1fr)" gap={4}>
            {elementsArray.map((ele) => (
              <GridItem p="10px" bg="purple">
                {ele.element}
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
