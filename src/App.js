// React
import React, { Component } from 'react';

// Components
import NavBar from './components/NavBar.js';
import { light, dark } from "./utils/Theme";

// Material UI
import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';


export default class App extends Component {
    state = {
        theme: false,
        appliedTheme: light,
        error: ""
    }

    changeTheme = () => {
        const appliedTheme = createMuiTheme(this.state.theme ? light : dark)
        this.setState({
            theme: !this.state.theme,
              appliedTheme: appliedTheme
         })
   }

    componentDidMount() {
        
    };

    render() {
        return (
            <MuiThemeProvider theme={this.state.appliedTheme}>
                <CssBaseline />
                <NavBar theme = {this.state.theme}  changeTheme = {this.changeTheme} />
            </MuiThemeProvider>
        );
    }
}
