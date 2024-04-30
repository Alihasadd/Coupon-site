
import Navbar from "./components/Navbar";
import Blog from "./subpages/Blog";
import About from "./subpages/About"
import Home from "./subpages/Home"
import { Routes, Route } from "react-router-dom";
import Rants from "./data/Rants"
import Addform from "./subpages/Addform";
import Blogdetails from "./subpages/Blogdetails";

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/addform" element={<Addform />} />
          <Route path="/blogdetails/:id" element={<Blogdetails />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

//HW Notes:
//React Redux chapter
//Read https://classroom.codelabsacademy.com/classroom/learn/wd_04_centralizing_state_with_redux