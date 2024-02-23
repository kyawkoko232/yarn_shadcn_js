အကုန်တင်ပြီးရင် router setup လုပ်။ 
```jsx
npm i react-router-dom
```
`main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Router>
      <App />
    </Router>

  </React.StrictMode>,
)

```
