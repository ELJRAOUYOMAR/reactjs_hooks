import React from 'react'
import { useContext } from 'react'

// the context we use in Context component
import UserContext from './UserContext'

const CurrentUser = () => {

  const {userOne} = useContext(UserContext)
  return (
    <div>{userOne}</div>
  )
}

export default CurrentUser