import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

// const root = document.getElementById('root');
const root = document.querySelector('#root')

if (root) {
  createRoot(root).render(<App />)
}
// ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// ).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)
console.log('process.env', process.env)
