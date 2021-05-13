// React
import React, { Component } from 'react';

// Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Project from './components/Project.js';

// Material UI


export default class App extends Component {
    state = {
        error: ""
    }

    componentDidMount() {
        
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
