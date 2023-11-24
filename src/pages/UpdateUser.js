import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';


export default function UpdateUser(){
	const {id} = useParams();
	const [users,setUsers]=useState('');
	const [firstName,setFirstName]=useState('')
	const [lastName,setLastName]=useState('')
	const [email,setEmail]=useState('')


	useEffect(() => {
	    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
	        headers: {
	          'Authorization' : `Bearer ${localStorage.getItem('token')}`
	        }
	    })
	    .then(response => response.json())
	    .then(result => console.log(result))            
	    .catch(err=>console.log(err))
	  	}, []);


	return(
		<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
			<div className='w-50 bg-white rounded p-3'>
				<form>
					<h2>Update User</h2>
					<div className='mb-2'>
						<label htmlFor=''>Name</label>
						<input type='text' placeholder='Enter Name' className='form-control'/>						
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Last Name</label>
						<input type='text' placeholder='Enter Last Name' className='form-control'/>						
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Email</label>
						<input type='email' placeholder='Enter Email' className='form-control'/>						
					</div>
					<button className='btn btn-success'>Update</button>
				</form>
			</div>
			
		</div>
	)
}