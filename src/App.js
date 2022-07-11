import Topbar from "./components/topbar/Topbar";
import Main from "./components/main/Main";
import mainData from "./components/main/mainData";
import Nav from "./components/navbar/Nav";
import "./style.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Pagrindinis from "./components/pages/Pagrindinis";
import Naujienos from "./components/pages/naujienos";
import Mokymai from "./components/pages/mokymai";
import Leidyba from "./components/pages/leidyba";
import Sveikatinimas from "./components/pages/sveikatinimas";
import Galerija from "./components/pages/gallery/galerija";
import Login from "./components/admin/Signup";
import NotFound from "./components/pages/NotFound";
import Nothing from "./components/pages/nothing";
import { useState } from "react";
import Footbar from "./components/footbar/Footbar";
import test from "./components/admin/admin";
import Pages from "./components/pages/Pages";

function App() {

  return (
    <div className="App">
      <Pages />
      </div>
  );
}

export default App;
