import "./App.css";
import UserLayOut from "./layout/UserLayOut";
import AdminLayOut from "./layout/AdminLayOut";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="container-fluid position-relative p-0">
      <Router>
        <UserLayOut></UserLayOut>
      </Router>
    </div>
  );
}

export default App;
