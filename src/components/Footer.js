import React from "react";

// Material UI
import {
    Button,
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        margin: 5,
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <Paper>
            <Grid container>
                <Grid item xs="12" sm="6">
                    <form action="mailto:emily.l.spoldi@gmail.com" method="post" enctype="text/plain">
                        <Typography variant="h4">Contact Me</Typography>
                        <hr/>
                        <Grid container align="center">
                            <Grid item xs="12">
                                <TextField
                                className={classes.text}
                                id="name-entry"
                                label="Name"
                                size="small"
                                variant="outlined"
                                fullWidth />
                            </Grid>
                            <Grid item xs="12">
                                <TextField
                                className={classes.text}
                                id="email-entry"
                                label="E-Mail"
                                size="small"
                                variant="outlined"
                                fullWidth />
                            </Grid>
                            <Grid item xs="12">
                                <TextField
                                className={classes.text}
                                id="message-entry" 
                                label="Message"
                                variant="outlined"
                                rows={6}
                                multiline
                                fullWidth />
                            </Grid>
                            <Grid item xs="12">
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
}
