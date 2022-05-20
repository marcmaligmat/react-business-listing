import React from "react"
import StarIcon from "@mui/icons-material/Star"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import PlaceIcon from "@mui/icons-material/Place"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"

function Card({ imgName, businessName }) {
  const img_url = `/static/assets/images/${imgName}`
  return (
    <div className="bg-white dark:bg-gray-600 rounded-md shadow  overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={img_url}
          alt="dentistry"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="px-10 sm:px-2 py-4 space-y-2">
        <div className="flex items-center text-sm">
          <span className="text-amber-400">
            <StarIcon />
          </span>
          <span className="text-amber-400">
            <StarIcon />
          </span>
          <span className="text-amber-400">
            <StarIcon />
          </span>
          <span className="text-amber-400">
            <StarIcon />
          </span>
          <span className="text-amber-400">
            <StarHalfIcon />
          </span>
          <span className="ml-2 text-xs text-gray-600 dark:text-gray-100">
            294 reviews
          </span>
        </div>
        <p className="text-lg font-bold text-gray-600 dark:text-gray-100">
          {businessName}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-100 ">
          <span className="align-middle text-gray-400 -ml-1">
            <PlaceIcon />
          </span>
          Somewhere in, California
        </p>
        <div className="space-x-2">
          <span className="text-xs px-2 py-0.5 bg-amber-100 border-amber-200 text-amber-700 rounded-full">
            clinic
          </span>
          <span className="text-xs px-2 py-0.5 bg-amber-100 border-amber-200 text-amber-700 rounded-full">
            hospital
          </span>
          <span className="text-xs px-2 py-0.5 bg-amber-100 border-amber-200 text-amber-700 rounded-full">
            dental
          </span>
        </div>
        <div className="absolute right-3 bottom-3">
          <LocalFireDepartmentIcon className="text-amber-600 " />
        </div>
      </div>
    </div>
  )
}

export default Card
