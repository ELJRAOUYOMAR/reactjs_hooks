import React from 'react'
import Card from './Card'
import CurrentUser from './CurrentUser'
import Button from './Button'
const User = (props) => {
  return (
    <Card>
        {/* we don't need this, because we use the context now, we can pass the User directely from the components */}
        {/* <CurrentUser user={props.user} /> */}
        <CurrentUser />
        <Button />
    </Card>
  )
}

export default User