import React from "react"

const FeatureCard = ({ svgInfo, title }) => {
  return (
    <div className="group  hover:bg-gray-500  hover:shadow-2xl dark:hover:bg-transparent border border-transparent dark:hover:border-gray-700 shadow-xl p-4 rounded-md cursor-pointer transition-all">
      <button className="group-hover:bg-black text-gray-600 dark:text-gray-100 bg-slate-100 p-2 rounded-md shadow-md">
        {svgInfo}
      </button>
      <p className="group-hover:text-white  text-xl font-bold mt-3 mb-2 text-gray-600 dark:text-gray-100 ">
        {title}
      </p>
      <p className="group-hover:text-white  text-gray-500 dark:text-gray-400">
        Actualis at conscius supponam ac. Vocem si longo mo co veris entis.
      </p>
    </div>
  )
}

export default FeatureCard
