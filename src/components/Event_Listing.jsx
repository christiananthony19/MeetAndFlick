import React from 'react'
import ME_Listings from './ME_Listings'
import { NavLink } from 'react-router-dom'
import MovieList from '../data/movies.json'

const Event_Listing = ({atHomePage = false}) => {
    const limit_element_show = atHomePage? MovieList.slice(0,5) : MovieList;
  return (
   <>
     {/* Events Section */}
     <div className="p-6 bg-gray-100">
      {/* Slider Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Trending Events {/* Change font size and style here */}</h2>
        <NavLink to='/Moviepage'>
        <button className="text-cyan-500 hover:text-cyan-700">View More</button>
        </NavLink>
      </div>
      {/* Card Selection */}
      <div className="flex space-x-4 overflow-x-auto">
      {limit_element_show.map((ME_list) => (
           <ME_Listings key={ME_list._id} ME_list = {ME_list} />
       ))}
      </div>
    </div>
    {/* Events Section */}
    <div className="p-6 bg-gray-100">
      {/* Slider Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Upcoming Movies {/* Change font size and style here */}</h2>
        <NavLink to='/EventPage'>
        <button className="text-cyan-500 hover:text-cyan-700">View More</button>
        </NavLink>
      </div>
      {/* Card Selection */}
      <div className="flex space-x-4 overflow-x-auto">
      {limit_element_show.map((ME_list) => (
           <ME_Listings key={ME_list._id} ME_list = {ME_list} />
       ))}
      </div>
    </div>
   </>
  )
}

export default Event_Listing