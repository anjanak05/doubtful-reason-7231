import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Navbar from './Component/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Component/Footer/Footer';




function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
        <Footer></Footer>

      
      </Box>
    </ChakraProvider>
  );
}

export default App;
