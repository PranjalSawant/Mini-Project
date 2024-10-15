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
import { UserTrackOrder } from "./pages/UserTrackOrder";
import { Offers } from "./pages/Offers";
import { Buywaste } from "./pages/Buywaste";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route path="/" element={<Layout><Homepage /></Layout>}/>
        <Route path="/about" element={<Layout><Aboutpage /></Layout>}/>
        <Route path="/contact" element={<Layout><Contactpage /></Layout>}/>
        <Route path="/sellwaste" element={<Layout><SellWaste /></Layout>}/>
        <Route path="/agent" element={<Layout><AgentsPanel /></Layout>} />
        <Route path="/agent/track" element={<Layout><AgentsTrack /></Layout>} />
        <Route path="/trackorder" element={<Layout><UserTrackOrder /></Layout>} />
        <Route path="/offers" element={<Layout><Offers /></Layout>} />
        <Route path="/buywaste" element={<Layout><Buywaste /></Layout>} />
        {/* Routes without Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
export default App;
