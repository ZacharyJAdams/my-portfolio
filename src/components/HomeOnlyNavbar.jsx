import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { AppBar, Toolbar, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './CSS/Navbar.css'

function HomeNavbar(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const isSmallScreen = useMediaQuery('(max-width:420px)');

    function HideOnScroll(props) {
      const { children, window } = props;
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
      });
    
      return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      );
    }
      
    HideOnScroll.propTypes = {
      children: PropTypes.element.isRequired,
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
    };

    return (       
        <HideOnScroll {...props}>  
            <AppBar className='appbar' sx={{ backgroundColor: colors.primary[700] }}>
                <Toolbar>
                    {isSmallScreen ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    ) : (
                    <Typography
                        variant="h3"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                        mr: 2,
                        display: 'flex',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                        className="home-button"
                    >
                        Zachary Adams
                    </Typography>
                    )}
                    
                    <div className="spacer" />

                    {!isSmallScreen && (
                    <>
                        <Button className='link-buttons' component={Link} to="/about" color="inherit">About</Button>
                        <Button className='link-buttons' component={Link} to="/projects" color="inherit">Projects</Button>
                        <Button className='link-buttons' component={Link} to="/mission" color="inherit">Mission</Button>
                        <Button className='link-buttons' component={Link} to="/contact" color="inherit">Contact</Button>
                    </>
                    )}
                </Toolbar>
            </AppBar>
        </HideOnScroll>  
    )
}

export default HomeNavbar