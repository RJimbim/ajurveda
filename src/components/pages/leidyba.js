import React, { useEffect, useState } from 'react'
import Footbar from '../footbar/Footbar'
import Nav from '../navbar/Nav'
import './leidyba.css'
import SmallTopBar from '../topbar/SmallTopBar'
import '../admin/data/allNews.css'


const Leidyba = () => {
  
return (
  <div>
    <SmallTopBar />
       <Nav />
  <div className="allNews-container">
    <ol className="leidyba">Ajurvedos akademija yra išleidusi šias knygas:
      <li className="knygos">Dr. P. Chauhan. „AJURVEDA. Mokslas apie gyvenimą ir sveikatą“</li>
      <li className="knygos">A. Tarvydaitė. „MIGLĖ, RAMAS IR EŽIUKAS AJURVEDOS ŠALYJE“</li>
      <li className="knygos">Dr. P. Chauhan. „AJURVEDA GROŽIUI. Išmintis, paslaptys, patarimai, receptai“</li>
      <li className="knygos">Dr. P. Chauhan. „AJURVEDA SVEIKATAI: sveikatinimosi receptai ir patarimai“</li>
      <li className="knygos">O. Torsunov. „CHARAKTERIS IR SĖKMĖ“</li>
      <li className="knygos">O. Gadeckij. „LIKIMO DĖSNIAI, arba trys žingsniai į laimę ir sėkmę“</li>
      <li className="knygos">Šri Narajana Pandita. „HITOPADEŠA. IŠMINTIS MAŽIEMS IR DIDELIEMS“, komentarų autorius Satjanarajana Dasa</li>
    </ol>
</div>
<Footbar />
</div>
)
}

export default Leidyba