import React from 'react'
import ME_Listings from '../components/ME_Listings'
import MovieList from '../data/movies.json'
import { NavLink } from 'react-router-dom'

const Moviepage = () => {
  return (
    <section className = "bg-blue-50 px-4 py-6">
        {/* Now Showing Section */}
        <div className="p-6 bg-gray-100">
                {/* Slider Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Now Showing</h2>
                </div>
                {/* Card Selection */}
                <div className="grid grid-cols-4 gap-4">
                    {MovieList.map((ME_list) => (
                        <ME_Listings key={ME_list._id} ME_list={ME_list} />
                    ))}
                </div>
            </div>

            {/* Upcoming Movies Section */}
            <div className="p-6 bg-gray-100">
                {/* Slider Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Upcoming Movies</h2>
                </div>
                {/* Card Selection */}
                <div className="grid grid-cols-4 gap-4">
                    {MovieList.map((ME_list) => (
                        <ME_Listings key={ME_list._id} ME_list={ME_list} />
                    ))}
                </div>
            </div>
    </section>
  )
}

export default Moviepage