import React,{useState} from 'react';

export default function CreateUser(){
	const [firstName, setFirstName]=useState('');
	const [lastName, setLastName]=useState('');
	const [email, setEmail]=useState('');

	const Submit =(e)=>{
		e.preventDefault();
		fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
		            method: 'POST',
		            headers: {
		              'Content-Type': 'application/json',
		            },
		        })
		        .then(response => response.json())
		        .then(data => {
		            if (data){
		            	console.log(data)
		            }     
		        })
	}		

	return(
		<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
			<div className='w-50 bg-white rounded p-3'>
				<form onSubmit={Submit}>
					<h2>Add User</h2>
					<div className='mb-2'>
						<label htmlFor=''>Name</label>
						<input type='text' placeholder='Enter Name' className='form-control'					
						onChange={(e)=>setFirstName(e.target.value)}/>
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Last Name</label>
						<input type='text' placeholder='Enter Last Name' className='form-control'
						onChange={(e)=>setLastName(e.target.value)}/>						
					</div>
					<div className='mb-2'>
						<label htmlFor=''>Email</label>
						<input type='email' placeholder='Enter Email' className='form-control'
						onChange={(e)=>setEmail(e.target.value)}/>						
					</div>
					<button className='btn btn-success'>Submit</button>
				</form>
			</div>
			
		</div>
	)
}