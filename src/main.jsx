import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx';
import theme from './theme.jsx';
import GlobalState from './context/index.jsx';

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobalState>
);
