import React from 'react'
import Topbar from '../topbar/Topbar';
import Main from "../main/Main";
import mainData from "../main/mainData";
import Footbar from "../footbar/Footbar";
import PagrindinisNav from '../navbar/pagrindinisNav';
import NavDropdown from '../navbar/NavDropdown';
import '../main/main.css';


// const Pagrindinis = () => {

//   const [login, setLogin] = useState(false);
//   const mainview = mainData.map(item => {
//     return (
//       <Main
//       key={item.id}
//       {...item}
//        />
//     )
//     })
//   return (
//     <Router>
//     <div className="App">
//       <Topbar />
//       <section className="main-container">
//         {mainview}
//       </section>
//       <Nav />
//       </div>
//       <Routes>
//       <Route path="/" element={<Pagrindinis />} />
//       <Route path="/naujienos" element={<Naujienos />} />
//       <Route path="/mokymai" element={<Mokymai />} />
//       <Route path="/leidyba" element={<Leidyba />} />
//       <Route path="/Sveikatinimas" element={<Sveikatinimas />} />
//       <Route path="/galerija" element={<Galerija />} />
//       <Route 
//         path="/login" 
//         element={ login ? <Login /> : <Navigate to="/" />} 
//        />
//       <Route path="/nothing/:id" element={<Nothing />} />
//       {/* <Route path="*" element={<NotFound />} /> */}
      
//       </Routes>
//     <button onClick={() => setLogin(!login)}>{login? "log out" : "login"}</button>
//     <Footbar />
//     </Router>
//   );
// }

function Pagrindinis() {

  const mainview = mainData.map(item => {
        return (
          <Main
          key={item.id}
          {...item}
           />
        )
        })
  return (
    <div className='page-wrap'>
      <Topbar />
      <section className="main-container">
        {mainview}
       </section>
       <PagrindinisNav />
       {/* <NavDropdown /> */}
       <Footbar />
       {/* <Navbar /> */}
    </div>
    
  )
}

export default Pagrindinis

