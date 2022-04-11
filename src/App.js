import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/HomeContainer";
import Frontend from "./pages/Frontend";
import MobileAppDev from "./pages/MobileAppDev";
import Contact from "./pages/Contact";
import FullStack from "./pages/FullStack";
import Python from "./pages/Python";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />
      <main className=" w-full">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<HomeContainer />} />
          <Route path="/frontend-dev" element={<Frontend />} />
          <Route path="/mobileapp-dev" element={<MobileAppDev />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/python" element={<Python />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
