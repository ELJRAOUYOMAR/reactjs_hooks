import React, { useState, useEffect } from 'react'

// usage =>   useEffect(function,dependencies)
// useEffect(
//     ()=>{},
//     []
// )
const Effect = () => {

    const [counter, setCounter] = useState(0)
    // this state for users 
    const [users, setUsers] = useState([])
    // this state for input filter users
    const [filteredUsers, setFilteredUsers] = useState([])

    // fetching api using useeffect
    useEffect( () => { 
          // console.log("mount")
          fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => setUsers(data))

          return ()=>{return false}
        },
        []
    )

    // display users when loading the page
    // useEffect(
    //   ()=>setFilteredUsers(users)
    //   ,[users]
    //   )    

    const update = () => setCounter(prev => prev + 1)

    // display the user that have the letters existing in the input field
    const handleChange = (e) =>{
      const searchTerm = e.target.value.toLowerCase()
      const filter = users.filter(
        user => user.name.toLowerCase().includes(searchTerm)
        )
      console.log(filter)
      // setFilteredUsers(filter)
      setFilteredUsers(searchTerm ? filter : []);
    }
        

  return (
    <>
      <p className="text-5xl text-gray-900 mb-3">{counter}</p>
      <button type="button" onClick={update} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click</button>
      
      <input type="text" onInput={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user" />
      {/* {users.map(user => */}
      {filteredUsers.map(user =>
        <p key={user.id} className="text-5xl text-gray-900 mb-3">{user.name}</p>
      )}
    </>
  )
}

export default Effect