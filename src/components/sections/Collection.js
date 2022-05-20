import React from "react"
import CollectionCard from "./CollectionCard"

const Collection = () => {
  return (
    <section className="bg-sky-50 dark:bg-gray-800 py-10 lg:py-32 w-full">
      <div className="w-8/12 mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl font-bold text-gray-600 dark:text-gray-100">
            Collections
          </p>
          <p className="text-gray-600 dark:text-gray-100">
            Discover List of Top Places by Collection
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
            <CollectionCard imgName="dental1.jpg" />
            <CollectionCard imgName="res-pic1.jpeg" />
            <CollectionCard imgName="res-pic2.jpg" />
            <CollectionCard imgName="res-pic3.jpg" />
            <CollectionCard imgName="res-pic4.jpg" />
            <CollectionCard imgName="res-pic5.jpg" />
            <CollectionCard imgName="res-pic6.jpg" />
            <CollectionCard imgName="res-pic9.jpg" />
          </div>
          <div className="mt-12 text-center">
            <button className="rounded-md py-2.5 px-4 bg-white dark:bg-gray-800  border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600 dark:text-gray-100 ">
              🎁 More collections
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection
