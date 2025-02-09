import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header'; 
import Testimonials from './components/Testimonials';
import ShareYourThoughts from './components/second_app/ShareYourThoughts'; 

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Define route where header should be transparent
  const transparentHeaderRoutes = ['/share-your-thoughts'];

  return (
    <div className="App">
<Header className={transparentHeaderRoutes.includes(location.pathname) ? 'transparent-header' : ''} />


      <Routes>
        <Route path="/" element={<Testimonials />} />
        <Route path="/share-your-thoughts" element={<ShareYourThoughts />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
