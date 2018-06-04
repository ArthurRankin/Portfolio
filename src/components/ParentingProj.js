import React from 'react';
import PCtoppic from '../images/PC-snapshot.png';
import PCbotpic from '../images/PC-botSnap.png';
import ScreenSketch from '../images/wireframing.JPG';
import ScreenSketch2 from '../images/wirefram2.JPG';
import ScreenSketch3 from '../images/wirefram3.JPG';
import personaPic from '../images/pcPersona.png';
import DBInteraction from '../images/DBInteractions.png';
import MainPic from '../images/MainJS.png';
import DomBuider from '../images/DOMBuilder.png';
import './parentingproj.css';




let ParentingProj = () => {
    return (
        <div className="mt-5 text-dark">
            <h3 className="mb-5 text-center display-3">Parenting Conundrum</h3>
            <img src={PCtoppic} className="img-fluid" alt="Responsive" />
            <img src={PCbotpic} className="img-fluid" alt="Responsive" />
            <small className="text-dark">(hompage image)</small>


            <h2 className="mt-5 pt-5 text-center">The Challenge</h2>
            <p className="mb-5 pb-5">Parenting is one of the hardest paths one can take. How might I offer tools and a community that can equip parents with comfort, advice and knowledge that maximizes happiness for both parent and child.</p>


            <h2 className="mt-5 pt-5 mb-4 text-center">Persona/User</h2>
            <img src={personaPic} className="mb-3 pb-3" alt=""/>

            <h2 className="mt-5 pt-5 mb-4 text-center">User Goals</h2>
            <ul>
                <li>To share an experience with other users</li>
                <li>To find advice or information on their experience</li>
                <li>To find comfort and relate with other users</li>
            </ul>
            


            <h2 className="text-center mt-5 pt-5 text-dark">Wireframing</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={ScreenSketch} alt="Card cap" />
                </div>
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={ScreenSketch2} alt="Card cap" />
                </div>
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={ScreenSketch3} alt="Card cap" />
                </div>
                <p className=" mt-3 text-dark">I believe that most great ideas still start on paper. I start my sketches there because paper wireframing gives you a clear goal that you can refere back to at anypoint, it is accessible, and it can catch errors in design fom the start.  </p>
            </div>
        </div>
    )
}

export default ParentingProj;