import { Card, CardContent, Typography, Avatar, Stack } from '@mui/material';

export default function CommentCard({ comment }) {
  return (
    <Card 
      sx={{ 
        mb: 3, 
        p: 2,
        boxShadow: 3,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #FFF9C4 0%, #FFECB3 100%)',
        border: '1px solid #FFD54F',
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2 }}>
          <Avatar 
            sx={{ 
              bgcolor: '#FF8F00', 
              width: 50, 
              height: 50,
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            {comment.name.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                color: '#E65100',
                fontSize: '1.3rem'
              }}
            >
              {comment.name}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontSize: '1rem' }}
            >
              {comment.email}
            </Typography>
          </div>
        </Stack>
        <Typography 
          variant="body1"
          sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'text.primary'
          }}
        >
          {comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}