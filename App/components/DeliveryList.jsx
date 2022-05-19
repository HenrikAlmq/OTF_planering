import React from 'react'
import Delivery from './Delivery'
import { useState } from 'react'
import Search from '../image/search.svg'
import { BiSearchAlt } from 'react-icons'

const DeliveryList = ({ data, Comp, placeholder, filter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div id='search-container'>
        <input id='searchbar' type="text" placeholder={placeholder} onChange={(event) => { setSearchTerm(event.target.value) }} />
        <img src={Search} alt="Search" />
      </div>
      {data.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val[filter].toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, index) => {
        return (
          <Comp key={index} delivery={val} />
        )
      })}
    </>
  )
}

export default DeliveryList