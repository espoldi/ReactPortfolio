// React
import React, { Component } from 'react';

// Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Project from './components/Project.js';

// Materialize
import M from 'materialize-css';

class App extends Component {
    state = {
        error: ""
    }

    componentDidMount() {
        M.AutoInit();
    };

    render() {
        return (
            <>
                <Header />
                <Project />
                <Footer />
            </>
        );
    }
}

export default App;