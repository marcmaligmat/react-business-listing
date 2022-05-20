import React from "react"

import SearchIcon from "@mui/icons-material/Search"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import LocalCafeIcon from "@mui/icons-material/LocalCafe"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import SchoolIcon from "@mui/icons-material/School"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"

function Banner() {
  const img_dir = "/static/assets/images/hero/hero_4.jpg"
  // /static/assets/images/hero/hero_4.jpg
  return (
    <div
      className="hero-banner relative h-screen"
      style={{ backgroundImage: `url(${img_dir})` }}
    >
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="absolute inset-0 h-full w-full">
        <div className="flex min-h-full w-full items-center justify-center">
          <div className="space-y-6">
            <div className="text-white text-center hero-header">
              <p className="text-xl lg:text-4xl capitalize font-bold mb-4 font-comf">
                Discover places that people love
              </p>
              <p className="text-sm lg:text-lg lg:w-8/12 mx-auto ">
                We will help you find the best places in the World.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  className="round-md w-80 bg-white text-gray-600 dark:text-gray-100 py-3 px-4 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="I'm looking for ..."
                  className="round-md w-80 bg-white text-gray-600 dark:text-gray-100 py-3 px-4 focus:outline-none"
                />
              </div>
              <div>
                <button className="rounded-md py-2 lg:py-2.5 px-4 lg:px-6 bg-amber-500 text-lg text-white hover:bg-amber-600 p-4">
                  <SearchIcon />
                  Search
                </button>
              </div>
            </div>
            <div className="w-10/12 mx-auto">
              <ul className="flex flex-wrap lg:gap-7 justify-center text-sm text-white">
                <li className="capitalize ">
                  <a href="/" className="p-4 rounded-sm" alt="restaurant">
                    <span className="align-middle hidden md:inline-flex">
                      <RestaurantMenuIcon />
                    </span>
                    Restaurants
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/" className="  p-4 rounded-sm" alt="restaurant">
                    <span className="align-middle hidden md:inline-flex">
                      <LocalCafeIcon />
                    </span>
                    Cafe
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/" className="  p-4 rounded-sm" alt="gym">
                    <span className="align-middle hidden md:inline-flex">
                      <FitnessCenterIcon />
                    </span>
                    Gym
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/" className="p-4 rounded-sm" alt="hospital">
                    <span className="align-middle hidden md:inline-flex">
                      <LocalHospitalIcon />
                    </span>
                    Hospital
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/" className=" p-4 rounded-sm" alt="school">
                    <span className="align-middle hidden md:inline-flex">
                      <SchoolIcon />
                    </span>
                    School
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/" className=" p-4 rounded-sm" alt="shopping">
                    <span className="align-middle hidden md:inline-flex">
                      <ShoppingCartCheckoutIcon />
                    </span>
                    Shopping
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
