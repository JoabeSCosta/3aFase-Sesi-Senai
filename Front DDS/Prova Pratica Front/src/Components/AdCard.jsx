import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AdCard({ ad }) {
  return (
    <Card 
      sx={{ 
        mb: 3, 
        p: 2,
        boxShadow: 4,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #FFF9C4 0%, #FFECB3 100%)',
        border: '2px solid #FFC107',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
          transition: 'all 0.3s ease-in-out',
        }
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#E65100',
            mb: 2,
            fontSize: '1.8rem'
          }}
        >
          {ad.title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.primary" 
          sx={{ 
            mt: 1, 
            lineHeight: 1.6,
            fontSize: '1.2rem'
          }}
        >
          {ad.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 2 }}>
        <Button 
          size="large"
          variant="contained"
          component={Link} 
          to={`/comments/${ad.id}`}
          sx={{
            fontSize: '1.1rem',
            px: 3,
            py: 1,
            borderRadius: 2,
            fontWeight: 'bold',
          }}
        >
          Ver Comentários
        </Button>
      </CardActions>
    </Card>
  );
}