import './Design/MusterProject.css'

import Top_menue from '../components/navigation/top_menue'

import Project_left_menue_auswahl from './components/project_left_menue_auswahl'
import Project_left_menue_button from './components/project_left_menue_button'

import Home from '../assets/images/Home.png'
import Unternehmen from '../assets/images/Unternehmen.png'
import TokenSale from '../assets/images/TokenSale.png'
import Token from '../assets/images/Token.png'
import Risiko from '../assets/images/Risiko.png'
import Dokumente from '../assets/images/Dokumente.png'

import To_Project from './components/To_Project'

import BitbondLogo from '../assets/images/BitbondLogo.png'
import VogemannLogo from '../assets/images/VogemannLogo.png'
import TomorrowLogo from '../assets/images/TomorrowLogo.png'

import BitbondImg from '../assets/images/BitbondImg.png'
import VogemannImg from '../assets/images/VogemannImg.png'
import TomorrowImg from '../assets/images/TomorrowImg.png'



import FB from '../assets/images/facebook.png'
import LI from '../assets/images/LinkedIn.png'
import YT from '../assets/images/YouTube.png'

import arrow from '../assets/images/arrow.png'

import Schiffahrtimg from '../assets/images/Schiffahrt.png'
import TechnologieImg from '../assets/images/Technologie.png'
import FinanceImg from '../assets/images/Finance.png'

import FrameÜberblick from './Frames/Überblick'
import FrameUnternehmen from './Frames/Unternehmen'
import FrameTokenSale from './Frames/TokenSale'
import FrameDokumente from './Frames/Dokumente'
import FrameToken from './Frames/Token'
import FrameRisiko from './Frames/Risiko'

import React, { useState } from 'react';
import { useEffect } from 'react';

import Footer from '../components/Footer'




