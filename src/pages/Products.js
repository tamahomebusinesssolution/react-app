import { Fragment, useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
//import productsData from '../data/productsData';

export default function Products(){
	// Check to see if the mock data was captured
	// console.log(productsData);


	const [products, setProducts] = useState([]);
	//we are goint to add an useEffect here so that in every time that we
	//refresh our application it will fetch the updated content of our
	//products.

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/products/getAllActive`)// add /all to get all product
		.then(response => response.json())
		.then(data => {
			// console.log(data);
			setProducts(data.map(product => {
				// console.log(product);
				return(
					<ProductCard key = {product._id} 
								 productProp = {product} />
					)
			}))
		})
	}, [])

	// The "map" method loops through the INDIVIDUAL product objects in our
	// array and returns a component for each product Multiple components
	// created through the map method must have a UNIQUE KEY that will help
	// React JS indentify which components/elements have been changed
	// Everytime the map method loops through the data, it creates
	// a "ProductCard" component and then passes the current element in our
	// productData array using the productProp 
	// const products =
	// 		productsData.map(product => { 
	//			return ( <ProductCard key = {product.id} 
	//			productProp={product} /> ) })


	// The product in the ProductCard component is called a prop which is a
	// shorthand for "property" since components are considered as objects in
	// ReactJS The curly braces ({}) are used for props to signify that we
	// are providing information using JavaScript expressions rather than
	// hard coded values which use double quotes "" We can pass information
	// fromn one component to another using props. This is refered to as
	// props drilling
	return(
		<Fragment>
			{products}
		</Fragment>	
	)
}
