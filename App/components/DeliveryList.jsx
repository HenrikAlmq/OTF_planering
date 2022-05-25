import React from 'react'
import Delivery from './Delivery'
import { useState } from 'react'
import Search from '../image/search.svg'
import { BiSearchAlt } from 'react-icons'

const DeliveryList = ({ data, Comp, placeholder, filter, nested }) => {
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
        if (nested !== true){
          return (
            <Comp key={index} delivery={val} />
          ) 
        }
        if (nested === true) {
          val.map((subItem) => {
            return (
              <Comp key={index} delivery={val} subItem={subItem} /> 
            )
          })
          
        }
      })}
    </>
  )
}

export default DeliveryList