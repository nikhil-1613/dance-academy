import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import DummySection from './DummySection';
import Contact from './Contact';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to avoid overlap with fixed navbar */}
        <Home />
        <div className="py-10"> {/* Add padding-y between components */}
          <About />
        </div>
        <div className="py-10"> {/* Add padding-y between components */}
          <Courses />
        </div>
        <div className="py-10"> {/* Add padding-y between components */}
          <DummySection />
        </div>
        <div className="py-10"> {/* Add padding-y between components */}
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default Layout;
