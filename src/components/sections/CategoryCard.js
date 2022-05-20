import React from "react"

const CategoryCard = ({ imgName, title }) => {
  const img_url = `static/assets/images/icons/${imgName}`
  return (
    <>
      <a
        href="/"
        className="p-4 bg-white w-60 shadow hover:shadow-lg  space-y-5 rounded-lg transition-all"
      >
        <img
          src={img_url}
          alt="testtt"
          className="w-32 h-32 mx-auto rounded-full"
        ></img>
        <div className="space-y-2 text-center">
          <p className="text-gray-700 font-semibold mb-3">{title}</p>
        </div>
      </a>
    </>
  )
}

export default CategoryCard
