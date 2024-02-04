import React, {useContext} from 'react'
import UserContext from './UserContext'

function Button() {

    const {setUserOne} = useContext(UserContext)
    const SetUser = () =>{setUserOne(prev => prev + " Karimi")} 

  return (
    <>
        <button onClick={SetUser} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Add Last Name
        </button>

    </>
  )
}

export default Button
