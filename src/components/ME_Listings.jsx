import React from 'react'
import {NavLink} from 'react-router-dom'

const ME_Listings = ({ME_list}) => {

    const Releasedate = new Date(ME_list.release_date);
    const DateFormat = 
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const formattedDate = Releasedate.toLocaleDateString('en-US',DateFormat);
  return (
    <>
     {/* ME_list Slider Container */} 
       <div key={ME_list._id} className="bg-white shadow-md rounded-lg p-4 w-64 h-[400px]">
         {/* ME_list Image */}
         <img
           className="w-full h-60 object-cover rounded-md mb-2"
           src={ME_list.poster_url}
           alt={ME_list.poster_url}
         />
         {/* To change the image size, adjust the 'h-40' and 'w-full' classes */}

         {/* Picture Name and Rating */}
         <div className="text-center text-gray-700 font-medium mb-1">
           {ME_list.title} | {ME_list.restriction_rating}
         </div>

         {/* Release Date */}
         <div className="text-center text-gray-500 text-sm mb-2">
           {formattedDate}
         </div>

         {/* Get Tickets Button */}
         <NavLink to='/ME_Page_Detail'>
         <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-red-400">
          Get Tickets
         </button>
         </NavLink>
       </div>
    </>
  )
}

export default ME_Listings