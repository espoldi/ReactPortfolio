import React from "react";

// Components
import About from "./About.js";
import Folio from "./Folio.js";
import Footer from "./Footer.js";

// Material UI
import {
    Grid
} from "@material-ui/core";
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

export default function Body() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.drawerHeader} />
            <Grid container>
                <Grid item xs="12" sm="4">
                    <About />
                </Grid>

                <Grid item xs="12" sm="8">
                    <Folio />
                </Grid>

                <Grid item xs="12">
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
}
