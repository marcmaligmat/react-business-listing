import React from "react"
import CategoryCard from "./CategoryCard"

const Category = () => {
  return (
    <section className="bg-gray-50 py-32 dark:bg-gray-800">
      <div className="w-10/12 md:w-8/12 mx-auto">
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-100">
            Discover By Categories
          </p>
          <p className="text-gray-600 dark:text-gray-100">
            Discover Places By categories
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
            <CategoryCard imgName="coffee.png" title="Coffee and Tea" />
            <CategoryCard imgName="camera.png" title="Entertainment" />
            <CategoryCard imgName="hotel.png" title="Hotels & Travel" />
            <CategoryCard imgName="health.png" title="Healt & medical" />
            <CategoryCard imgName="school.png" title="Education" />
            <CategoryCard imgName="automotive.png" title="Automotive" />
            <CategoryCard imgName="home.png" title="Home Service" />
            <CategoryCard imgName="shopping.png" title="Shopping" />
          </div>
          <div className="mt-12 text-center">
            <button className="rounded-md py-2.5 px-4 bg-white dark:bg-gray-800  border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600 dark:text-gray-100 ">
              🎈 Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
