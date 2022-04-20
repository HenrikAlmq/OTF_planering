import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Test from './Test';
import LoginForm from './components/LoginForm'
import index from './index.css';
import Articles from './components/Articles'
import Navbar from './components/Navbar';



function App() {
    const adminUser = {
        username: "Henrik",
        password: "admin123"
    }

    const [user, setUser] = useState({username: ""}); //Anger data vid inloggningen med useState.
    const [error, setError] = useState(""); //Fångar felmeddelande i setError

    const Login = (details) => {
        console.log(details);

        if (details.username == adminUser.username && details.password == adminUser.password){
            console.log("Inloggad");
            setUser({
                username: details.username
            });
        } else {
            setError("Fel användaruppgifter")
        }
    }

    const Logout = () => {
        setUser({username: ""});
    }

    return (
        <div className='App'>
            {(user.username != "") ? (
                <div className="welcome">
                    <Articles />
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} /> //Skickar ner funktion Login för att kunna kalla på den inuti LoginForm när man "submittar". Skickar även ner error state
            )}
        </div>
    )
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />  
);