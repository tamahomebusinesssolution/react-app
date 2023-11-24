import { useState, useEffect, useContext } from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';
import {Navigate, useNavigate} from 'react-router-dom';

//sweetalert2 is a simple and useful package for generating user allerts with ReactJS
import Swal2 from 'sweetalert2';

import UserContext from '../UserContext';

export default function Login() {

    const navigate = useNavigate();

    // State hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(true);


    //Allows us to consume the UserContext object and it's properties to use for user validation
    const { user, setUser } = useContext(UserContext);

    // const [user, setUser] = useState(localStorage.getItem('email'));

    function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();

        //set the email of the authenticated user in the local storage
        //Syntax:
            //localStorage.setItem('property', value);
        //The localStorage.setItem() allows is to manipulate the browser's localStorage property to sotre information indefinitely to help demonstrate conditional rendering.
        //Because REACT JS is a single page application, using the localStorage will not trigger rerendering of component.
        // localStorage.setItem('email', email);


        // setUser(localStorage.getItem('email'));


        // alert('Login successful!');
        // navigate('/courses');

        // Clear input fields after submission
        // setEmail('');
        // setPassword('');

        // process fetch request to the corresponding backend API
        //Syntax:
            //fetch('url', {options}).then(response => response.json()).then(data => {});

        fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
        .then(response => response.json())
        .then(data=> {
            // console.log(data);
            // localStorage.getItem('token', data);

            //if statement to check whether the login is successful.
            if(data === false){
               
                /*alert('Login unsuccessful!');*/
                //in adding sweetlaert2 you have to use the fire method
                Swal2.fire({
                    title: "Login Failed!",
                    icon: 'error',
                    text: 'Check your login credentials and try again'
                })

            }else{
                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);

                /*alert('Login successful!');*/

                Swal2.fire({
                    title: 'Login successful!',
                    icon: 'success',
                    text: 'Welcome to Capstone3!'
                })

                navigate('/products');

            }

        })
    }

    const retrieveUserDetails = (token) => {

        fetch(`${process.env.REACT_APP_API_URL}/users/details`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setUser({
                id: data._id,
                isAdmin: data.isAdmin 
            })
        })

    }

    useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== '' && email.length<=15){
            setIsActive(false);
        }else{
            setIsActive(true);
        }

    }, [email, password]);

    return (
        
        user.id === null || user.id ===undefined
        ?
            <div className='bg-light col-3 mx-auto p-2 '>
            <Row>
                <Col className = ' mx-auto'>
                    <h1 className = 'text-center mt-2'>Login</h1>
                    <Form onSubmit={(e) => authenticate(e)}>
                        <Form.Group controlId="userEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" id="submitBtn" disabled = {isActive} className ='mt-3'>
                                Login
                            </Button>
                        
                    </Form>
                </Col>

            </Row>
            </div>
        :
          <Navigate to = '/*' />
        
    )
}
