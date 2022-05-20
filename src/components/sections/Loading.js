import React from "react"
import LoadingCard from "./LoadingCard"
import LoadingCard2 from "./LoadingCard2"
const Loading = () => {
  return (
    <section className="bg-sky-50  dark:bg-gray-800 py-32 ">
      <div className="w-8/12 lg:w-10/12 xl:w-8-12 mx-auto">
        <div className="text-center text-gray-600 dark:text-gray-100 mb-12">
          <p className="text-4xl font-bold mb-2">Blog Posts</p>
          <p>
            Actualis at conscius supponam ac. Vocem si longo mo co veris entis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-10">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard2 />
          <LoadingCard2 />
          <LoadingCard2 />
        </div>
      </div>
    </section>
  )
}

export default Loading
