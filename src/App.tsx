import { Nav } from "./Components/Nav"
import { Homepage } from "./Components/Homepage"
import { Security } from './Components/Security'
import { Savings } from './Components/Savings'
import { Section } from "./Components/Section"
import { Header }  from './Components/Header'
 import { Subfooter } from "./Components/Subfooter"
 import { Footer } from "./Components/Footer"
 import { Auth } from './Components/Auth'
export default function App() {
  return (
  <div className= "bg-[rgb(242,247,248)] font-Jakarta, sans-serif">
      <Nav />
      <Homepage />
      <Security/>
      <Savings/>
      <Section/>
      <Header/>
     <Subfooter/> 
     <Footer/>
     <Auth/>
    </div>
  )
}
