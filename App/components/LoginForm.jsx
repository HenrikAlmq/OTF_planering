import React, { useState } from 'react';
import Logotyp from '../image/logotyp.svg';

function LoginForm({ Login, error }) { //tar in Login och error som props
    const [details, setDetails] = useState({username: "", password: ""}); //Lokala details för mitt form

    const submitHandler = e => {
        e.preventDefault(); //För att inte sidan ska renderas om på nytt.

        Login(details); //Kallar på Login funktionen som skickas med som prop och skickar in details
    }

  return (
    <form onSubmit={submitHandler} /*Kallar på submitHandler*/> 
        <div className="form-inner">
            <img src={Logotyp} alt="Logotyp" />
            <h2>Logga in</h2>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="username">Användarnamn:</label>
                <input type="text" name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} /*Skickar in event (e) anger setDetails(kallar på funk) och använder ... operatorn och sedan endast ändra username*//>
            </div>
            <div className="form-group">
                <label htmlFor="password">Lösenord:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Logga in" />
        </div>
    </form>
  )
}

export default LoginForm;