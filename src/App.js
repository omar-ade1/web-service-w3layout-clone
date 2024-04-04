import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import BlogPosts from "./Pages/PartOfPages/BlogPosts";
import BlogSingle from "./Pages/PartOfPages/BlogSingle";
import Page404 from "./Pages/PartOfPages/Page404";
import LandingPage from "./Pages/PartOfPages/LandingPage";

function App() {
  const location = useLocation();
  return (
    <div className="App scroll-smooth overflow-hidden">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
