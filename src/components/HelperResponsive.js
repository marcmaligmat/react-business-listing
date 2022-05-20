import React from "react"

const HelperResponsive = () => {
  return (
    <div className="fixed bottom-0 z-50 bg-green-500 bg-opacity-70 text-white text-xl shadow-md px-2">
      <span className="sm:hidden">default</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline 2xl:hidden">xl</span>
      <span className="hidden 2xl:inline">2xl</span>
    </div>
  )
}

export default HelperResponsive
