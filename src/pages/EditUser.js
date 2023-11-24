import React, { useState } from "react";
import UserContext from '../UserContext';
import {Row,Col,Navbar,Container,Form,Control, Button} from 'react-bootstrap';
import {useEffect, useContext } from 'react';
import Swal2 from 'sweetalert2';
import { useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';



export default function EditUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(0);
  const [mobileNo, setMobileNo] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate=useNavigate();
  const {id} = useParams();
  const [RowData, SetRowData] = useState([])

  	useEffect(() => {    
        //here we will get all employee data
        
        /*const url = 'http://localhost:8000/employee'
        axios.get(url)*/
        fetch(`${process.env.REACT_APP_API_URL}/users/allusers`, {
            headers: {
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
            },
        })    
        .then(response => response.json())
        .then(data=> {
                console.log(data);
            })
    },[])


    const editUser=async(e)=>{
        e.preventDefault();
        console.log('anu yan?');

        await fetch(`${process.env.REACT_APP_API_URL}/users/updateUser/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',  
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                email:email, 
                firstName: firstName,
                lastName:lastName,
                mobileNo: mobileNo
            })
        })
        .then(response => response.json())
        .then(data => {
            /*if (data == true){

                setFirstName("");
                setProductDescription("");
                setProductPrice(0);
                Swal2.fire({
                    title:"Success adding product ",
                    icon:'success',
                    text:"yes! "
                
                })
                
            }
            else{
                console.log(data.isAdmin)
                Swal2.fire({
                    title:"Access Denied",
                    icon:'Error',
                    text:"Error "
                })
            }       */
        })
    }       



  return (
    <Row>
            <Col className='col-md-4 col-8 offset-md-4 offset-2 bg-light'>
                <h1 className = "text-center">Edit User</h1>
                <Form /*onSubmit ={event => createProduct(event)}*/>

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' 
                                placeholder='Enter your first name' 
                                value={firstName} 
                                defaultValue={RowData.firstName}
                                /*onChange={e=> setFirstName(e.target.value)}*/
                                onChange={(e) => setFirstName(e.target.value)} 
                                required/>
                          </Form.Group>  

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' 
                                placeholder='Enter your first name' 
                                value={lastName} 
                                /*onChange={e=> setProductDescription(e.target.value)} */
                                onChange={(e) => setLastName(e.target.value)} 
                                required/>
                          </Form.Group>  


                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' 
                                placeholder='Enter your first name' 
                                value={email} 
                                /*onChange={e=> setProductPrice(e.target.value)} */
                                onChange={(e) => setEmail(e.target.value)} 
                                required/>
                          </Form.Group> 

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type='number' 
                                placeholder='Enter your first name' 
                                value={mobileNo} 
                                /*onChange={e=> setProductPrice(e.target.value)} */
                                onChange={(e) => setMobileNo(e.target.value)} 
                                required/>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>IsAdmin</Form.Label>
                            <Form.Control type='boolean' 
                                placeholder='Enter your first name' 
                                value={isAdmin} 
                                /*onChange={e=> setProductPrice(e.target.value)} */
                                onChange={(e) => setIsAdmin(e.target.value)} 
                                required/>
                          </Form.Group>
      
                      <Button /*as={Link} to='/login'*/ variant="primary" type="submit"  onClick={editUser}>
                        Update
                      </Button>
                </Form>
            </Col>
        </Row>
  );
}