function MusterProject() {


    const [überblickshown, setüberblickshown] = useState(true);
    const [Unternehmenshow, setUnternehmenshow] = useState(false);
    const [TokenSaleshow, setTokenSaleshow] = useState(false);
    const [Dokumenteshow, setDokumenteshow] = useState(false);
    const [Tokenshow, setTokenshow] = useState(false);
    const [Risikoshow, setRisikoshow] = useState(false);
   
    const [auswahlÜberblickbg,setauswahlÜberblickbg] = useState ("CDF0EA")
    const [auswahlUnternehmenbg,setauswahlUnternehmenbg] = useState ("white")
    const [auswahlTokenSalebg,setauswahlTokenSalebg] = useState ("white")
    const [auswahlTokenbg,setauswahlTokenbg] = useState ("white")
    const [auswahlDokumentebg,setauswahlDokumentebg] = useState ("white")
     const [auswahlRisikobg,setauswahlRisikobg] = useState ("white")



    function showÜberblickFrame () {
     
        setüberblickshown (true);
        setUnternehmenshow(false);
        setTokenSaleshow(false);
        setDokumenteshow(false);
        setTokenshow(false);
        setRisikoshow(false);

        setauswahlÜberblickbg("#CDF0EA");
         setauswahlUnternehmenbg("white");
        setauswahlTokenSalebg("white");
        setauswahlTokenbg("white");
        setauswahlDokumentebg("white");
        setauswahlRisikobg("white");

    }
    function showUnternehmenFrame () {
     
        setüberblickshown (false);
        setUnternehmenshow(true);
        setTokenSaleshow(false);
        setDokumenteshow(false);
        setTokenshow(false);
        setRisikoshow(false);

        setauswahlÜberblickbg("white");
        setauswahlUnternehmenbg("#CDF0EA");
        setauswahlTokenSalebg("white");
        setauswahlTokenbg("white");
        setauswahlDokumentebg("white");
        setauswahlRisikobg("white");

    }
    function showTokenSaleFrame () {
     
        setüberblickshown (false);
        setUnternehmenshow(false);
        setTokenSaleshow(true);
        setDokumenteshow(false);
        setTokenshow(false);
        setRisikoshow(false);
        
        setauswahlÜberblickbg("white");
        setauswahlUnternehmenbg("white");
        setauswahlTokenSalebg("#CDF0EA");
        setauswahlTokenbg("white");
        setauswahlDokumentebg("white");
        setauswahlRisikobg("white");

    }
    function showDokumenteFrame () {
     
        setüberblickshown (false);
        setUnternehmenshow(false);
        setTokenSaleshow(false);
        setDokumenteshow(Dokumente);
        setTokenshow(false);
        setRisikoshow(false);

        setauswahlÜberblickbg("white");
        setauswahlUnternehmenbg("white");
        setauswahlTokenSalebg("white");
        setauswahlTokenbg("white");
        setauswahlDokumentebg("#CDF0EA");
        setauswahlRisikobg("white");

    }

    function showTokenFrame () {
     
        setüberblickshown (false);
        setUnternehmenshow(false);
        setTokenSaleshow(false);
        setDokumenteshow(false);
        setTokenshow(true);
        setRisikoshow(false);

        setauswahlÜberblickbg("white");
        setauswahlUnternehmenbg("white");
        setauswahlTokenSalebg("white");
        setauswahlTokenbg("#CDF0EA");
        setauswahlDokumentebg("white");
        setauswahlRisikobg("white");

    }
    function showRisikoFrame () {
     
        setüberblickshown (false);
        setUnternehmenshow(false);
        setTokenSaleshow(false);
        setDokumenteshow(false);
        setTokenshow(false);
        setRisikoshow(true);

        setauswahlÜberblickbg("white");
        setauswahlUnternehmenbg("white");
        setauswahlTokenSalebg("white");
        setauswahlTokenbg("white");
        setauswahlDokumentebg("white");
        setauswahlRisikobg("#CDF0EA");

    }



const bgcolor= "#CDF0EA";









    return (
      
      <div >
        <Top_menue />




        <div id="Full_Desktop_Wrapper">

            <div id="project_left_menue">
                <div id="project_left_menue_auswahl_wrapper">
                    <button onClick={()=>showÜberblickFrame()}>
                      <Project_left_menue_auswahl title="Überblick" img={Home}  bgColor={auswahlÜberblickbg}/>
                    </button>
                    <button onClick={()=>showUnternehmenFrame()}>
                      <Project_left_menue_auswahl title="Unternehmen" img={Unternehmen} bgColor={auswahlUnternehmenbg}/>
                    </button>
                    <button onClick={()=>showTokenSaleFrame()}>
                       <Project_left_menue_auswahl title="TokenSale" img={TokenSale} bgColor={auswahlTokenSalebg}/> 
                    </button>
                    <button onClick={()=>showDokumenteFrame()}>
                        <Project_left_menue_auswahl title="Dokumente" img={Dokumente} bgColor={auswahlDokumentebg}/>
                    </button>
                    <button onClick={()=>showTokenFrame()}>
                        <Project_left_menue_auswahl title="Token" img={Token} bgColor={auswahlTokenbg}/>
                    </button>
                    <button onClick={()=>showRisikoFrame()}>
                        <Project_left_menue_auswahl title="Risiko" img={Risiko} bgColor={auswahlRisikobg}/>
                    </button>
                                  

                </div>

                <div id="project_left_menue_button_wrapper">
                    <div id="project_left_menue_button">

                        <Project_left_menue_button title="Diesen Token vergleichen"/>
                        <Project_left_menue_button title="Was sind Token Sales?"/>

                    </div>
                </div>

            </div>


            <div id="project_mid_and_right">

                    <div id="project_mid_changing">


                            <FrameÜberblick trigger={überblickshown} setTrigger={setüberblickshown}/>
                            <FrameUnternehmen trigger ={Unternehmenshow} setTrigger ={setUnternehmenshow} />
                            <FrameTokenSale trigger={TokenSaleshow} setTrigger={setTokenSaleshow}/>
                            <FrameDokumente trigger ={Dokumenteshow} setTrigger ={setDokumenteshow} />
                            <FrameToken trigger={Tokenshow} setTrigger={setTokenshow}/>
                            <FrameRisiko trigger ={Risikoshow} setTrigger ={setRisikoshow} />


                    </div>

                    <div id="project_right_menue">
                        <div id="project_right_project">
                                <h4 id="zum_project_h4">
                                Zum Projekt
                                </h4>

                                <To_Project logo={BitbondLogo} rightimg={arrow} bgimg={BitbondImg}/>

                                <div id="Social_Media_Wrapper">
                                    <img src={FB} id="Social_Media_Img"/>
                                    <img src={LI} id="Social_Media_Img"/>
                                    <img src={YT} id="Social_Media_Img"/>

                                </div>

                        </div> 

                        <div id="project_right_ähnlich_wrapper">
                                <h4 id="Ähnliche_Projekte_h4">
                                    Ähnliche Projekte
                                </h4>
                                <div id="ähnliche_projekte_projekte_wrapper">
                                    <To_Project logo={VogemannLogo} rightimg={Schiffahrtimg} bgimg={VogemannImg}/>

                                    <To_Project logo={TomorrowLogo} rightimg={FinanceImg} bgimg={TomorrowImg}/>

                                    <To_Project logo={BitbondLogo} rightimg={TechnologieImg} bgimg={BitbondImg}/>

                                </div>
                                
                        </div>
                    </div>



            </div>

            
            



            



        </div>






        <Footer/>
            
      </div>
  
    );
  }
  
  export default MusterProject;
  