import React from "react"
import PeopleIcon from "@mui/icons-material/People"
import LightbulbIcon from "@mui/icons-material/Lightbulb"

const Team = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-36 relative">
      <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="hidden lg:inline food w-1/2 h-full absolute top-0 left-0 botom-0 opacity-30"></div>
            <div className="hidden lg:inline w-1/2 bg-gradient-to-l from-gray-50 dark:from-gray-800  via transparent absolute top-0 left-0 bottom-0 h-full"></div>
            <div className="flex justify-center gap-12">
              <div className="flex flex-col gap-12">
                <div className="relative">
                  <img
                    src="/static/assets/images/team/smile.jpeg"
                    alt="team member"
                    className="w-48 h-60 lg:h-52 xl:h-60 object-cover rounded-md shadow-lg"
                  />
                  <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md">
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foxo </p>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/static/assets/images/team/smile_6.jpg"
                    alt="team member"
                    className="w-48 h-60 lg:h-52 xl:h-60 object-cover rounded-md shadow-lg"
                  />
                  <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md">
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo </p>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 mt-12">
                <div className="relative">
                  <img
                    src="/static/assets/images/team/smile_man_1.jpg"
                    alt="team member"
                    className="w-48 h-60 lg:h-52 xl:h-60 object-cover rounded-md shadow-lg"
                  />
                  <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md">
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo </p>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/static/assets/images/team/smile_4.jpg"
                    alt="team member"
                    className="w-48 h-60 lg:h-52 xl:h-60 object-cover rounded-md shadow-lg"
                  />
                  <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md">
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo </p>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-bold uppercase text-indigo-500 mb1">
              Our Support Heroes
            </p>
            <p className="text-4xl font-bold text-gray-600 dark:text-gray-100">
              Meet the team
            </p>
            <p className="mt-3 text-gray-500 dark:text-gray-100 text-lg lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-8">
              <button className="transition-colors mt-4 mr-4 py-2 px-3 border-2 border-gray-500 font-semibold text-gray-500 dark:text-gray-100 shadow-md hover:bg-gray-500 hover:text-white rounded-full">
                <PeopleIcon className="mr-1" />
                Meet Us
              </button>

              <button className=" transition-colors mt-4 mr-4 py-2 bg-blue-400 px-3 border-2 border-blue-400 font-semibold text-white shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500 rounded-full">
                <LightbulbIcon className="mr-1 inset-4" />
                <span className="pt-5">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
