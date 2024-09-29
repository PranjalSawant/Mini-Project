import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Contactpage } from './pages/Contactpage';
import Login from './pages/Loginpage';
import Register from './pages/Registerpage';
import { Layout } from './components/Layout';

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

        {/* Routes without Header */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
