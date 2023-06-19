import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';
import './navbar.css';
import '@fontsource/roboto/700.css';

const pagesTwo = ['Home', 'About', 'Services'];
const pages = ['Estimate', 'Contact', 'FAQ'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ position: 'fixed', backgroundColor: '#000000', borderBottom: '2px solid white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {pagesTwo.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    {page === 'About' || page === 'Home' || page === 'Services' ? (
                                    <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography textAlign="center" className="custom-typography">{page}</Typography>
                                    </Link>
                                ) : (
                                    <Typography textAlign="center">{page}</Typography>
                                )}
                            </MenuItem>
                        ))}
                    </Box>
                    <img src={logo} className="logo-png" alt="logo" style={{ position: 'relative', top: '27px', paddingLeft: '55px' }} />
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                {page === 'Estimate' || page === 'Contact' || page === 'FAQ' ? (
                                    <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography textAlign="center" className="custom-typography">{page}</Typography>
                                    </Link>
                                ) : (
                                    <Typography textAlign="center">{page}</Typography>
                                )}
                            </MenuItem>
                        ))}
                    </Box>
                    <Icon></Icon>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
