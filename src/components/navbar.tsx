import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Flare from '@mui/icons-material/Flare';
import snake from '../assets/snake.png';
import { NavLink } from 'react-router-dom';


interface ResponsiveAppBarProps {
  pages: string[];
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

function ResponsiveAppBar({ pages, selectedPage, setSelectedPage }: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'darkblue'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Flare sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            SNEKLY
          </Typography>

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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <NavLink 
                  to={page} 
                  key={page}
                  style={{ 
                    color: 'black', 
                    display: 'block', 
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                    backgroundColor: selectedPage === page ? 'rgba(211, 211, 211, 0.25)' : 'inherit' 
                    }}
                >
                <MenuItem 
                  onClick={() => { handleCloseNavMenu(); setSelectedPage(page); }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Flare sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
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
            SNEKLY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink 
                key={page}
                to={page}
                style={{ 
                  padding: '1rem',
                  color: 'white', 
                  display: 'block', 
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  backgroundColor: selectedPage === page ? 'rgba(211, 211, 211, 0.25)' : 'inherit' 
                  }}
                onClick={() => { handleCloseNavMenu(); setSelectedPage(page); }}
              >
                  {page}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Python" src={snake} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
