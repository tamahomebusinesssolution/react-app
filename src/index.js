import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import './index.css';


/*
createRoot - assigns the elements to be managed by React with its virtual DOM

render() - display the react elements/components
App component is our mother component, this is the component we use as an entry point and where we can render all other components or pages
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


/*
const name = 'John Smith'
const user = {
  firstName: 'Jane',
  lastName: 'Doe'
}

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const element = <h1>Hello, {formatName(user)}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
*/

