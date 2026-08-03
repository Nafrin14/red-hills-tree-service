import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Default */}
          <Route
            path="/"
            element={<Navigate to="/syracuse" replace />}
          />

          {/* Location Pages */}
          <Route path="/:location" element={<Home />} />
          <Route path="/:location/about" element={<About />} />
          <Route path="/:location/services" element={<Services />} />
          <Route path="/:location/blog" element={<Blog />} />
          <Route path="/:location/contact" element={<Contact />} />
          <Route path="/:location/privacy" element={<Privacy />} />
          <Route path="/:location/terms" element={<Terms />} />

          {/* Invalid URL */}
          <Route
            path="*"
            element={<Navigate to="/syracuse" replace />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;