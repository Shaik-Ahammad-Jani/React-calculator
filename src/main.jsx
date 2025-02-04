// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Calculator from './Calculator/Calculator.jsx'
// import Todo from './TodoList/Todo.jsx'
import Api from './Api/Api.jsx'
import Calculator from './Calculator/Calculator.jsx'
import Todo from './TodoList/Todo.jsx'

createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Api />
//   </StrictMode>
)
createRoot(document.getElementById('root')).render(
  <>
  <Todo / >
    {/* <App /> */}
    <Api />
    <Calculator />
  </>
)
