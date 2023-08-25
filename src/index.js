import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider,ColorModeProvider} from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ChakraProvider>
  
  <ColorModeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ColorModeProvider>
  
  </ChakraProvider>
);

