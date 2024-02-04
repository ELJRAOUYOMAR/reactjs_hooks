import React, { useState } from 'react'
import User from './User';
import  UserContext  from './UserContext';
import Card from './Card';

// Create a context to share user data
// export const UserContext = createContext(null);

const Context = () => {
    // Define state to hold user data
    const [userOne, setUserOne] = useState('Majed');
    const userValues = {userOne,setUserOne}
    return (
        <>
          {/* Provide user data to descendants through context */}
          {/* the value is an object */}
          <UserContext.Provider value={userValues}>
            <User />
          </UserContext.Provider>
          {/* now we can use this user in the all children components, because we provide the User */}

              {/* Render User component with user data */}
              {/* <User user={userOne}/> */}
              {/* Uncomment above line to render the User component */}
        </>
    );
};

export default Context;
