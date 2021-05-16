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

export default function About() {
    return (
        <Card>
            <CardHeader
                title="Emily Spoldi"
                subheader="Full Stack Web Developer" />
            <CardMedia
                image="/images/portrait.jpg"
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
