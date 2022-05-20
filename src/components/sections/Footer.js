import React from "react"

const Footer = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-14 border-t">
      <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between  py-0 lg:py-12 gap-12 lg:gap-0">
          <div>
            <p className="uppercase font-bold mb-2 text-gray-600 dark:text-gray-100">
              Company
            </p>
            <ul>
              <li className="text-gray-600 dark:text-gray-100 ">Who We Are</li>
              <li className="text-gray-600 dark:text-gray-100 ">Contact Us</li>
              <li className="text-gray-600 dark:text-gray-100 ">Support</li>
            </ul>
          </div>

          <div>
            <p className="uppercase font-bold mb-2 text-gray-600 dark:text-gray-100">
              Business
            </p>
            <ul>
              <li className="text-gray-600 dark:text-gray-100 ">
                Claim Business
              </li>
              <li className="text-gray-600 dark:text-gray-100 ">Advertise</li>
            </ul>
          </div>

          <div>
            <p className="uppercase font-bold mb-2 text-gray-600 dark:text-gray-100">
              Company
            </p>
            <ul>
              <li className="text-gray-600 dark:text-gray-100 ">Who We Are</li>
              <li className="text-gray-600 dark:text-gray-100 ">Contact Us</li>
              <li className="text-gray-600 dark:text-gray-100 ">Support</li>
              <li className="text-gray-600 dark:text-gray-100 ">
                Privacy Policy
              </li>
              <li className="text-gray-600 dark:text-gray-100 ">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase font-bold mb-2 text-gray-600 dark:text-gray-100">
              Follow Us
            </p>
            <div className="flex gap-2">
              <a href="/">
                <img src={"/static/assets/images/icons/fb.png"} alt="" />
              </a>
              <a href="/">
                <img src={"/static/assets/images/icons/tr.png"} alt="" />
              </a>
              <a href="/">
                <img src={"/static/assets/images/icons/tg.png"} alt="" />
              </a>
              <a href="/">
                <img src={"/static/assets/images/icons/ig.png"} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-12 text-center">
          <p className="text-gray-900  tex-sm dark:text-gray-400">
            2022 © Stellar Leads. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
