export const handleThemeBtn = () => {
  const toggleButton = document.querySelector(".theme-toggle-btn")
  // theme
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
    toggleButton.checked = true
  } else {
    document.documentElement.classList.remove("dark")
    toggleButton.checked = false
  }

  document
    .querySelector(".theme-toggle-btn")
    .addEventListener("change", (e) => {
      console.log("changed ")
      toggleTheme(e.target.checked)
    })
  function toggleTheme(dark = true) {
    document.documentElement.classList.replace(
      ...(dark ? ["light", "dark"] : ["dark", "light"])
    )
    localStorage.theme = dark ? "dark" : "light"
  }
}

export const handleScroll = () =>
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    const heroHeader = document.querySelector(".hero-header")

    const referencePassed =
      window.scrollY + heroHeader.getBoundingClientRect().height >
      heroHeader.offsetTop // check if reference element is passed

    const navClassNames = referencePassed
      ? ["transparent-nav", "bg-nav"]
      : ["bg-nav", "transparent-nav"]

    navbar.classList.replace(...navClassNames)

    const bannerDimension = document
      .querySelector(".hero-banner")
      .getBoundingClientRect()
    const bannerPassed = bannerDimension.top + bannerDimension.height <= 38 // check if hero banner image is passed

    const navTextColor = bannerPassed
      ? ["text-white", "text-gray-700"]
      : ["text-gray-700", "text-white"]

    navbar.classList.replace(...navTextColor)
  })
