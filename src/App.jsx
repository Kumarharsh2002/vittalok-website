// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Testimonials from './components/Testimonials';
// import Resources from './components/Resources';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { Router } from 'react-router-dom';

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <Hero />
//       <Services />
//       <About />
//       <Testimonials />
//       <Resources />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Testimonials from './components/Testimonials';
// import Resources from './components/Resources';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         {/* Header always visible */}
//         <Header />

//         {/* Main content changes based on route */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         {/* Footer always visible */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/partner';
import RetirementCalculator from './components/RetirementCalculator';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Landing Page with all sections */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <About />
                  <Testimonials />
                  <Resources />
                  <Partners />
                  <Contact />
                </>
              }
            />
            {/* Standalone routes for each page */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/retirement" element={<RetirementCalculator/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
