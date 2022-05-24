import React from 'react'
import { useState, useEffect } from 'react'
import { getStockLocationsAPI } from '../../Adapters/StockAdapter';
import axios from 'axios';
import {useContext, createContext } from 'react';
import { UserContext } from '../../index'

const HandleIncomingRows = ({ deliveryRows, putDeliveryRow, postStockPosition }) => {
    const [recievedQuantity, setRecievedQuantity] = useState('');
    const [locations, setlocations] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [handled, setHandled] = useState(true);
    const [date, setDate] = useState(new Date());
    const [locationId, setLocationId] = useState('');
    const userName = useContext(UserContext);
    useEffect(() => {
        const getStockLocations = async () => {
            const stockLocationsFromServer = await getStockLocationsAPI();
            setlocations(stockLocationsFromServer);
        }
        
        getStockLocations();
    }, [])
    
    const onSuggestHandler = (text, stock) => {
        setText(text);
        setLocationId(stock);
        setSuggestions([]);
    }

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = locations.filter(location => {
                const regex = new RegExp(`${text}`, "gi"); //Gi Modifier = bryr sig inte om små/stora-bokstäver
                
                return location.location.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(recievedQuantity > deliveryRows.orderedAmount){
            alert("Säker på att du vill överleverera?")
        }
        const bodyDeliveryRow = {IncomingDeliveryRowId: deliveryRows.incomingDeliveryRowId, Handled: handled, RecievedAmount: recievedQuantity}
        putDeliveryRow(bodyDeliveryRow);
        
        const bodyProductStock = {IncomingDeliveryRowId: deliveryRows.incomingDeliveryRowId, IncomingDeliveryId: deliveryRows.incomingDeliveryId, DeliveryId: null, Quantity: recievedQuantity, InboundDate: date, PickedDate: null, Picked: false, StockLocationId: locationId, Location: text, User: userName, ProductId: deliveryRows.productId}
        postStockPosition(bodyProductStock);
    }
    

    return (
        <div className='handle-incoming-rows-container'>
            <div className='handle-incoming-rows'>
                <p>ProduktId: {deliveryRows.productId}</p>
                <p>Hanterad: {deliveryRows.handled ? 'Ja' : 'Nej'}</p>
                <p>Artikelnummer: {deliveryRows.articleNumber}</p>
                <p>Beställt antal: {deliveryRows.orderedAmount}</p>
                <form className='form-incoming' onSubmit={onSubmit}>
                    <input className='input-number-incoming' type="number" placeholder={"Mottaget antal: " + deliveryRows.recievedAmount} onChange={(e) => setRecievedQuantity(e.target.value)}  />
                    <input type="text" placeholder='Lagerplats' onChange={e => onChangeHandler(e.target.value)} value={text} />
                    {suggestions && suggestions.map((suggestion, index) =>
                        <div className='suggestion-div' key={index} onClick={() => onSuggestHandler(suggestion.location, suggestion.stockLocationId)}>{suggestion.location}</div>
                    )}
                    {!deliveryRows.handled ? <input className='input-dr' type="submit" value="Leverera in" /> : <p>Redan hanterad!</p>}
                </form>
            </div>
        </div>
    )
}

export default HandleIncomingRows