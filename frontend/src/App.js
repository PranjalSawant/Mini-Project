import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Contactpage } from "./pages/Contactpage";
import Login from "./pages/Loginpage";
import Register from "./pages/Registerpage";
import { Layout } from "./components/Layout";
import { SellWaste } from "./pages/SellWaste";
import AdminPanel from "./pages/AdminPanel";
import { AgentsPanel } from "./pages/AgentsPanel";
import { AgentsTrack } from "./pages/AgentsTrack";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <Aboutpage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contactpage />
            </Layout>
          }
        />
        <Route
          path="/sellwaste"
          element={
            <Layout>
              <SellWaste />
            </Layout>
          }
        />

        {/* Routes without Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/agent" element={<AgentsPanel />} />
        <Route path="/agent/track" element={<AgentsTrack />} />
      </Routes>
    </Router>
  );
}

export default App;
