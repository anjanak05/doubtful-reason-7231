import React from 'react';
import {
  ChakraProvider,
  Box,  theme,
} from '@chakra-ui/react';

// import SouthMainPage from './Routes/South/SouthMainPage';
// import NationMainPage from './Routes/Nation/NationMainPage';
import Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';
// import MidNewsBox from './Routes/South/MidNewsBox';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box  fontSize="xl">
{/* <SouthMainPage></SouthMainPage>
<NationMainPage></NationMainPage> */}

<Navbar></Navbar>
<AllRoutes></AllRoutes>
{/* <MidNewsBox></MidNewsBox> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;