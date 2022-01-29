import logo from './logo.svg';
import './App.css';
import Elements from './Elements';
import { ChakraProvider } from '@chakra-ui/react';
import Website from './Website';

function App() {
  return (
   <>
   <ChakraProvider >
   <Elements />
   <Website />
   </ChakraProvider>
   </>
  );
}

export default App;
