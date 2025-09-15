import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import ContactMe from "./pages/ContactMe/ContactMe";
import Admin from "./pages/Admin/Admin";
import Error from "./pages/Error/Error";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_Me" element={<AboutMe />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact_Me" element={<ContactMe />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
