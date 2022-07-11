import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pagrindinis from './Pagrindinis';
import Naujienos from "./naujienos";
import Mokymai from "./mokymai";
import Leidyba from "./leidyba";
import Sveikatinimas from "./sveikatinimas";
import Galerija from './gallery/galerija';
import Singup from '../admin/Signup';
import Login from '../admin/Login';
import Ikursas from './gallery/galleries/ikursas';
import Iikursas from './gallery/galleries/iikursas';
import Admin from '../admin/admin';
import NotFound from "./NotFound";
import Nothing from "./nothing";
import Nav from '../navbar/Nav';
import { AuthContext } from '../admin/AuthContext';

function Pages() {
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  // console.log(currentUser)
  return (
    // prideti basename='ajurveda' i Router kad veiktu serveryje i kuri ikeliu
      <Router>
        <Routes>
           <Route path="/" element={<Pagrindinis />} />
           <Route path="/pagrindinis" element={<Pagrindinis />} />
           <Route path="/mokymai" element={<Mokymai />} />
           <Route path="/naujienos" element={<Naujienos />} />
           <Route path="/leidyba" element={<Leidyba />} />
           <Route path="/sveikatinimas" element={<Sveikatinimas />} />
           <Route path="/galerija" element={<Galerija />} />
           <Route path="/signup" element={<Singup />} />
           <Route path="/login" element={<Login />} />
           <Route path="/ikursas" element={<Ikursas />} />
           <Route path="/iikursas" element={<Iikursas />} />
           <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
           <Route path="*" element={<NotFound />} />
           <Route path="/nothing/:id" element={<Nothing />} />
        </Routes>
    </Router>
  );
}

export default Pages
