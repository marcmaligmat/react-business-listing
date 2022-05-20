import React from "react"

const LoadingCard2 = () => {
  return (
    <div className="hover:shadow-xl transition-shadow bg-white dark:hover:border-gray-500 dark:bg-transparent  border-transparent dark:border dark:border-gray-700 rounded-md shadow p-5 space-y-3">
      <div className="h-44 w-full bg-gray-200 animate-pulse  rounded-lg"></div>
      <div className="space-y-3">
        <div className="w-8/12 h-5 rounded-full shadow bg-gray-200 animate-pulse "></div>
        <div className="space-y-1">
          <div className="w-full rounded-full h-5 shadow bg-gray-200 animate-pulse "></div>
          <div className="w-full rounded-full h-5 shadow bg-gray-200 animate-pulse "></div>
          <div className="w-full rounded-full h-5 shadow bg-gray-200 animate-pulse "></div>
          <div className="w-full rounded-full h-5 shadow bg-gray-200 animate-pulse "></div>
          <div className="w-7/12 rounded-full h-5 shadow bg-gray-200 animate-pulse "></div>
        </div>
        <div className="flex gap-2">
          <div className="w-16 h-5 rounded-full bg-gray-200  animate-pulse shadow"></div>
          <div className="w-12 h-5 rounded-full bg-gray-200  animate-pulse shadow"></div>
          <div className="w-20 h-5 rounded-full bg-gray-200  animate-pulse shadow"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingCard2
