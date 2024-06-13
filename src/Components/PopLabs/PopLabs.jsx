import React from "react";
import "./PopLabs.css";

const PopLabs = () => {
  return (
    <div>
      <div className="pop_heading">
        <h2>Popular Lab in your city</h2>
      </div>
      <div className="pop_icons_main">
        <div className="first_logo_row">
          <div className="first">
            <img src="./Care.png" alt="care logp" className="care_logo"/>
            <img src="./Dane.png" alt="dane logo" className="dane_logo"/>
            <img src="./Garuda.png" alt="garuda logo" className="garuda_logo"/>
            <img src="./CPC logo.png" alt="cpc logo" className="cpc_logo"/>
            <img src="./Immucare.png" alt="immucare logo" className="immucare_logo"/>
          </div>
          <div className="second">
            <img src="./Aza.png" alt="aza log" className="aza_logo"/>
            <img src="./Jeeva.png" alt=" jeva logo" className="jeeva_logo"/>
            <img src="./DDRC logo.png" alt="drc logo" className="ddrc_logo"/>
            <img src="./Hygea.png.png" alt="Hygea logo" className="hygea_logo"/>
            <img src="./aswini logo.png" alt="aswini logo" className="aswini_logo"/>
          </div>
        </div>

        <div className="second_row">
          <div className="third">
            <img src="./Metropolis.png" alt="metro polis logo" className="metro_logo"/>
            <img src="./Polyclinic.png" alt="polyclinic logo" className="poly_logo"/>
            <img src="./R-cell.png" alt="r-cell logo" className="rcell_logo"/>
            <img src="./Neuberg logo.png" alt="neuberge logo" className="neuberg_logo"/>
            <img src="./Lashmi hospital.png" alt="lashmi logo" className="lakshmi_loho"/>
          </div>
          <div className="fourth">
            <img src="./Vithayathil.png" alt="vithayathil logo" className="vithayathi_logo"/>
            <img src="./Microbiology Centre.png" alt="microbiology logo" className="microbio_logo"/>
            <img src="./Microhealth.png" alt="micro health logo" className="microhlth_logo"/>
            <img src="./Thyocare.png" alt="thyocare logo" className="tyo_logo"/>
          </div>
        </div>

        <div className="third_row">
          <div className="fifth">
            <img src="./Fathima Hospital.png" alt="fathima logo" className="fathima_logo"/>
            <img src="./Daya.png" alt="daya logo" className="daya_logo"/>
            <img src="./Calicut Hospital.png" alt="calicutr logo" className="calicut_logo"/>
            <img src="./lalpath.png" alt="lalpath logo" className="lalpath_logo"/>
          </div>
          <div className="sixth">
            <img src="./Starcare logo.png" alt="star care logo" className="starcare_logo"/>
            <img src="./MIMS.png" alt="mims logo" className="mims_logo"/>
            <img src="./Aayush logo.png" alt="ayush logo" className="aayush_logo"/>
            <img src="./BMH.png" alt="bmh logo" className="bmh_logo"/>
            <img src="./Iqraa.png" alt="iqraa logo" className="iqra_logo"/>
            <img src="./Vivid.png" alt="vivid logo" className="vivid_logo"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopLabs;
