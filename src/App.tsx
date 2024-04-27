import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Post from "./pages/Post";
import Guest from "./pages/Guest";
import Mypage from "./pages/Mypage";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
