// React
import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Folio from './components/Folio.js';
import Footer from './components/Footer.js';

import { light, dark } from "./utils/Theme";

// Material UI
import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles";
import {
    Container,
    CssBaseline,
} from '@material-ui/core/';


export default class App extends Component {
    state = {
        theme: false,
        appliedTheme: light,
        error: ""
    };

    changeTheme = () => {
        const appliedTheme = createMuiTheme(this.state.theme ? light : dark)
        this.setState({
            theme: !this.state.theme,
            appliedTheme: appliedTheme
        })
    };

    componentDidMount() {

    };

    render() {
        return (
            <MuiThemeProvider theme={this.state.appliedTheme}>
                <CssBaseline />
                <Container>
                    <NavBar theme={this.state.theme} changeTheme={this.changeTheme} />
                    <About theme={this.state.theme} changeTheme={this.changeTheme} />
                    <Folio theme={this.state.theme} changeTheme={this.changeTheme} />
                    <Footer theme={this.state.theme} changeTheme={this.changeTheme} />
                </Container>
            </MuiThemeProvider>
        );
    }
}
