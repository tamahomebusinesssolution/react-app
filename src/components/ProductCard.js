import { Card, Button, Row, Col,Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Space,Statistic,Typography } from "antd";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet-async";
import LoadingBox from './LoadingBox';


export default function ProductCard({productProp}) {
    // Checks to see if the data was successfully passed
    // console.log(productProp);

    // console.log(productProp.name);
    /*console.log('this is from the ProductCard.js')
    console.log(productProp);*/

    const {_id, productName, productDescription, productPrice, isActive} = productProp;
    // console.log(name);

    // Use the state hook for this component to be able to store its state
    // States are used to keep track of information related to individual components
    const [count, setCount] = useState(0);

    const [seats, setSeats] = useState(30);

    //we are goinbg to create a new state that will declare or tell the value of the disabled property in the button.
    const [isDisabled, setIsDisabled] = useState(false);

    // Function that keeps track of the enrollees
    // The setter function for UseState are asynchronous allowing it to execute separately from other codes in the program
    // The "setCount" function is being executed while the "console.log" is already completed
/*    function enroll(){
        if (seats > 1) {
            setCount(count + 1);
            // console.log('Enrollees: ' + count);
            setSeats(seats - 1);
            // console.log('Seats: ' + seats);
        } else {
            alert("Congratulations on getting the last slot!");
            setSeats(seats-1);
        };
    }*/

    //Define a 'useEffect' hook to have 'ProductCard' component do or perform a certain task after every changes in the seats state
    //the side effect will run automatically in initial rendering and in every changes of the seats state.
    //the array in the useEffect is called the dependency array
/*    useEffect(()=> {

        if(seats === 0){
            setIsDisabled(true);
        }

    }, [seats]);*/

    return (
        <Row xs={1} md={1} className="g-1 border ">
          {Array.from({ length: 1 }).map((product, productId) => (
            <Col key={productId}>
                <Card class="e-card-stacked">
                    <Card.Body className="text-center p-1" >
                        <Card.Title>{productName}</Card.Title>
                        <Card.Subtitle>Product Description:</Card.Subtitle>
                        <Card.Text>{productDescription}</Card.Text>
                        <Card.Subtitle>Price:</Card.Subtitle>
                        <Card.Text>{productPrice}</Card.Text>
                        <Card.Text>Seats : {seats}</Card.Text>
                        <Button as= {Link} to = {`/products/${_id}`} variant="primary" >see more details</Button>
                    </Card.Body>
                  </Card>
            </Col>
            ))}
        </Row>

    );
}



// Check if the ProductCard component is getting the correct prop types
// Proptypes are used for validating information passed to a component and is
// a tool normally used to help developers ensure the correct information is
// being passed from one component to the next 

// ProductCard.propTypes = {
//     // The "shape" method is USED to check if a prop object conforms to a
//        specific shape productProp: 
//      PropTypes.shape(
//          { 
//              name:PropTypes.string.isRequired, 
//              description:PropTypes.string.isRequired, 
//              price:PropTypes.number.isRequired 
//          }
//      )
// }
/*
function DashboardCard({title, value, icon}){
    return(
        <Card>
            <Space direction ='horizontal' >
                {icon}
                <Statistic title={title}
                value={1234} 
                />

            </Space>
        </Card>
    );
}*/