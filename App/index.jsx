
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
import Inbound from './Pages/Inbound';
import IncomingDeliveryDetails from './components/Inbound/IncomingDeliveryDetails';
import { useContext, createContext } from 'react';
import HandleIncomingDelivery from './components/Inbound/HandleIncomingDelivery';
import Stock from './components/Stock/Stock';
import ErrorView from './components/ErrorView';
import HandleDelivery from './components/Delivery/HandleDelivery';

export const UserContext = createContext('Unknown');

function App() {
    const adminUser = {
        username: "Henrik",
        password: "admin123"
    }

    const [user, setUser] = useState({ username: "" }); //Anger data i state vid inloggningen med setUser.
    const [error, setError] = useState(""); //Fångar felmeddelande i setError


    useEffect(() => {
        const getUser = localStorage.getItem("user");


        if (getUser != null) {
            setUser({ username: getUser })
        }
    }, [])

    const Login = (details) => {

        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Inloggad");
            setUser({
                username: details.username //anger username i State
            });
            localStorage.setItem("user", details.username);
            const userName = localStorage.getItem("user");
        } else {
            setError("Fel användaruppgifter")
        }
    }

    const Logout = (details) => {
        setUser({ username: details.username });
        localStorage.clear();
    }



    return (

        <div className='App'>
            {(user.username != "") ? (
                <Router>
                    <div>
                        <ErrorView>
                            <UserContext.Provider value={localStorage.getItem("user")} >
                                <Navbar />
                                <Routes>
                                    <Route path="/deliveries" element={<Deliveries />}></Route>
                                    <Route path="/articles" element={<Articles />}></Route>
                                    <Route path="/inbound" element={<Inbound />}></Route>
                                    <Route path='/deliveries/:id' element={<DeliveryDetails />}></Route>
                                    <Route path='/pickdelivery/:id' element={<HandleDelivery />}></Route>
                                    <Route path='/inbound/:id' element={<IncomingDeliveryDetails />}></Route>
                                    <Route path='/inbound/handle/:id' element={<HandleIncomingDelivery />}></Route>
                                    <Route path='/stock' element={<Stock />}></Route>
                                </Routes>
                            </UserContext.Provider>
                            <br />
                            <Footer Logout={Logout} />
                        </ErrorView>
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