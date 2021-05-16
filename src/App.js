// React
import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar.js';

export default class App extends Component {
    state = {
        error: ""
    }

    componentDidMount() {
        
    };

    render() {
        return (
            <>
                <NavBar />
            </>
        );
    }
}
