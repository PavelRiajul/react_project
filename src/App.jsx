import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Service" element={<Service/>}></Route>
        <Route path="Blog" element={<Blog/>}></Route>
        <Route path="Project" element={<Project/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;