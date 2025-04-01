import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const navItems = ['About', 'Experience', 'Projects', 'Certifications', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileOpen) handleDrawerToggle();
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} onClick={() => scrollToSection(item)}>
            <ListItemText 
              primary={item} 
              sx={{ 
                cursor: 'pointer',
                color: theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(5px)', boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)' }}>
        <Toolbar>
          <Box
            sx={{ 
              flexGrow: 1, 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: theme.palette.text.primary
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Sairaj Y V
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button 
                  color="inherit" 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </motion.div>
  );
};

export default Navbar;