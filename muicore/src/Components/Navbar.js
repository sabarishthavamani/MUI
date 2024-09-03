  // Navbar.js

  import React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import IconButton from '@mui/material/IconButton';
  import Typography from '@mui/material/Typography';
  import Menu from '@mui/material/Menu';
  import Container from '@mui/material/Container';
  import Avatar from '@mui/material/Avatar';
  import Button from '@mui/material/Button';
  import Tooltip from '@mui/material/Tooltip';
  import MenuItem from '@mui/material/MenuItem';
  import AdbIcon from '@mui/icons-material/Adb';
  import { useNavigate } from 'react-router-dom';
  import SignupDialog from './Admin/AdminSignUp';  // Correct import path
  import LoginDialog from './Admin/Login'; // Correct import path

  const pages = ['Login'];

  function Navbar() {
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

    const nav = useNavigate();

    const Login = async () => {
      nav('/Login');
    };

    const Login_List = async () => {
      nav('/AdminData');
    };

    const Form = async () => {
      nav('/Form');
    };

    const Details = async () => {
      nav('/Details');
    };

    const [openSignupDialog, setOpenSignupDialog] = React.useState(false);

    const handleOpenSignupDialog = () => {
      setOpenSignupDialog(true);
      handleCloseUserMenu();
    };

    const handleCloseSignupDialog = () => {
      setOpenSignupDialog(false);
    };

    const [openLoginDialog, setOpenLoginDialog] = React.useState(false);

    const handleOpenLoginDialog = () => {
      setOpenLoginDialog(true);
      handleCloseUserMenu();
    };

    const handleCloseLoginDialog = () => {
      setOpenLoginDialog(false);
    };

    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="Home"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <SignupDialog isOpen={openSignupDialog} handleClose={handleCloseSignupDialog} />
            <br></br><br></br>
            <LoginDialog isOpen={openLoginDialog} handleClose={handleCloseLoginDialog} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={Login}>Login</MenuItem>
                <MenuItem onClick={Login_List}>Login List</MenuItem>
                <MenuItem onClick={Form}>Form</MenuItem>
                <MenuItem onClick={Details}>Donar List</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  export default Navbar;
