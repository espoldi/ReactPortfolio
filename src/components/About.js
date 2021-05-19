import React from "react";

// Components
import buttons from "../images/icons/buttons.png";
import controller from "../images/icons/controller.png";
import dice from "../images/icons/dice.png";
import groceries from "../images/icons/groceries.png";
import sale from "../images/icons/sale.png";
import bootstrap from "../images/technology/bootstrap.png";
import css from "../images/technology/css3.png";
import express from "../images/technology/express.png";
import github from "../images/technology/github.png";
import heroku from "../images/technology/heroku.png";
import javascript from "../images/technology/javascript.png";
import materialize from "../images/technology/materialize.png";
import materialui from "../images/technology/materialui.png";
import mongodb from "../images/technology/mongodb.png";
import mysql from "../images/technology/mysql.png";
import nodejs from "../images/technology/nodejs.png";
import react from "../images/technology/react.png";
import redux from "../images/technology/Redux.png";
import vscode from "../images/technology/vscode.png";

// Material UI
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    IconButton,
    Paper,
    Typography
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
        height: 300,
        width: 300,
        borderRadius: 10,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    paper: {
        margin: 15,
    },
    tech: {
        height: 100,
        width: 100,
    }
}));

export default function About() {
    const classes = useStyles();

    const chipData = [
        { key: 0, icon: `${buttons}`, label: 'DIY Crafts' },
        { key: 1, icon: `${controller}`, label: 'Gaming' },
        { key: 2, icon: `${sale}`, label: 'Shopping' },
        { key: 3, icon: `${groceries}`, label: 'Cooking' },
        { key: 4, icon: `${dice}`, label: 'Dungeons and Dragons' }
    ];

    const tech = [
        { key: 0, img: `${bootstrap}`, title: 'Bootstrap' },
        { key: 1, img: `${css}`, title: 'CSS3' },
        { key: 2, img: `${express}`, title: 'Express' },
        { key: 3, img: `${github}`, title: 'GitHub' },
        { key: 4, img: `${heroku}`, title: 'heroku' },
        { key: 5, img: `${javascript}`, title: 'JavaScript' },
        { key: 6, img: `${materialize}`, title: 'Materialize' },
        { key: 7, img: `${materialui}`, title: 'Material UI' },
        { key: 8, img: `${mongodb}`, title: 'MongoDB' },
        { key: 9, img: `${mysql}`, title: 'MySQL' },
        { key: 10, img: `${nodejs}`, title: 'NodeJS' },
        { key: 11, img: `${react}`, title: 'React' },
        { key: 12, img: `${redux}`, title: 'Redux' },
        { key: 13, img: `${vscode}`, title: 'Visual Studio Code' },
    ];

    return (
        <>
            <div className={classes.drawerHeader} id="about"></div>
            <Grid container>
                <Grid item xs="12" md="4" align="center">
                    <Card>
                        <CardHeader
                            title="Emily Spoldi"
                            subheader="Full Stack Web Developer" />
                        <CardMedia
                            className={classes.media}
                            image={'https://avatars.githubusercontent.com/u/72423431?v=4'}
                            title="Emily Spoldi" />
                        <CardActions>
                            <Grid container></Grid>
                            <IconButton aria-label="github link"
                                href="https://github.com/espoldi">
                                <GitHub />
                            </IconButton>
                            <IconButton aria-label="linkedin link"
                                href="https://www.linkedin.com/in/emily-spoldi/">
                                <LinkedIn />
                            </IconButton>
                            <Grid container></Grid>
                        </CardActions>
                        <CardContent>
                            <Grid container>
                                <Grid item xs="12">
                                    <Typography variant="h6">Interests</Typography>
                                    <hr />
                                </Grid>
                                {chipData.map((data) => {
                                    return (
                                        <Grid item key={data.key} >
                                            <Chip avatar={<Avatar src={data.icon} />} label={data.label} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs="12" md="7">
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Bio</Typography>
                        <hr/>
                        <Typography variant="h6" className={classes.paper}>
                            My name is Emily Spoldi. I am 28 years old and I am a Front end web developer leveraging background in education to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the University of Connecticut Full Stack Flex Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs="12">
                    <Paper className={classes.paper}>
                        <Typography variant="h4">Technologies</Typography>
                        <hr />
                        <Grid container>
                            {tech.map((tile) => {
                                return (
                                    <Grid item key={tile.key}>
                                        <Card>
                                            <CardContent>
                                                <img
                                                    src={tile.img}
                                                    alt={tile.title}
                                                    className={classes.tech} />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
