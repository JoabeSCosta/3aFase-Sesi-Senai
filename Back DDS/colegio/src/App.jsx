import { useState } from 'react';
import { CardContent, Stack, Card, Box, Typography, Divider, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Navbar from './components/Navbar';

function App() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [status, setStatus] = useState('ATIVO');
  const [notas1, setNotas1] = useState('');
  const [notas2, setNotas2] = useState('');
  const [notas3, setNotas3] = useState('');
  const [notas4, setNotas4] = useState('');

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'white',
          overflow: 'hidden',
        }}
      >
        {/* Top Bar */}
        <Box
          sx={{
            backgroundColor: '#9BB4ED',
            height: '64px',
            width: '100%',
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        <Typography variant="h3" color="black">
        Escola
        </Typography>
  
        </Box>
        {/* Main Content */}
        <Navbar />
        <Box
          sx={{
            flex: 1,
            padding: 5,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Stack spacing={1}>
          <Typography variant="h4" color="black" >Cadastro de Alunos</Typography>
          <TextField id="outlined-basic" label="Nome" variant="outlined" sx={{width: "300px"}}/>
          <TextField id="outlined-basic" label="Matricula" variant="outlined" sx={{width: "300px"}}/>
          <TextField id="outlined-basic" label="Status" variant="outlined" sx={{width: "300px"}} />
          <Button variant="contained">Cadastrar</Button>
          </Stack>
        </Box>   
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
          }}>
        <Divider sx={{ width: '90%',height: "10%", backgroundColor: 'black', marginTop: 1 }} />
        </Box>    

        <Box sx={{
            flex: 1,
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Stack spacing={1}>
          <Typography variant="h4" color="black" >Cadastro de Notas</Typography>
          <TextField id="outlined-basic" label="Nota 1" variant="outlined" sx={{width: "300px"}}/>
          <TextField id="outlined-basic" label="Nota 2" variant="outlined" sx={{width: "300px"}}/>
          <TextField id="outlined-basic" label="Nota 3" variant="outlined" sx={{width: "300px"}} />
          <TextField id="outlined-basic" label="Nota 4" variant="outlined" sx={{width: "300px"}} />
          <Button variant="contained">Cadastrar</Button>
          </Stack>

        </Box>

        {/* FOOTER */}
        <Box
          sx={{
            backgroundColor: '#9BB4ED',
            height: '64px',
            width: '100%',
            flexShrink: 0,
          }}
        />
      </Box>
    </>
  );
}

export default App;
