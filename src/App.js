import Navigation from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Nowplay from "./component/now-playing";
import Search from "./component/search";
import Upcoming from "./component/upcoming";
import './style/home.css'

function App() {
  return (
    <div>
      <header>
        <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/now-playing" element={<Nowplay/>}/>
          <Route path="/upcoming" element={<Upcoming/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
