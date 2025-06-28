import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ boxShadow: 3 }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Anúncios
          </Typography>
        </Toolbar>
      </AppBar>
      <Container 
        maxWidth={false} 
        sx={{ 
          flex: 1,
          py: 4,
          px: { xs: 2, sm: 4, md: 6 },
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}