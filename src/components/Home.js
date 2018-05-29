import React, {Component} from 'react';
import './home.css'
import LGLogo from '../images/ARS-LOGO.svg';




let HomePage = (props) => {
    return(
        <div className="home-body container d-flex flex-column flex-sm-row justify-content-center mt-2 mt-sm-5 align-items-center">
            <div className="d-flex flex-sm-column flex-row align-items-center">
                <p className="greet-1 pr-2 pr-sm-3">Welcome</p>
                <p className="greet-2 pr-2 pr-sm-5">to</p>
                <p className="greet-3 pr-2 pr-sm-3">the</p>
                <p className="greet-4 pr-2 pl-sm-5">Portfolio</p>
                <p className="greet-5 pr-2 pl-sm-4">of</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center pl-2 ml-2 pl-sm-5 ml-sm-5 pt-4">
                <img src={props.biglogo} className="img-fluid main-logo" width="225" height='225' alt="" />
                <h1 className="main-logo display-2 text-center font-weight-light">Arthur Rankin</h1>
                <p className="job-title">Front-End Engineer</p >
            </div>
        </div>
    )
}



class Home extends Component {


    render() {
        return(
            <div className="mt-5 pt-5">
                <HomePage biglogo={LGLogo} />
            </div>
        )
    }
}

export default Home;