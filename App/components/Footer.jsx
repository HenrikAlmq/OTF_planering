import React, { useState } from 'react';

function Footer({Logout}) {
  const [details, setDetails] = useState({username: ""});

  const UseLogout = () => {
    setDetails({username: ""})
    Logout(details);
  }

  return (
    <div className='footer'>
        <b>On the fly WMS</b>
        <button onClick={UseLogout}>Logga ut</button>
    </div>
  )
}

export default Footer