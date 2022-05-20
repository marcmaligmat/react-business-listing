import React from "react"

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-36 relative z-10">
      <div className="-z-10 bg-slate-50 dark:bg-slate-700 w-8/12 absolute bottom-0 right-0 top-16 rounded-tl-3px"></div>
      <div className="w-10/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="mb-10 md:mb-20">
          <p className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-100 w-full md:w-5/12 font-libre">
            What Our Customers Are saying
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="w-10/12 h-72 relative mb-6">
              <div className=" dot-pattern opacity-30 h-48 w-32 absolute -top-24 -left-16 -z-10"></div>
              <div className=" dot-pattern opacity-30 h-48 w-32 absolute -bottom-24 -right-16 -z-10"></div>
              <div className="absolute z-10  -top-6 -right-6">
                <div className="bg-indigo-500 h-16 w-16 rounded-full flex items-center justify-center">
                  <FormatQuoteIcon className="text-white text-5xl" />
                </div>
              </div>
              <img
                src={"/static/assets/images/testimonials/testimonial-2.jpg"}
                alt="very good"
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center h-10 w-10 bg-amber-400 text-white shadow-md hover:shadow-xl rounded-full p-1">
                <ChevronLeftIcon className="align-middle text-3xl text-gray-60"></ChevronLeftIcon>
              </button>
              <button className="flex items-center justify-center h-10 w-10 bg-amber-400 text-white shadow-md hover:shadow-xl rounded-full p-1">
                <ChevronRightIcon className="align-middle text-3xl text-gray-60"></ChevronRightIcon>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-md lg:text-xl font-bold capitalize mb-3 dark:text-gray-100">
              Help us improve our productivity
            </p>
            <p className="mb-6 dark:text-gray-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div>
              <p className="font-bold text-lg dark:text-gray-100">John Doe</p>
              <p className="italic text-sm dark:text-gray-100">
                Lead Marketing Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
