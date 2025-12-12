import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainPage from "./Page/Main/MainPage.jsx";
import About from "./Page/About/About.jsx";
import Contact from "./Page/Contact/Contact.jsx";
import Leadership from "./Page/Leadership/Leadership.jsx";
import Board from "./Page/Board/Board.jsx";
import Services from "./Page/Services/Services.jsx";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
