import React, {Component} from 'react';
import PCLogo from '../images/parents.jpeg';
import './projects.css';
import logo from '../images/ARS-LOGO.svg';
import DoLogo from '../images/doLogo.png';
import wirePic from '../images/wireframing.JPG';
import personaPic from '../images/persona.png';
import { Link } from 'react-router-dom';





let ProjectsPage = (props) => {
    return(
        <div >
            <h3 className="mb-5 text-center display-3">Projects</h3>
            <div className="d-flex flex-row mb-5 mt-5">
                <div className="card m-4" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={PCLogo} alt="Card cap" />
                    <div className="card-body">
                        <h3 className="card-title text-dark">Parenting Conundrum</h3>
                        <p className="card-text text-dark">Parenting Conundrum is my first large scale indivdual project. It is a Forum App developed for parents with special needs children to able to share and recieve advice from others in the same situation.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={props.logo} width="100" height="70"  alt="" />
                            <div className="d-flex flex-column">
                                <Link to="/ParentingConundrum" className="btn repo-btn p-2 m-2">For Case Study</Link>
                                <a href="https://arthurrankin.github.io/CapStone-ParConun/#" className=" btn repo-btn p-2 m-2">For Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-4" style={{width: 20 + 'rem'}}>
                    <img className="card-img-top" src={DoLogo} alt="Card cap" />
                    <div className="card-body">
                        <h3 className="card-title text-dark">do.</h3>
                        <p className="card-text text-dark">Day Out, or do., is a Tinder style app that allows users to "match" with new points of interest in the Nashville area. Using data from data.nashville.gov, do. pulls from Nashville's Public Art, Historical Markers, and Parks data.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={props.logo} width="100" height="70"  alt="" />
                            <Link to="/do" className="btn repo-btn">For Case Study</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



class Projects extends Component {
    render() {
        return(
            <ProjectsPage 
            logo={logo}
            wirepic={wirePic}
            personapic={personaPic} />
        )
    }
}

export default Projects;