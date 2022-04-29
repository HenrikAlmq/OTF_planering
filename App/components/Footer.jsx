import React, { useState } from 'react';
import Button from "./Button"

function Footer({Logout}) {
  const [details, setDetails] = useState({username: ""});

  const UseLogout = () => {
    setDetails({username: ""})
    Logout(details);
  }

  return (
    <div className='footer'>
        <b>On the fly WMS</b>
        <Button text="Logga ut" color="black" onClick={UseLogout}/>
    </div>
  )
}

export default Footer