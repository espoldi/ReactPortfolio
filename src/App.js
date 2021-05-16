// React
import React, { Component } from 'react';

// Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Project from './components/Project.js';

// Material UI
import {
    Container
} from "@material-ui/core";

export default class App extends Component {
    state = {
        error: ""
    }

    componentDidMount() {
        
    };

    render() {
        return (
            <Container maxWidth="sm">
                <Header />
                <Project />
                <Footer />
            </Container>
        );
    }
}
