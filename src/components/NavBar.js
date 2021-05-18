import React from "react";

// Material UI
import {
    AppBar,
    Button,
    ButtonGroup,
    ClickAwayListener,
    Grow,
    IconButton,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Toolbar,
    Typography
} from "@material-ui/core";
import {
    Brightness4,
    Brightness7,
    ExpandMore
} from "@material-ui/icons";
import {
    makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar(props) {
    const icon = !props.theme ? <Brightness7 /> : <Brightness4 />;
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        My Portfolio
                    </Typography>

                    <ButtonGroup variant="contained" color="secondary" aria-label="nav menu">
                        <Button href="#about">About</Button>
                        <Button href="#contact">Contact</Button>
                        <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            endIcon={<ExpandMore />}>
                            Projects
                        </Button>
                    </ButtonGroup>

                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>

                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="dark mode"
                        onClick={() => props.changeTheme(!props.theme)}>
                        {icon}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
