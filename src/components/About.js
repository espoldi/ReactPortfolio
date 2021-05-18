import React, { useState } from "react";

// Components
import buttons from "../images/icons/buttons.png";
import controller from "../images/icons/controller.png";
import dice from "../images/icons/dice.png";
import groceries from "../images/icons/groceries.png";
import sale from "../images/icons/sale.png";

// Material UI
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    IconButton,
    Typography
} from "@material-ui/core";
import {
    ExpandMore,
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
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function About() {
    const classes = useStyles();

    const chipData = [
        { key: 0, icon: `${buttons}`, label: 'DIY Crafts' },
        { key: 1, icon: `${controller}`, label: 'Video Games' },
        { key: 2, icon: `${dice}`, label: 'Dungeons and Dragons' },
        { key: 3, icon: `${groceries}`, label: 'Cooking' },
        { key: 4, icon: `${sale}`, label: 'Shopping' }
    ];

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <div className={classes.drawerHeader} id="about"></div>
            <Card>
                <CardHeader
                    title="Emily Spoldi"
                    subheader="Full Stack Web Developer" />
                <CardMedia
                    className={classes.media}
                    image={'https://avatars.githubusercontent.com/u/72423431?v=4'}
                    title="Emily Spoldi" />
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
                <CardContent>
                    <Accordion expanded={expanded === 'introduction'} onChange={handleChange('introduction')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="introduction-content"
                            id="introduction-header">
                            <Typography className={classes.heading}>Introduction</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                My name is Emily Spoldi. I am 28 years old and programming has had a heavy influence on my life since I was little. My parents are both software engineers so technical jargon was common at the dinner table. I was the only one in my immediate family who decided to do something other than programming when deciding on college majors... UNTIL NOW!<br />
                                <br />
                            I have spent a few years working with different schools and programs using what I have taught myself or remember from my classes at SCSU and high school robotics team. Now, I am well on my way to making the world a better formatted place. Having grown up in an era where technology was evolving quickly has given me the ability to use some systems without much experience.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'interests'} onChange={handleChange('interests')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="interests-content"
                            id="interests-header">
                            <Typography className={classes.heading}>Interests</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container>
                                {chipData.map((data) => {
                                    return (
                                        <Grid item key={data.key} >
                                            <Chip avatar={<Avatar src={data.icon} />} label={data.label} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </Card>
        </>
    );
}
