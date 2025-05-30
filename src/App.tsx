import { Nav } from "./Components/Nav"
import { Homepage } from "./Components/Homepage"
import { Security } from './Components/Security'
import { Savings } from './Components/Savings'
export default function App() {
  return (
  <div className= "bg-[rgb(242,247,248)] font-Jakarta, sans-serif">
      <Nav />
      <Homepage />
      <Security/>
      <Savings/>
    </div>
  )
}
