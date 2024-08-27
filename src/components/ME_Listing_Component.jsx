import React from 'react'
import ME_Listings from './ME_Listings'
import MovieList from '../data/movies.json'
import { NavLink } from 'react-router-dom'

const ME_Listing = () => {

  const limit_element_show = MovieList.slice(0,5);
  return (
    <>
    {/* Movie Section */}
    <div className="p-6 bg-gray-100">
      {/* Slider Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Now Showing </h2>
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
        <h2 className="text-xl font-bold">Trending Events </h2>
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
        <h2 className="text-xl font-bold">Upcoming Movies </h2>
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

export default ME_Listing