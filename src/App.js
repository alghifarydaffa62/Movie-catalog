import Navigation from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Nowplay from "./component/now-playing";
import Search from "./component/search";
import Upcoming from "./component/upcoming";
function App() {
  return (
    <div>
      <header>
        <h1>Movie Catalogue</h1>
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
