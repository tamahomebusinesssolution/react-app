import React, { useState } from "react";
import UserContext from '../UserContext';
import {Row,Col,Navbar,Container,Form,Control, Button} from 'react-bootstrap';
import {useEffect, useContext } from 'react';
import Swal2 from 'sweetalert2';
import { useNavigate} from "react-router-dom";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate=useNavigate();


    const createProduct = (e) => {
        e.preventDefault();
        console.log('anu yan?');

        fetch(`${process.env.REACT_APP_API_URL}/products/createProduct`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                productName:productName, 
                productDescription:productDescription, 
                productPrice: productPrice
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data == true){

                setProductName("");
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
            }       
        })
    }       



  return (
    <Row>
            <Col className='col-md-4 col-8 offset-md-4 offset-2 bg-light'>
                <h1 className = "text-center">Create Product</h1>
                <Form /*onSubmit ={event => createProduct(event)}*/>

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type='text' 
                                placeholder='Enter your first name' 
                                value={productName} 
                                /*onChange={e=> setProductName(e.target.value)}*/
                                onChange={(e) => setProductName(e.target.value)} 
                                required/>
                          </Form.Group>  

                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type='text' 
                                placeholder='Enter your first name' 
                                value={productDescription} 
                                /*onChange={e=> setProductDescription(e.target.value)} */
                                onChange={(e) => setProductDescription(e.target.value)} 
                                required/>
                          </Form.Group>  


                          <Form.Group className="mb-3" controlId="formBasicfirstName">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type='text' 
                                placeholder='Enter your first name' 
                                value={productPrice} 
                                /*onChange={e=> setProductPrice(e.target.value)} */
                                onChange={(e) => setProductPrice(e.target.value)} 
                                required/>
                          </Form.Group> 
      
                      <Button /*as={Link} to='/login'*/ variant="primary" type="submit"  onClick={createProduct}>
                        Add Product
                      </Button>
                </Form>
            </Col>
        </Row>
  );
}