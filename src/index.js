import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';
import Nav from './components/Nav';
import Footer from './components/Footer';


class App extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Footer />  
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
