import React from 'react'
import Delivery from './Delivery'
import { useState } from 'react'
import  Search  from '../image/search.svg'
import { BiSearchAlt}  from 'react-icons'

const DeliveryList = ({ deliveries }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
    <div id='search-container'>
    <input id='searchbar' type="text" placeholder="Sök efter ordernummer..." onChange={(event) => {setSearchTerm(event.target.value)}}/>
    <img src={Search} alt="Search" />
    </div>
      {deliveries.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.orderId.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val, index) => {
        return (
          <Delivery key={index} delivery={val} />
        )
      })}
    </>
  )
}

export default DeliveryList