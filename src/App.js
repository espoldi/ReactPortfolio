// React
import React, { Component } from 'react';

// Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';

// Materialize
import M from 'materialize-css';

class App extends Component {
    state = {}

    componentDidMount() {
        M.AutoInit();
    };

    render() {
        return (
            <>
            <Header />
            <Footer />
            </>
        );
    }
}

export default App;