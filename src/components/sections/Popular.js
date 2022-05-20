import React from "react"
import Card from "../Card"

const Popular = () => {
  return (
    <section>
      <div className="bg-slate-100 dark:bg-gray-800 py-32">
        <div className="w-8/12 md:w-10/12 lg:w-8-12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 dark:text-gray-100">
              Popular places
            </p>
            <p className="text-gray-600 dark:text-gray-100">
              Discover Most Searched Places
            </p>
          </div>
          <div>
            <div className="grid sm:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto">
              <Card
                imgName="skynews-dentist-generic_5393494.jpg"
                businessName="Pete dental"
              />
              <Card imgName="phone-repair.jpg" businessName="Pete dental" />
              <Card
                imgName="20210221-KXCoffeeGym29.jpg"
                businessName="Mr. Barber"
              />
              <Card imgName="download.jpg" businessName="Yumm burger" />
              <Card imgName="barber.jpg" businessName="Mr. Barber" />
              <Card imgName="res-pic3.jpg" businessName="Couples Dinner" />
              <Card imgName="res-pic4.jpg" businessName="The Best Louche" />
              <Card imgName="res-pic5.jpg" businessName="5 Star Eats" />
              <Card
                imgName="res-pic6.jpg"
                businessName="Indian Traditional food"
              />
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-md py-2.5 px-6 bg-white dark:bg-gray-700 border border-gray-100 shadow hover:shadow-lg text-gray-600 dark:text-gray-100">
                🚀Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular
