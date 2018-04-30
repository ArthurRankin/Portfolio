import React, {Component} from 'react';
import logo from '../images/parents.jpeg';
import './projects.css';
import Logo from '../images/ARS-LOGO.svg';
import wirePic from '../images/wireframing.JPG';
import personaPic from '../images/persona.png';
import { Link } from 'react-router-dom';





let ProjectsPage = (props) => {
    return(
        <div className="d-flex flex-column mb-5 mt-5">
            <h3 className="mb-5 text-center display-3">Projects</h3>
        
            <div className="card" style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                    <h3 className="card-title text-dark">Parenting Conundrum</h3>
                    <p className="card-text text-dark">Parenting Conundrum is my first large scale indivdual project. It is a Forum App developed for parents with special needs children to able to share and recieve advice from others in the same situation.</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={props.logo} width="100" height="70"  alt="" />
                        <Link to="/ParentingConundrum" className="btn repo-btn">For Case Study</Link>
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
            logo={Logo}
            wirepic={wirePic}
            personapic={personaPic} />
        )
    }
}

export default Projects;