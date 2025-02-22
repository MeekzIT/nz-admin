import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../../assets/logo.png"
import { pagesPaths } from './constants';
import './styles.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooke';
import { logOutFetch } from '../../redux/slices/adminSlice/fetchService';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate()
  const logOutHandler = (path: string) => {
    if (path === "/login") {
      dispatch(logOutFetch())
      navigate("/login")
    }
  }


  return (
    <AppBar position="static" sx={{ backgroundColor: "#08412E" }} className='app-bar-header'>
      <Container maxWidth="xl" sx={{ backgroundColor: "#08412E" }}>
        <Toolbar disableGutters>
          <Avatar variant='square' src={Logo} alt='logo' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: 100, height: 80 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }, justifyContent: "space-between" }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pagesPaths.map(({ href, paheName }) => (
                <MenuItem key={paheName} onClick={handleCloseNavMenu}>
                  <NavLink to={href} onClick={() => logOutHandler(href)}>{paheName}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar variant='square' src={Logo} alt='logo' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: 100, height: 80 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "right" } }}>
            {pagesPaths.map(({ href, paheName }) => (
              <NavLink
                key={paheName}
                to={href}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => {
                  handleCloseNavMenu();
                  logOutHandler(href);
                }}
              >
                {paheName.toLocaleUpperCase()}
              </NavLink>

            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Header;