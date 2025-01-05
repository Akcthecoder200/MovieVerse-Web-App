import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import TheNavbar from "./components/TheNavbar";

function App() {
  return (
    <>
      <TheNavbar />
      <div className="bg-neutral-700">
        <div className="mx-auto max-w-5xl px-4 pt-2 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/search/:searchId" element={<Search />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
