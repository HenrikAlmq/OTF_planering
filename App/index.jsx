
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Deliveries from './Deliveries';
import LoginForm from './components/LoginForm'
import index from './index.css';
import Articles from './components/Articles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';



function App() {
    const adminUser = {
        username: "Henrik",
        password: "admin123"
    }

    useEffect(() => {
        
    })

    const [user, setUser] = useState({ username: "" }); //Anger data i state vid inloggningen med setUser.
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

    const Logout = (details) => {
        setUser({ username: details.username });
    }

    return (
        <div className='App'>
            {(user.username != "") ? (
                <Router>
                    <div>
                        <Navbar user={username}/>
                        <Routes>
                            <Route path="/deliveries" element={<Deliveries />}></Route>
                            <Route path="/articles" element={<Articles />}></Route>
                        </Routes>
                        <br />
                        <Footer Logout={Logout} />
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