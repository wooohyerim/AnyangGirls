import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Post from "./pages/Post";
import Header from "./components/Header";
import Guest from "./pages/Guest";
import Introduce from "./pages/Introduce";

function App() {
  return (
    <>
      <Header />
      <div className="px-4 lg:px-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
