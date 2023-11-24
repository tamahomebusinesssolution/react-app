import { Modal, Form, Button } from 'react-bootstrap';
import Swal2 from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const UpdateProductModal = ({
	showModal,
	handleCloseModal,
	product,
	updateProduct,
	token,
	refreshCart
}) => {
	

	// Prop Passing
	const {
		productName: initialName, 
		productDescription: initialDescription, 
		productPrice: initialPrice 
	} = product;

	// Initialization
	const [ updatedName, setUpdatedName ] = useState(initialName);
	const [ updatedDescription, setUpdatedDescription ] = useState(initialDescription);
	const [ updatedPrice, setUpdatedPrice ] = useState(initialPrice);
	const {id} = useParams();

	// Update Product
	const handleUpdate = () => {
	  	fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
	  		method: 'PUT',
	  		headers: { Authorization : `Bearer ${token}`, 'Content-Type': 'application/json' },
	  		body: JSON.stringify({
	  			productName: updatedName,
	  			productDescription: updatedDescription,
	  			productPrice: updatedPrice
	  		})
	  	})
	  	.then(res => res.json())
	  	.then(data => {
	  		// Show success message
	  		Swal2.fire({
	  		  title: 'Update Product successful',
	  		  icon: 'success',
	  		  text: 'Product Updated',
	  		});

	  		// Close the modal
	  		handleCloseModal();
	  		refreshCart();
	  	})
	};

	// Checker
	useEffect(() => {
	  	console.log(updatedName);
	  	console.log(updatedDescription);
	  	console.log(updatedPrice);

	}, [])

	return (
	    <Modal show={showModal} onHide={handleCloseModal} centered>
			<Modal.Header closeButton>
			    <Modal.Title>Update Product</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					
					<Form.Group controlId="updatedName">
						<Form.Label>Product Name</Form.Label>
						<Form.Control 
							type="text" 
							defaultValue={updatedName}
							onChange = {event => setUpdatedName(event.target.value)} 
						/>
					</Form.Group>
					<Form.Group controlId="updatedDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							defaultValue={updatedDescription}
							onChange = {event => setUpdatedDescription(event.target.value)} 
						/>
					</Form.Group>
					<Form.Group controlId="updatedPrice">
						<Form.Label>Product Price</Form.Label>
						<Form.Control 
							type="number" 
							defaultValue={updatedPrice}
							onChange = {event => setUpdatedPrice(event.target.value)}   
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleCloseModal}>
					Cancel
				</Button>
				<Button variant="primary" onClick={handleUpdate}>
					Save Changes
				</Button>
			</Modal.Footer>
	    </Modal>
	);
};

export default UpdateProductModal;
