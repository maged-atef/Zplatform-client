// @ importing Libraries from Node_Modules
import ReactDOM from "react-dom/client"
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'react-toastify/dist/ReactToastify.css';


// @ importing Files from Project
import App from "./App"
import "./index.css"


// Selecting div element in html file with ID= root
const root_html = document.querySelector("#root");


// creating react root element 
const root_react = ReactDOM.createRoot(root_html);

// render app component ==> parent inside react root element
root_react.render(<App />)