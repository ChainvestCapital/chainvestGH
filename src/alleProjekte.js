import './Design/alleProjekte.css';
import {Route, Link} from "react-router-dom";

import Top_menue from './components/navigation/top_menue'
import F from './components/navigation/FooterComp'





import Schiffahrtimg from './assets/images/Schiffahrt.png'
import TechnologieImg from './assets/images/Technologie.png'
import FinanceImg from './assets/images/Finance.png'

import ProjektComponentBox from './components/projekte/ProjektComponentBox'
import Footer from './components/Footer';







function alleProjekte() {
  return (
    
    <div >
  

        <Top_menue />

          <div id="alle_projekte_wrapper">

            <div id="alle_projekte_filter_wrapper">

                <div id="alle_projekte_filter_wrapper_inner">

                  <div id="alle_projekte_wrapper_heading">
                    <h3 id="alle_projekte_wrapper_h3">
                      Finanzierungsvolumen
                    </h3>
                    <div id="alle_projekte_wrapper_close">
                      x
                    </div>
                  </div>
                  
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      10.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">

                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      50.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      100.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      200.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      1.000.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>

                </div>

                <div id="alle_projekte_filter_wrapper_inner">

                  <div id="alle_projekte_wrapper_heading">
                    <h3 id="alle_projekte_wrapper_h3">
                      Erwartete Rendite
                    </h3>
                    <div id="alle_projekte_wrapper_close">
                      x
                    </div>
                  </div>

                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      10.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">

                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      50.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      100.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      200.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      1.000.000 €
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>

                </div>

                <div id="alle_projekte_filter_wrapper_inner">

                  <div id="alle_projekte_wrapper_heading">
                    <h3 id="alle_projekte_wrapper_h3">
                      Typ
                    </h3>
                    <div id="alle_projekte_wrapper_close">
                      x
                    </div>
                  </div>

                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                      Eigenkapital
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">

                    </div>
                  </div>
                  <div id="alle_projekte_filter_eintrag_kreuz">
                    <h3 id="alle_projekte_filter_eintrag_kreuz_h3">
                     Fremdkapital
                    </h3>

                    <div id="alle_projekte_filter_eintrag_kreuz_kreuz">
                      
                    </div>
                  </div>
      

                </div>


            </div>


            <div id="alle_projekte_projekte_wrapper">

                <div id="alle_projekte_projekte_wrapper_Kategorien">

                    <h2 id="alle_projekte_projekte_wrapper_projekte_kategorien">
                      Kategorien wählen:
                    </h2>

                    <div id="alle_projekte_kategorien_menue">
                    
                      <div id="alle_projekte_kategorie_kachel">
                         <img src={Schiffahrtimg} id="alle_projekte_kategorie_kachel_img" />
                      </div>

                        <div id="TrennStrich">                    
                        </div>

                      <div id="alle_projekte_kategorie_kachel">
                         <img src={TechnologieImg} id="alle_projekte_kategorie_kachel_img" />
                      </div>

                      <div id="TrennStrich">                    
                      </div>

                      <div id="alle_projekte_kategorie_kachel">
                         <img src={FinanceImg} id="alle_projekte_kategorie_kachel_img" />
                      </div>

                    </div>



                </div>

                <div id="alle_projekte_projekte_wrapper_projekte">

                    
                    <ProjektComponentBox /> 
              


                </div>

            </div>

          </div>







        <Footer/>





    </div>

  );
}

export default alleProjekte;
