import React from 'react'
import Delivery from './Delivery'
import { useState } from 'react'
import Search from '../image/search.svg'
import { BiSearchAlt } from 'react-icons'

const DeliveryList = ({ data, Comp, placeholder, filter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  console.log(data);



  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Filter</button>
      {isOpen && filter.map((val, index) => {
        return (
          <label key={index}>
            <input type="checkbox" value={val} onChange={(e) => setSearchFilter(e.target.value)} /> {val}
          </label>
        )
      })}
      <div id='search-container'>
        <input id='searchbar' type="text" placeholder={placeholder} onChange={(event) => { setSearchTerm(event.target.value) }} />
        <img src={Search} alt="Search" />
      </div>
      {data.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val["orderId"].toLowerCase().includes(searchTerm.toLowerCase())) {
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