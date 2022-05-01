import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Blogger from './pages/blogger/blogger';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Route index path="/" element={<Home />} />
                        <Route
                            index
                            path="bai-viet/:title/:id"
                            element={<Blogger />}
                        />
                    </Route>
                </Routes>
                <ScrollToTop />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
