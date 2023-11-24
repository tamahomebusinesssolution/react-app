import {Row, Col, Button, Card} from 'react-bootstrap';
//the useParams allows us to get or extract the parameter included in our pages
import { useParams } from 'react-router-dom';

import {useEffect, useState} from 'react';

import Swal2 from 'sweetalert2';

export default function ProductView(){

	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productDescription, setProductDescription] = useState('');
	const [product, setProduct] = useState('');

	const {id} = useParams();
	//console.log(id);// product id

	useEffect(()=> {
		fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
		.then(response => response.json())
		.then(data => {
			 console.log(data);// product info
				setProductName(data.productName);
				setProductPrice(data.productPrice);
				setProductDescription(data.productDescription);
		})
	}, [])

	const createOrder = (productId) => {
		console.log(productId);
		fetch(`${process.env.REACT_APP_API_URL}/users/createOrder`,{
			method: "POST",
			headers: {
				'Content-Type' : 'application/json',
				'Authorization' : `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: `${productId}`
			})
		})
		.then(response => response.json())
		.then(data => {
			 if(data === true){
				console.log(data);
				Swal2.fire({
					title: 'createOrder SUCCESSful!',
					icon: 'success',
					text: 'You are now createOrder in the product!'
				})
			}else{
				Swal2.fire({
					title: 'Order FAILED',
					icon: 'error',
					text: 'Admin Denied!'
				})
			}
		})


	}


	return(
		<Row>
			<Col>
				<Card>
				    <Card.Body>
				      	<Card.Title>{productName}</Card.Title>
				        <Card.Text>
				          {productDescription}
				        </Card.Text>
				        <Card.Text>
				          Price: {productPrice}
				        </Card.Text>
				        <Button variant="primary" onClick = {() => createOrder(id)}>Buy Now</Button>
				      </Card.Body>
				 </Card>
			</Col>
		</Row>
		)
}
