//it will allows us to navigate from one page of our application to another page
import { Navigate } from 'react-router-dom';

import {useContext, useEffect} from 'react';

import UserContext from '../UserContext';


export default function Logout(){
	//It will allow us to clear all the information in the localStorage ensuring no information is stored in our browser
	/*localStorage.clear();*/

	const {unsetUser, setUser} = useContext(UserContext);

	useEffect(() => {
		//The value from our  locaStorage will be cleared
		unsetUser();
		//since we cleared the contents of our local storage using the unsetUser() therefore the value of our user state will be null;
		//by adding useEffect, this will allow the Logout page to render first before triggreing the useEffect which changes the state of our user
		setUser({
			id: null,
			isAdmin: null
		});
	}, [])




	return (
		<Navigate to = '/login'/>

		)
}
