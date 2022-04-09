import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import HomeContainer from "./pages/HomeContainer";
import Frontend from "./pages/Frontend";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar />
        <main className=' w-full'>
          <Routes>
            <Route path="/*" element={<HomeContainer />} />
            <Route path="/frontend-dev" element={<Frontend />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
