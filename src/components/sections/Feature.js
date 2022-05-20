import React from "react"
import FeatureCard from "./FeatureCard"

import {
  gradHat,
  alchemy,
  mobileSignal,
  cpuModel,
  loggerBoard,
  graphPie,
} from "../../data/svg"

const Feature = () => {
  return (
    <section className="bg-slate-50 dark:bg-gray-800 py-32 relative z-10">
      <div className="w-8/12 mx-auto">
        <div className="text-center text-gray-600 dark:text-gray-100 mb-12">
          <p className="text-4xl font-bold mb-2">Our Valuable Features</p>
          <p>
            Actualis at conscius supponam ac. Vocem si longo mo co veris entis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10 xl:gap-16">
          <FeatureCard svgInfo={gradHat} title="Unlimited Chat" />
          <FeatureCard svgInfo={alchemy} title="Multiple Agent" />
          <FeatureCard svgInfo={mobileSignal} title="Departments" />
          <FeatureCard svgInfo={cpuModel} title="Super Fast" />
          <FeatureCard svgInfo={loggerBoard} title="Detail Log" />
          <FeatureCard svgInfo={graphPie} title="Analytics" />
        </div>
      </div>
    </section>
  )
}

export default Feature
