import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Project from './pages/Project';
;
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path ="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path ="/project" element={<Project />} />
          <Route path ="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;