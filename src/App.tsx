import { Nav } from "./Components/Nav"
import { Homepage } from "./Components/Homepage"
import { Security } from './Components/Security'
import { Savings } from './Components/Savings'
import { Section } from "./Components/Section"
import { Header }  from './Components/Header'
export default function App() {
  return (
  <div className= "bg-[rgb(242,247,248)] font-Jakarta, sans-serif">
      <Nav />
      <Homepage />
      <Security/>
      <Savings/>
      <Section/>
      <Header/>
    </div>
  )
}
