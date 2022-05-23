import React from 'react'
import { useState, useEffect } from 'react'
import { getStockLocationsAPI } from '../../Adapters/StockAdapter';
import axios from 'axios';

const HandleIncomingRows = ({ deliveryRows, putDeliveryRow }) => {
    const [recievedQuantity, setRecievedQuantity] = useState('');
    const [locations, setlocations] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [handled, setHandled] = useState(true);

    useEffect(() => {
        const getStockLocations = async () => {
            const stockLocationsFromServer = await getStockLocationsAPI();
            setlocations(stockLocationsFromServer);
        }

        getStockLocations();
    }, [])

    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = locations.filter(location => {
                const regex = new RegExp(`${text}`, "gi");
                return location.location.match(regex)
            })
        }
        console.log(matches)
        setSuggestions(matches)
        setText(text)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(recievedQuantity > deliveryRows.orderedAmount){
            alert("Säker på att du vill överleverera?")
        }
        const body = {IncomingDeliveryRowId: deliveryRows.incomingDeliveryRowId, Handled: handled, RecievedAmount: recievedQuantity}
        putDeliveryRow(body);
    }


    return (
        <div className='handle-incoming-rows-container'>
            <div className='handle-incoming-rows'>
                <p>Hanterad: {deliveryRows.handled ? 'Ja' : 'Nej'}</p>
                <p>Artikelnummer: {deliveryRows.articleNumber}</p>
                <p>Beställt antal: {deliveryRows.orderedAmount}</p>
                <form className='form-incoming' onSubmit={onSubmit}>
                    <input className='input-number-incoming' type="number" placeholder={"Mottaget antal: " + deliveryRows.recievedAmount} onChange={(e) => setRecievedQuantity(e.target.value)} />
                    <input type="text" placeholder='Lagerplats' onChange={e => onChangeHandler(e.target.value)} value={text} />
                    {suggestions && suggestions.map((suggestion, index) =>
                        <div className='suggestion-div' key={index} onClick={() => onSuggestHandler(suggestion.location)}>{suggestion.location}</div>
                    )}
                    <input className='input-dr' type="submit" value="Leverera in" />
                </form>
            </div>
        </div>
    )
}

export default HandleIncomingRows