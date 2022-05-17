
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Deliveries from './Pages/Deliveries';
import LoginForm from './components/LoginForm'
import index from './index.css';
import Articles from './components/Articles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import DeliveryDetails from './components/DeliveryDetails';



function App() {
    const adminUser = {
        username: "Henrik",
        password: "admin123"
    }

    const [user, setUser] = useState({ username: ""}); //Anger data i state vid inloggningen med setUser.
    const [error, setError] = useState(""); //Fångar felmeddelande i setError


    useEffect(() => {
        const getUser = localStorage.getItem("user");
        

        if (getUser != null) {
            setUser({username: getUser})
        }
    }, [])

    const Login = (details) => {

        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Inloggad");
            setUser({
                username: details.username //anger username i State
            });
            localStorage.setItem("user", details.username);
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
                        <Navbar user={user.username}/>
                        <Routes>
                            <Route path="/deliveries" element={<Deliveries />}></Route>
                            <Route path="/articles" element={<Articles />}></Route>
                            <Route path='/deliveries/:id' element={<DeliveryDetails/>}></Route> 
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