import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact.jsx";
// import Favorite from "./Pages/Favorite.jsx";
import Home from "./Pages/Home.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MoodBaseAyatStore, { persistor } from "./Store/store.js";
import Favorite from "./Pages/Favorite.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "favorite", element: <Favorite /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={MoodBaseAyatStore}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
