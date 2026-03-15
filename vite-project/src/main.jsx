import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

const name="johann"

const reactElement=React.createElement(  //injected by babel
  'a',
  {
    href:"https://www.google.com/",
    target:"_blank"
  },
  "VISIT GOOGLE",
  name
)

createRoot(document.getElementById('root')).render( 
    reactElement
);
