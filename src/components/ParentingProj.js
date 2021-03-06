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
import WBData1 from '../images/WBDataStruc.JPG';
import WBData2 from '../images/WBDataStruc2.JPG';
import DataStruc from '../images/PaperDataStructure.JPG';
import './parentingproj.css';




let ParentingProj = () => {
    return (
        <div className="mt-5 text-dark">
            <h3 className="mb-5 text-center display-3">Parenting Conundrum</h3>
            <img src={PCtoppic} className="img-fluid" alt="Responsive" />
            <img src={PCbotpic} className="img-fluid" alt="Responsive" />
            <small className="text-dark">(hompage image)</small>


            <h2 className="mt-5 pt-5 title ">The Challenge</h2>
            <p className="mb-5 pb-5">Parenting is one of the hardest paths one can take. How might I offer tools and a community that can equip parents with comfort, advice and knowledge that maximizes happiness for both parent and child.</p>


            <h2 className="mt-5 pt-5 mb-4  title">Persona/User</h2>
            <img src={personaPic} className="mb-3 pb-3" alt=""/>

            <h2 className="mt-5 pt-5 mb-4 title ">User Goals</h2>
            <ul>
                <li>To share an experience with other users</li>
                <li>To find advice or information on their experience</li>
                <li>To find comfort and relate with other users</li>
            </ul>
            


            <h2 className=" mt-5 pt-5 title ">Wireframing</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5 mb-5 pb-5">
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={ScreenSketch} alt="Card cap" />
                </div>
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={ScreenSketch2} alt="Card cap" />
                </div>
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={ScreenSketch3} alt="Card cap" />
                </div>
                <p className=" mt-3 text-dark">I believe that most great ideas still start on paper. I start my sketches there because paper wireframing gives you a clear goal that you can refere back to at anypoint, it is accessible, and it can catch errors in design fom the start.</p>
            </div>



            <h2 className="d-flex flex-row flex-wrap title  mt-5">Firebase Data Structure</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={WBData1} alt="Card cap" />
                </div>
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={WBData2} alt="Card cap" />
                </div>
                <div className="card m-2 border-0" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={DataStruc} alt="Card cap" />
                </div>
            </div>   
            
            <h2 className="d-flex flex-row flex-wrap title  mt-5 pt-5">Reflection</h2>
            <p>This project was an invaluable learning experience though I would do a number of things differently the next time around.</p>
            <ol>
                <li>Develope in a JS framework such as React.</li>
                    <ul>
                        <li>Easier for paths and DOM rendering vs reloading the entire page each time there is an update.</li>
                    </ul>
                <li>Create a different UI</li>
                    <ul>
                        <li>A number of my users were busy during the bulk of the testing process. Once I was able to get their input, the project deadline had passed. Once they tested the MVP version, I found that the UI was a failed attempt to make things simple for non tech-savvy users. Mostly because of the home page and usability issues of where to go next. In simple, the users had too many why’s and where’s.</li>
                    </ul>
            </ol>

    

        </div>
    )
}

export default ParentingProj;