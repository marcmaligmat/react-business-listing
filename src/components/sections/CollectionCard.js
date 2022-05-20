import React from "react"

const Collections = ({ imgName }) => {
  const img_url = `static/assets/images/${imgName}`
  return (
    <div className="relative w-full lg:w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
      <img
        src={img_url}
        alt="Collection"
        className="rounded w-full h-full object-cover shadow"
      />
      <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
      <div className="absolute bottom-2 left-3">
        <p className="text-white text-lg font-semibold">Newly Opened</p>
        <p className="text-white text-sm">21 places</p>
      </div>
    </div>
  )
}

export default Collections
