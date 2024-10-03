import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Portfolio from './routes/Portfolio.jsx';
import Blogs from './routes/Blogs.jsx';
import EMails from './routes/Emails.jsx';
import LottoCards from './routes/LottoCards.jsx';
import Contact from './routes/Contact.jsx';

const homepageData={
  mainTitle: "Nicole Tringali",
  subTitle: "Content Strategist + Copywriter"
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/NT_Portfolio/' element={<Home homepageData={homepageData}/>}></Route>
        <Route path='/NT_Portfolio/about' element={<About/>}></Route>
        <Route path='/NT_Portfolio/portfolio' element={<Portfolio/>}></Route>
        <Route path='/NT_Portfolio/blogs' element={<Blogs/>}></Route>
        <Route path='/NT_Portfolio/emails' element={<EMails/>}></Route>
        <Route path='/NT_Portfolio/lotto' element={<LottoCards/>}></Route>
        <Route path='/NT_Portfolio/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
