import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import CommentCard from '../Components/CardComentarios';
import { CircularProgress, Alert, Button, Typography, Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export default function CommentsPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar o anúncio
        const adResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!adResponse.ok) throw new Error('Anúncio não encontrado');
        const adData = await adResponse.json();
        setAd(adData);

        // Buscar os comentários
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        if (!commentsResponse.ok) throw new Error('Erro ao carregar comentários');
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <Layout>
      <Box sx={{ width: '100%', maxWidth: 'none' }}>
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)}
          variant="contained"
          size="large"
          sx={{ 
            mb: 4,
            fontSize: '1.1rem',
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
          }}
        >
          Voltar
        </Button>

        {loading && <CircularProgress size={60} sx={{ display: 'block', mx: 'auto', my: 4 }} />}
        {error && <Alert severity="error" sx={{ fontSize: '1.1rem', mb: 3 }}>{error}</Alert>}

        {ad && (
          <>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: '#E65100',
                mb: 3,
                textAlign: 'center'
              }}
            >
              {ad.title}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                mb: 5, 
                fontSize: '1.3rem',
                lineHeight: 1.7,
                textAlign: 'justify',
                background: 'rgba(255, 235, 59, 0.2)',
                p: 3,
                borderRadius: 2,
                border: '1px solid #FFEB3B'
              }}
            >
              {ad.body}
            </Typography>
          </>
        )}

        <Typography 
          variant="h5" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            color: '#FF8F00',
            mb: 3,
            textAlign: 'center'
          }}
        >
          Comentários ({comments.length})
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fit, minmax(500px, 1fr))'
          }
        }}>
          {comments.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
}