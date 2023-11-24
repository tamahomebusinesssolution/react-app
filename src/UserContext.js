import React from 'react';

//Create a Context Object
//A context object as the name states is a data type of an object that can be used to store information 
//that can be share shared within the app.
//The context object is a different approach of passing information between components and allows easier 
//access avoiding the use of props.

//using the createContext from react we can create a context in our app
// we containe the context created in our UserContext variable
//we named it UserContext simply becuase this context will contain the information of our user.
const UserContext = React.createContext();

//The Provider component allows other componets to consume/use the context object and supply the necessary 
//information needed to the context object.

export const UserProvider = UserContext.Provider;

export default UserContext;