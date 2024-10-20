import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/game";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";
import { ModalContext } from "./contexts/ModalContext";

export const Test = ({handleModal}) => {
  return <div>Test <button onClick={() =>handleModal(<Modal handleModal={handleModal}/>)}>Show modal</button></div>;
};

export const Modal = (handleModal) => {
  return <div onClick={() => handleModal()}>Test</div>;
};

function Router() {
  const {handleModal} = useContext(ModalContext)
  return (
    <BrowserRouter>
    <Test handleModal={handleModal} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
