import React from 'react';
import PCtoppic from '../images/PC-snapshot.png';
import PCbotpic from '../images/PC-botSnap.png';
import ScreenSketch from '../images/wireframing.JPG';
import ScreenSketch2 from '../images/wirefram2.JPG';
import ScreenSketch3 from '../images/wirefram3.JPG';
import './parentingproj.css';




let ParentingProj = () => {
    return (
        <div className="mt-5">
            <h3 className="mb-5 text-center display-3">Parenting Conundrum</h3>
            <img src={PCtoppic} className="img-fluid" alt="Responsive" />
            <img src={PCbotpic} className="img-fluid" alt="Responsive" />
            <small className="text-light">(hompage image)</small>
            <h2 className="text-light text-center mt-5">Screen Sketches</h2>

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
                <p className="text-light mt-3">I am not the best at drawing but I do not know what I would do if I didnt have my first screen sketches. They give me wonderful visual guidance. They are also a wonderful tool for following the flow of the user and coding the functionality to match.</p>
            </div>
        </div>
    )
}

export default ParentingProj;