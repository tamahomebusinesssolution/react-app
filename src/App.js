import { Container } from 'react-bootstrap';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import {useState, useEffect} from 'react';
//import the UserProvider from the UserContext to provide the content or value of our UserContext
import { UserProvider } from './UserContext';
import './App.css';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
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
    <UserProvider >

         <AppNavBar />
          <Container>
            <Routes>
              
              
            </Routes>
            
         </Container>

    </UserProvider>
    </div>
  );
}

export default App;

