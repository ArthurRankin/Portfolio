import React, {Component} from 'react';
import Logo from '../images/ARS-LOGO.svg';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Home.js';
import Blog from './Blogs.js';
import Projects from './Projects.js';
import ParentProj from './ParentingProj.js';
import './nav.css';
import Do from './Do';
import ViewPoint from './ViewPoint';



let NavBar = (props) => {
    return (
        <nav className=" container mt-2 pb-2">
            <ul className="main-nav nav justify-content-between flex-column flex-sm-row text-center p-3 align-items-center">
                <li className=" mr-auto-sm mr-0">
                    <img src={props.Logo} width="100" height="70"  alt="" />
                </li>
                <li className="nav-item  mr-2-sm">
                    <NavLink id="link" className="nav-link" to="/Portfolio/home">Home</NavLink>
                </li>
                <li className="nav-item  mr-2">
                <NavLink id="link" className="nav-link" to="/Portfolio/projects">Projects</NavLink>
                </li>
                <li className="nav-item  mr-2">
                    <NavLink id="link" className="nav-link" to="/Portfolio/blog">Blog</NavLink>
                </li>
            </ul>


            <Route exact path='/Portfolio/home' component={Home} />
            <Route path='/Portfolio/blog' component={Blog} />
            <Route path='/Portfolio/projects' component={Projects} />
            <Route path='/Portfolio/ParentingConundrum' component={ParentProj} />
            <Route path='/Portfolio/do' component={Do} />
            <Route path="/Portfolio/ViewPoint" component={ViewPoint} />
        </nav>
    )
}


class Nav extends Component {
    render() {
        return(
            <BrowserRouter>
                <NavBar Logo={Logo} />
            </BrowserRouter>
        )
    }
}

export default Nav;