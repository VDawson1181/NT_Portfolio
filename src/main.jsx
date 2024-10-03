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
import Contact from './routes/Contact.jsx';

const homepageData={
  mainTitle: "Nicole Tringali",
  subTitle: "Content Strategist + Copywriter",
  portraitCopy: "I am both a Direct Marketing Association Certified professional AND an Associate Creative Director with over 15 years of experience as a content strategist and copywriter. I am passionate about my work and I get real results. Want to see? Reach out!",
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
        <Route path='/NT_Portfolio/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
