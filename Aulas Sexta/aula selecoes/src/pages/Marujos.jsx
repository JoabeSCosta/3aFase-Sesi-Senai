import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../components/Navbar';

function Marujos() {
    const [inputMarujos, setInputMarujos] = useState('');
    const [inputEventos, setInputEventos] = useState('');
    const [viagem, setViagem] = useState('');

    function verificar() {
        if (Number(inputMarujos) >= 10 || Number(inputEventos) >= 1) {
            setViagem('SIM');
        } else {
            setViagem('NÃO');
        }
    }

    return (
        <>
        <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>

                <Typography variant="h3" component="h2">Ex. 9 - Capitão Ganso</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '100', marginTop: 2}}>
                <TextField
                    id="Quantidade de Marujos"
                    label="Quantidade de Marujos"
                    variant="outlined"
                    value={inputMarujos}
                    onChange={(e) => setInputMarujos(e.target.value)}
                    type="number"
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    id="Quantidade de Eventos"
                    label="Quantidade de Eventos"
                    variant="outlined"
                    value={inputEventos}
                    onChange={(e) => setInputEventos(e.target.value)}
                    type="number"
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" onClick={verificar} sx={{ marginBottom: 2 }}>
                    Verificar
                </Button>
                {viagem && (
                    <Typography variant="h5" component="p">
                        Viagem: {viagem}
                    </Typography>
                )}
                </Box>
              
            </Box>
        </>
    );
}

export default Marujos;
