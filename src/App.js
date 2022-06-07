import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";

import Modal from "./components/Modal";

import { GlobalFonts } from "./fonts/fonts";
import { GlobalStyle } from "./styles";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const modalHandler = (content) => {
    setModal(!modal);
    setModalContent(content);
  };

  //PAPERFORM
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />
      {modal && <Modal content={modalContent} modalHandler={modalHandler} />}
      <BrowserRouter>
        <Header modalHandler={modalHandler} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home modalHandler={modalHandler} />}
          />
          <Route path="/catalogue" element={<Catalog />} />
          <Route
            path="/catalogue/:id"
            element={<ProductDetails modalHandler={modalHandler} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
