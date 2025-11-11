import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Notfound from "./NotFound "
import Z from "./Pages/Z/Z"
import { ToastContainer } from 'react-toastify';
import Features from "./Components/Z/Features"
import Contact from "./Components/Z/Contact"
import About from "./Components/Z/about"
import Email from "./Pages/BulkyEmail/Email"
import Job from "./Pages/JobManage/Job"
import Zconnect from "./Pages/Zconnect/Zconnect"
import Zhome from "./Components/Z/Zhome"
import Login from "./Components/Z/Login"
import Register from "./Components/Z/Register"
import Docs from "./Components/Z/Docs"
import Resume from "./Pages/ResumeBuilder/Resume"

const route = createBrowserRouter([
  {
    path: "/", element: <Z />, children: [
      { index: true, element: <Zhome /> },
      { path: "Features", element: <Features /> },
      { path: "Contact", element: <Contact /> },
      { path: "About", element: <About /> },
      { path: "/zFeatures/BulkyEmail", element: <Email /> },
      { path: "/zFeatures/JobManage", element: <Job /> },
      { path: "/zFeatures/ZConnect", element: <Zconnect /> },
      { path: "/zFeatures/Resume", element: <Resume /> },

      { path: "/Login", element: <Login /> },
      { path: "/Register", element: <Register /> },
      { path: "/Docs", element: <Docs /> },
    ]
  },




  { path: "*", element: <Notfound /> },


])

function App() {

  return <>
    <ToastContainer />
    <RouterProvider router={route}>

    </RouterProvider>
  </>
}

export default App
