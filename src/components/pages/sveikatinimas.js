import React, { useEffect, useState } from 'react'
import Footbar from '../footbar/Footbar'
import Nav from '../navbar/Nav'
import SmallTopBar from '../topbar/SmallTopBar'
import Post from './Post'
import './sveik.css'
import sveikatinimasData from './sveikatinimasData'
import { BrowserView, MobileView, isBrowser, isMobile, isIOS } from 'react-device-detect';

export default function Sveikatinimas() {
    function call() {
      window.open('tel:+37060057457', '_self');
    }
    function email() {
      window.open('mailto:infoaa@ajurvedosakademija.lt', '_self');
    }
    function navig() {
      window.open('https://www.google.com/maps/dir/?api=1&destination=M.+K.+Čiurlionio+g.+21,+Vilnius+03101&dir_action=navigate');
    }
   function naviga() {
      window.open('https://www.google.com/maps/dir/?api=1&destination=T.+Ševčenkos+g.+31,+Vilnius+03113&dir_action=navigate');
    };


 return (
    <div>
      <SmallTopBar />
      <Nav />
     
      {/* {mainview} */}
      <div className="allNews-container">
      <div className="allNews-card">
        <h3 className='allNews-title'>IŠVAŽIUOJAMIEJI SEMINARAI</h3>
      <div className='allNews-desc'>
        <ul>DĖMESIO!</ul>
        <ul>Medikų organizacijas, pageidaujančias plačiau susipažinti su ajurvedos esme bei planuojamais Ajurvedos kursais medikams, prašome kreiptis į mus dėl nemokamos pristatomosios paskaitos savo organizacijoje.</ul>
        <ul>Baigę Ajurvedos Akademiją medikai supažindins su Ajurvedos pagrindais Jūsų sričiai aktualiu aspektu bei papasakos apie kursus.</ul>
        <ul>Užsakymus priimame el. paštu:</ul>
        <ul onClick={email} className='call-me'>infoaa@ajurvedosakademija.lt</ul>
        <ul onClick={call}>Tel. pasiteiravimui: <span className='call-me'>8-600 57457</span></ul>
</div>
</div>
      <div className="allNews-card">
        <h3 className='allNews-title'>KURSAI</h3>
      <div className='allNews-desc'>
      Ajurvedos Akademija ruošiasi pradėti naują. AJURVEDOS PROGRAMĄ MEDIKAMS. Tai galimybė tapti neprilygstamais savo srities specialistais.
<ul>Programa susidės iš trijų kursų:</ul>
<ul>Įžanginis kursas - AJURVEDOS PAGRINDAI</ul>
<ul>II kursas - AJURVEDINĖ GYVENSENA</ul>
<ul>III kursas - AJURVEDINĖ DIAGNOSTIKA IR TERAPIJA</ul>
<li>Sveikatos profilaktikai</li>
<li>Ligų prevencijai</li>
<li>Psichoemocinės būklės gerinimui.</li>
Mokymai vyks:
<span onClick={naviga} className='call-me'>Vilniuje, Ajurvedos Akademijoje, adresu: Ševčenkos 31
Vytauto Didžiojo Universiteto patalpose (Buvusiojo LEU II-ieji rūmai). </span>

Lektoriai:

Ajurvedos daktarai - profesionalai iš Indijos bei Lietuvos gydytojai, baigusieji Ajurvedos Akademiją ir atlikusieji praktiką Indijoje.

Baigusiems bus išduodami Ajurvedos Akademijos ir Indijos Ajurvedos instituto sertifikatai, (vyksta diskusija dėl programos pripažinimo SA ministerijoje ir jos kvalifikacijos pažymėjimų išdavimo).

I-ojo, II-ojo ir III-iojo kursų mokymai bus praktiški ir naudingi visiems medikams.

Juose bus dėstomi Ajurvedos pagrindai, nagrinėjamos konkrečios ligos ir jų gydymas, pateikiamos ajurvedinės žinios konkrečių sričių medikams ir specialistams.

<ul>Temas ir programas pateiksime užsiregistravusiems.</ul>
<ul>Išankstinė registracija jau vyksta:</ul>
<ul><span onClick={email} className='call-me'>infoaa@ajurvedosakademija.lt</span> , <span onClick={call} className='call-me'>8-600 57457</span></ul>
<ul>MALONIAI KVIEČIAME!</ul>

</div>
      </div>
      <div className="allNews-card">
        <h3 className='allNews-title'>KONFERENCIJOS</h3>
      <div className='allNews-desc'>
        <ul>2019 m. kovo 1 d. organizuota mokslinė - praktinė konferencija „Alternatyviosios ir papildomosios sveikatos priežiūros vieta Lietuvos asmens sveikatos priežiūros sistemoje“, skirta Vilniaus universiteto 440-osioms metinėms.</ul>
        <ul>Renginio vieta:2019 m. kovo 1 d., 9:00-17:30, <span onClick={navig} className='call-me'>Vilniaus universiteto Medicinos fakulteto, M. K. Čiurlionio g. 21, Vilnius</span>, Didžioji auditorija.</ul>
        <ul>Konferencija skirta:visų specializacijų gydytojams, slaugytojams, reabilitacijos sveikatos specialistams. Dalyviams išduoti 4 val. trukmės mokslinės praktinės programos pažymėjimai.</ul>
     
      </div>
      </div>
      </div>
      <Footbar />
      </div>
  )
    
}
