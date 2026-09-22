import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekt" element={<Projects />} />
          <Route path="/erfarenhet" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
