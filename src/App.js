import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth top="1000" style={{ bottom: "50%" }} />
      <a href="https://wa.me/2347088366937" className="float" target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<First />} />
        <Route path="/blog/2" element={<Second />} />
        <Route path="/blog/3" element={<Third />} />
      </Routes>
    </>
  );
}

export default App;
