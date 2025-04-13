import { useEffect } from "react";
import Header from "./Components/Header";
import { Outlet, useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
