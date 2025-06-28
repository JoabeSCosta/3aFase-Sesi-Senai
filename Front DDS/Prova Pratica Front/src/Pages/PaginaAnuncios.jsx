import { useState, useEffect } from 'react';
import Layout from '../Components/Layout';
import AdCard from '../Components/AdCard';
import { CircularProgress, Alert, Typography, Box } from '@mui/material';

export default function AdsPage() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Erro ao carregar anúncios');
        const data = await response.json();
        setAds(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  return (
    <Layout>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            color: '#E65100',
            mb: 2
          }}
        >
          Todos os Anúncios
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ fontSize: '1.2rem' }}
        >
          Explore nossa coleção de anúncios e veja os comentários
        </Typography>
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <CircularProgress size={60} />
        </Box>
      )}
      
      {error && (
        <Alert 
          severity="error" 
          sx={{ 
            fontSize: '1.1rem', 
            mb: 3,
            borderRadius: 2
          }}
        >
          {error}
        </Alert>
      )}
      
      <Box sx={{ 
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(auto-fit, minmax(400px, 1fr))'
        }
      }}>
        {ads.map(ad => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </Box>
    </Layout>
  );
}