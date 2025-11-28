import { Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import TeamMemberDetails from "./components/TeamMemberDetails";
import Projects from "./components/Projects";
import ProductList from "./ProductTask/ProductList";
import ProductDetails from "./ProductTask/ProductDetails";
import Signupform from "./components/Signupform";
import NavBar from "./components/Navbar";
import Calendar from "./components/Calendar";


export default function App() {
  return (
    <>
      <NavBar />
        <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamMemberDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/productslist" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/" element={<Signupform />} />
      </Routes>
    </>
  );
}