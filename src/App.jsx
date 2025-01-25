import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default App;
