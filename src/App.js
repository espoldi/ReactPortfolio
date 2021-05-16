// React
import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

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
            <Container>
                <NavBar />
                <Footer />
            </Container>
        );
    }
}
