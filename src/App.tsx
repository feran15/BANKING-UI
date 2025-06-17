import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Homepage } from "./Components/Homepage";
import { Security } from './Components/Security';
import { Savings } from './Components/Savings';
import { Section } from "./Components/Section";
import { Header } from './Components/Header';
import { Subfooter } from "./Components/Subfooter";
import { Footer } from "./Components/Footer";
import { AuthHeader } from "./Components/Auth";
import { SignupForm } from "./Components/SignupForm"
import { LoginForm } from "./Components/LoginForm"
export default function App() {
  return (
    <Router>
      <div className="bg-[rgb(242,247,248)] font-Jakarta, sans-serif">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Homepage />
              <Security />
              <Savings />
              <Section />
              <Header />
              <Subfooter />
              <Footer />
              <AuthHeader/>
              <LoginForm/>
            </>
          } />
          <Route path="/auth" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}
