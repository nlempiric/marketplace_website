import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Homepage from './pages/Homepage';
import './App.css'
import Aboutpage from './pages/Aboutpage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path={`/blog/:id`} element={<BlogDetailPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
