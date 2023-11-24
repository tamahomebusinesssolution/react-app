import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle, Form } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
//import { useParams } from 'react-router-dom';


const Employee = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data

    const [firstName, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobileNo, setnumber] = useState("")
    const [lastName, setnic] = useState("")
    const [isAdmin, setaddress] = useState("")

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    const navigate = useNavigate();
    //const {id} = useParams();
    const[empdata,setEmpData]=useState('');

    const GetEmployeeData = () => {
    //useEffect(() => {    
        //here we will get all employee data
        fetch(`${process.env.REACT_APP_API_URL}/users/allusers`, {
            headers: {
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
            },
        })    
        .then(response => response.json())
        .then(data=> {
                console.log(data);
                setData(data)
        })        
    }//,[])




/*    const handleEdit=async(e)=>{
        console.log(`updateRole`)
      e.preventDefault();
        const empdata={id,firstName,lastName,email,mobileNo,isAdmin};
    
        await fetch(`${process.env.REACT_APP_API_URL}/users/updateUser/${id}`, {
            method: "PUT",
                headers: {
                    'Content-Type': 'application/json',  
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                },
            //body: JSON.stringify({
                body:JSON.stringify
                (empdata)    
        })
        .then(response => response.json())
        .then(data=> {
            console.log(data);

            alert('Saved successfully.')
            window.location.reload()
        }) 
    }*/



    const handleEdit=async(e)=>{
        console.log(`updateRole`)
      e.preventDefault();
        const empdata={id,firstName,lastName,email,mobileNo,isAdmin};
    
        await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
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
        .then(data=> {
           // console.log(`response ${data}`);
            if (data){    
                console.log(data);
                setemail('');
                setname('');
                setnic('');
                setnumber('');
                console.log(data);
    
                alert('Saved successfully.')
                window.location.reload()
            }
        })
    }

/*    useEffect(()=>{
        if(firstName !== "" || firstName !== undefined ){
            setname(SetRowData)
        }else{
            setname(firstName);
        }
    }, [firstName]);*/


    //handle Delete Function 
    const handleDelete = () =>{
        /*const url = `http://localhost:8000/employee/${id}`
        axios.delete(url)*/
        fetch(`${process.env.REACT_APP_API_URL}/users/deleteUser/${id}`, {
             method: "DELETE",
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })     
                .then(res=>res.json())
                .then(()=>{
                    alert('Successfully deleted')
                    window.location.reload()
                })
                    
                
    }

    //call this function in useEffect
    console.log(ViewShow)
    console.log(RowData)

    useEffect(() => {
        GetEmployeeData();
    }, [])

    
    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Employee
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>lastName</th>
                                <th>isAdmin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobileNo}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.isAdmin}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.id} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.firstName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.mobileNo} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.lastName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.isAdmin} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Employee</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setId(e.target.value)}  />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setnumber(e.target.value)} placeholder="Please enter Number" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setnic(e.target.value)} placeholder="Please enter NIC" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" />
                            </div>
                           {/*<Button type='submit' className='btn btn-success mt-4' onClick={}>Add Employee</Button>*/}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                        
                            <div className='form-group'>
                                <label>ID</label>
                                <input type="text" className='form-control' onChange={(e) => setId(e.target.value)} defaultValue={RowData._id}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.firstName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>Number</label>
                                <input type="number" className='form-control' onChange={(e) => setnumber(e.target.value)} placeholder="Please enter Number" defaultValue={RowData.mobileNo}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>NIC</label>
                                <input type="text" className='form-control'  onChange={(e) => setnic(e.target.value)} placeholder="Please enter NIC" defaultValue={RowData.lastName}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="boolean" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.isAdmin}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Employee</Button>
                     
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Employee;

//https://github.com/ramzan-mmr/EmployeePortal/blob/main/src/Screen/Employee.js
//https://www.youtube.com/watch?v=F7vurnQfDiY