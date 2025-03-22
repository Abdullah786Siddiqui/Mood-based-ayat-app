import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
