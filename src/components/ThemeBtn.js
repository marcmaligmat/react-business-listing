import React from "react"

const ThemeBtn = () => {
  return (
    <div class="pl-1 lg:pl-10">
      <label class="switch relative block w-[4rem] h-9">
        <input
          type="checkbox"
          class="theme-toggle-btn hidden peer checked:bg-black"
        />
        <span class="bg-yellow-400 shadow-md peer-checked:bg-gray-700 peer-checked:before:translate-x-full transition-all  absolute inset-0 cursor-pointer rounded-full before:shadow-sm before:shadow-gray-800 before:content-['☀'] before:flex before:justify-center before:items-center before:absolute before:h-7 before:w-7 before:bg-orange-300 dark:bg-gray-800 before:rounded-full before:inset-1 peer-checked:before:bg-white dark:peer-checked:before:bg-gray-800 peer-checked:before:content-['🌙'] before:transition-all"></span>
      </label>
    </div>
  )
}

export default ThemeBtn
