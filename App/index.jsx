
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Deliveries from './Deliveries';
import LoginForm from './components/LoginForm'
import index from './index.css';
import Articles from './components/Articles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";



function App() {
    const adminUser = {
        username: "Henrik",
        password: "admin123"
    }

    const [user, setUser] = useState({ username: "" }); //Anger data vid inloggningen med setUser.
    const [error, setError] = useState(""); //Fångar felmeddelande i setError

    const Login = (details) => {
        console.log(details);

        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Inloggad");
            setUser({
                username: details.username //anger username i State
            });
        } else {
            setError("Fel användaruppgifter")
        }
    }

    const Logout = () => {
        setUser({ username: "" });
    }

    return (
        <div className='App'>
            {(user.username != "") ? (
                <Router>
                    <div>
                        <Navbar />
                        <Routes>
                            <Route path="/deliveries" element={<Deliveries />}></Route>
                            <Route path="/articles" element={<Articles />}></Route>
                        </Routes>
                        <br />
                        <button onClick={Logout}>Logga ut</button>
                    </div>
                </Router>
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