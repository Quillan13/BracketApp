import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles, Theme, createStyles, Divider, Typography } from '@material-ui/core';

import { GlobalState } from 'Store';
import { AuthenticationActionCreators } from 'Store/Authentication';
import AuthService from 'Services/AuthService';
import { Redirect } from '@reach/router';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuItemText: {
            width: '100%',
        },
        menuName: {
            padding: theme.spacing(1, 3, 0, 3),
        },
        button: {
            textTransform: 'none',
        },
    })
);

const UserMenu: React.FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const name = useSelector((state: GlobalState) => state.authentication.name);

    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const [redirectTo, setRedirectTo] = useState<string>();

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    const logout = async () => {
        try {
            AuthService.LogOut();
            dispatch(AuthenticationActionCreators.LogOut());
        } catch (error) {
            console.error(error);
        }
    };

    if(redirectTo !== undefined) return <Redirect to={redirectTo} />

    const UserSettings = () => {
        setRedirectTo('/UserSettings');
    }



    return (
        <>
            <Button
                className={classes.button}
                ref={menuButtonRef}
                size="small"
                color="secondary"
                variant="contained"
                onClick={openMenu}
                endIcon={<AccountCircle />}>
                {name}
            </Button>
            <Menu
                keepMounted
                open={menuOpen}
                onClose={closeMenu}
                anchorEl={menuButtonRef.current}
                MenuListProps={{ disablePadding: true }}>
                <MenuItem className={classes.menuName}>
                    <Typography color="textSecondary" variant="overline" align="center">
                        {name}
                    </Typography>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={UserSettings}>
                    <Typography align="center" variant="overline" className={classes.menuItemText}>
                        User Settings
					</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                    <Typography align="center" variant="overline" className={classes.menuItemText}>
                        Log Out
					</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;