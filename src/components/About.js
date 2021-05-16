import React from "react";

// Material UI
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton
} from "@material-ui/core";
import {
    GitHub,
    LinkedIn
} from "@material-ui/icons";
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
      height: '100%',
      paddingTop: '100%',
    },
  }));

export default function About() {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                title="Emily Spoldi"
                subheader="Full Stack Web Developer" />
            <CardMedia
                className={classes.media}
                image={'https://avatars.githubusercontent.com/u/72423431?v=4'}
                title="Emily Spoldi" />
            <CardContent>

            </CardContent>
            <CardActions>
                <IconButton aria-label="github link"
                    href="https://github.com/espoldi">
                    <GitHub />
                </IconButton>
                <IconButton aria-label="linkedin link"
                    href="https://www.linkedin.com/in/emily-spoldi/">
                    <LinkedIn />
                </IconButton>
            </CardActions>
        </Card>
    );
}
