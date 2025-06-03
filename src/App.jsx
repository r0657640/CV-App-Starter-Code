import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Projects from './components/Projects'; 
import About from './components/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={<Layout content={<Projects />} />} />
       <Route path="/about" element={<Layout content={<About />} />} />
      </Routes>
    </Router>
  );
}

export default App;


