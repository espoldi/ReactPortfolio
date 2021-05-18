import React from "react";

// Material UI
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        margin: 20,
    },
    media: {
        height: 400,
    },
});

export default function Project(props) {
    const classes = useStyles();
    return (
        <Grid item xs="12" md="6">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        component="image"
                        image={`${props.data.image}`}
                        title={`${props.data.title}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.data.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.data.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="primary" href={`${props.data.github}`}>
                        Github Repository
                </Button>
                    <Button color="primary" href={`${props.data.live}`}>
                        Live Site
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
