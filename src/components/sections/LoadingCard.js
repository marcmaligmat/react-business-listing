import React from "react"

const LoadingCard = () => {
  return (
    <div className=" hover:shadow-xl transition-shadow bg-white dark:hover:border-gray-500 dark:bg-transparent  border-transparent dark:border dark:border-gray-700  rounded-md shadow-md p-5 flex flex-col items-center justify-center  gap-5">
      <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
      <div className="space-y-2 ">
        <div className="mx-auto w-32 h-6 rounded-full bg-gray-200  animate-pulse shadow-sm"></div>
        <div className="space-y-1">
          <div className="mx-auto w-52 h-5 rounded-full bg-gray-200  animate-pulse shadow-sm"></div>
          <div className="mx-auto w-44 h-5 rounded-full bg-gray-200  animate-pulse shadow-sm"></div>
        </div>
        <div className="mx-auto w-20 h-6 rounded-full bg-gray-200  animate-pulse shadow-sm"></div>
      </div>
    </div>
  )
}

export default LoadingCard
