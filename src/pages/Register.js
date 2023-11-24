// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import {Button, Form, Row, Col, Container} from 'react-bootstrap';
//we need to import the useState from the react
import {useState, useEffect, useContext} from 'react';
import Swal2 from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import UserContext from '../UserContext';
import PageNotFound from './PageNotFound';
import { Link, Navigate } from 'react-router-dom'


export default function Register(){
    //State hooks to store the values of the input fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');



    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();
    const [isPassed, setIsPassed] = useState(true);
    const [ismobile, setIsMobile] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);

    const [isPasswordMatch, setIsPasswordMatch] = useState(true); 
 
    useEffect(()=>{
        if(email.length > 15){
            setIsPassed(false);
        }else{
            setIsPassed(true);
        }
    }, [email]);

    useEffect(()=>{
        if(mobileNo.length !== 11){
            setIsMobile(false);
        }else{
            setIsMobile(true);
        }
    }, [mobileNo]);

    //this useEffect will disable or enable our sign up button
    useEffect(()=> {
        //we are going to add if statement and all the condition that we mention 
        //should be satisfied before we enable the sign up button.
        if(firstName !== '' && lastName !== '' && mobileNo !== '' && mobileNo.length >= 11 && email !== '' && password1 !== '' && password2 !== '' && password1 === password2 && email.length <= 15){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
    }, [firstName, lastName, mobileNo, email, password1, password2]);

    //function to simulate user registration
function registerUser(event){
    event.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:email 
        })
    })
    .then(response => response.json())
    .then(data=> {
        //console.log(`check email ${data}`);
        if (data === true){
            Swal2.fire({
                title:"Email already exists.",
                icon:'warning',
                text:"Please use another email"
            })
        }
        else{
            //console.log(`b4 register`);
            fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:email, 
                    password:password1, 
                    firstName: firstName,
                    lastName:lastName,
                    mobileNo: mobileNo
                })
            })
            .then(response => response.json())
            .then(data=> {
               // console.log(`response ${data}`);
                if (data){    
               //     console.log(data);
                    setEmail('');
                    setPassword1('');
                    setPassword2('');
                    setFirstName('');
                    setLastName('');
                    setMobileNo('');
                    Swal2.fire({
                        title: "Registration Success",
                        icon: "success",
                        text:"Welcome! You are now registered to our website."
                    })
                    navigate('/login');
                }else{
                    Swal2.fire({
                        title: "Registration failed",
                        icon: "error",
                        text:"wrong."
                    })
                }
            })

        }

    })
}

    //useEffect to validate whether the password1 is equal to password2
    useEffect(() => {
        if(password1 !== password2){
            setIsPasswordMatch(false);
        }else{
            setIsPasswordMatch(true);
        }
    }, [password1, password2]);



    return(
        user.id === null || user.id === undefined
            ?
 
        <Row>
            <Col className='col-md-4 col-8 offset-md-4 offset-2 bg-light'>
                <h1 className = "text-center">Register</h1>
                <Form onSubmit ={event => registerUser(event)}>

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' 
                                placeholder='Enter your first name' 
                                value={firstName} 
                                onChange={e=> setFirstName(e.target.value)} 
                                required/>
                          </Form.Group>  

                      <Form.Group className="mb-3" controlId="formBasiclastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' 
                            placeholder='Enter your last name' 
                            value={lastName} 
                            onChange={e=> setLastName(e.target.value)} 
                            required/>

                      </Form.Group>   


                      <Form.Group className="mb-3" controlId="formBasicemail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value = {email}
                            onChange = {event => setEmail(event.target.value)}
                            />
                        <Form.Text className="text-danger" hidden = {isPassed}>
                          The email should not exceed 15 characters!
                        </Form.Text>
                      </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicmobileNo">
                              <Form.Label>Mobile Number</Form.Label>
                              <Form.Control type='number' 
                                    placeholder='Enter your mobile number' 
                                    value={mobileNo} 
                                    onChange={event=> setMobileNo(event.target.value)} 
                                    required/>
                          <Form.Text className="text-danger" hidden = {ismobile}>
                            The mobile number should be 11 digits!
                          </Form.Text>          
                          </Form.Group>
                            
                      <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value = {password1}
                            onChange = {event => setPassword1(event.target.value)}
                            />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Retype your nominated password" 
                            value = {password2}
                            onChange = {event => setPassword2(event.target.value)}
                            />

                        <Form.Text className="text-danger" hidden = {isPasswordMatch}>
                          The passwords does not match!
                        </Form.Text>
                      </Form.Group>

                      

                      <Button as={Link} to='/login' variant="primary" type="submit" disabled = {isDisabled} onClick={registerUser}>
                        Sign up
                      </Button>
                </Form>
            </Col>
        </Row>
    
        :
        <PageNotFound/>
        )
}

