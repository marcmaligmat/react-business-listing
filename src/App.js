import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Main from "./components/Main"
import Listeners from "./components/Listeners"
import HelperResponsive from "./components/HelperResponsive"

import "./index.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Main />
      <Listeners />
      <HelperResponsive />
    </div>
  )
}
