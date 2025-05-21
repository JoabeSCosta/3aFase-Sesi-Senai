import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Work as ServicesIcon,
  Mail as ContactIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

// --- Estilos personalizados ---
const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? 240 : 72,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: open ? 240 : 72,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRight: 'none',
    boxShadow: theme.shadows[4],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
}));

const StyledListItem = styled(ListItem)(({ theme, open }) => ({
  minHeight: 48,
  justifyContent: open ? 'initial' : 'center',
  px: 2.5,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// --- Componente Principal ---
const NavbarVertical = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, href: '/' },
    { text: 'Sobre', icon: <InfoIcon />, href: '/sobre' },
    { text: 'Serviços', icon: <ServicesIcon />, href: '/servicos' },
    { text: 'Contato', icon: <ContactIcon />, href: '/contato' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <StyledDrawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={open}
        onClose={toggleDrawer}
      >
        {/* Botão de abrir/fechar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            p: 2,
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton onClick={toggleDrawer} color="inherit">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        {/* Itens do menu */}
        <List>
          {menuItems.map((item) => (
            <Tooltip 
              key={item.text} 
              title={!open ? item.text : ''} 
              placement="right"
              arrow
            >
              <StyledListItem 
                button 
                component="a"
                href={item.href}
                open={open}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ opacity: open ? 1 : 0 , color: 'white'}} 
                />
              </StyledListItem>
            </Tooltip>
          ))}
        </List>
      </StyledDrawer>

      {/* Botão do menu hamburger (mobile) */}
      {!open && isMobile && (
        <IconButton
          color="primary"
          aria-label="open menu"
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 3,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default NavbarVertical;