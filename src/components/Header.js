import React from "react";

// Material UI
import {
    AppBar,
    Button,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer,
    Toolbar,
    Typography
} from "@material-ui/core";
import {
    MenuOpen
} from "@material-ui/icons";

export default function Header() {
    const anchor = "right";
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    Emily Spoldi's Portfolio
                </Typography>

                <Button
                    aria-label="project jump menu button"
                    variant="contained"
                    color="secondary"
                    startIcon={<MenuOpen />}
                    onClick={toggleDrawer(anchor, true)}>
                    Projects
                </Button>

                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                        <List>
                            <ListItem button>
                                <ListItemText>Testing</ListItemText>
                            </ListItem>
                        </List>
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    );
}
