// import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import AppNavBar from './components/AppNavBar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Services from './pages/Services';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Team from './pages/Team';
import PageNotFound from './pages/PageNotFound';
import RetrieveAllProduct from './pages/RetrieveAllProduct';
import {useState, useEffect} from 'react';
import Contact from './pages/Contact';
import ProductView from './components/ProductView';
import AppFooter from './components/AppFooter';
//import the UserProvider from the UserContext to provide the content or value of our UserContext
import { UserProvider } from './UserContext';

import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/UpdateProductModal";
import Orders from "./pages/Orders";
import EmpListing from "./pages/EmpListing";
import ReactAppBasic from "./ReactAppBasic";
import EditUser from "./pages/EditUser";
import UpdateProductModal from "./pages/UpdateProductModal";
import './App.css';
import './index.css';
//import necessary modules from react-router-dom that will be used for the routing

import {BrowserRouter, Route, Routes} from 'react-router-dom';


//React JS is a SPA
//whenever a link is clicked, it functions as if the page is being reloaded but what actually happes is it goes through the process of rendering, mounting, rerendering and remounting.

//The 'BrowserRouter' component will enable us to simulate page navigation by synchronizing the show content and the shown url in the web browser

//'Routes' component holds all our Route component. It selects which 'Route' component to how based on the URL endpoint. For example, when the '/courses' is visited in the web browser React.js will show the Courses component to us
function App() {
  //State hook for the user state that's defined here for global scoping
  //Initialized as a the value of the user information from browser's localStorgae
  //this will  be used to store the user info. and will be used for validating if a user is logged in on the app or not
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  //Function is for clearing localStorage on logout
  const unsetUser = () => {
    localStorage.clear()
  };

  // useEffect(()=> {
  //   console.log(user)
  // }, [user]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {
        setUser({
            id: data._id,
            isAdmin: data.isAdmin 
        })
    })
  }, [])




  return (
    <div className="App">
    <UserProvider value = {{user, setUser, unsetUser}}>

         <AppNavBar />
          <Container>
            <Routes>
              <Route path ='/' element = {<Home/>}/>
              <Route path = '/services' element = {<Services/>}/>
              <Route path ='/portfolio' element = {<Portfolio/>}/>
              <Route path = '/about' element = {<About/>} />
              <Route path = '/team' element = {<Team/>} />
              <Route path = '/contact' element = {<Contact/>}/>
              
      
              <Route path = '*' element = {<PageNotFound/>} />
              <Route path='/' element = {<Dashboard />}></Route>
              <Route path='/inventory' element = {<Inventory />}></Route>
              <Route path='/orders' element = {<Orders />}></Route>
              <Route path='/customers' element = {<Customers />}></Route>
              <Route path='/empListing' element = {<EmpListing />}></Route>
              <Route path='/basic' element = {<ReactAppBasic />}></Route>
              <Route path='/editUser/:id' element = {<EditUser />}></Route>
              <Route path='/updateProduct/:id' element = {<UpdateProductModal />}></Route>
            </Routes>
            
         </Container>
         <AppFooter />
    </UserProvider>
    </div>
  );
}

export default App;

