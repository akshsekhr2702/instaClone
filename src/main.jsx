import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'

const styles ={
  global:(props)=>({
    body:{
      bg:mode("gray.100","#000")(props),
      color:mode("gray.800","whiteAlpha.900")
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <BrowserRouter>
     <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
