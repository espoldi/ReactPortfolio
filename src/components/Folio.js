import React from "react";

// Components
import Project from "./Project.js";

// Material UI
import {
    Grid
} from '@material-ui/core';

export default function Folio(props) {
    const projects = props.data;
    return (
        <Grid container align="center">
            {projects.map((data) => {
                return (
                    <Project data={data} />
                );
            })}
        </Grid>
    );
}
