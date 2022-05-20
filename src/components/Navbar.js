import React from "react"
import ThemeButton from "./ThemeBtn"

function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 ">
      <div className="navbar transition-all absolute right-0 left-0 z-10 text-white transparent-nav">
        <div className="w-11/12 xl:w-9/12 mx-auto py-5 flex justify-between items-center font-comf">
          <div className="grow ">
            <a href="/" className="text-sm lg:text-lg">
              Listing
            </a>
          </div>
          <div className="grow ">
            <button className=" text-sm lg:text-lg py-2 px-4 rounded-md border-amber-500 bg-transparent text-amber-500 hover:bg-amber-500 hover:text-white transition-all">
              Add listing
            </button>
          </div>
          <div className="space-x-2">
            <button className="text-sm lg:text-lg">Sign In</button>
            <button className="text-sm lg:text-lg">Sign Up</button>
          </div>

          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
