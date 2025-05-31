import React, { useState } from 'react';
import { Typography, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Navbar from '../components/Navbar';

function MarujoEntrevista() {
    const [idade, setIdade] = useState('');
    const [sabeNadar, setSabeNadar] = useState('');
    const [temRecomendacao, setTemRecomendacao] = useState('');
    const [resultado, setResultado] = useState('');

    const handleIdadeChange = (event) => {
        setIdade(event.target.value);
    };

    const handleSabeNadarChange = (event) => {
        setSabeNadar(event.target.value);
    };

    const handleTemRecomendacaoChange = (event) => {
        setTemRecomendacao(event.target.value);
    };

    const avaliarCandidato = () => {
        const idadeNum = parseInt(idade, 10);
        if (sabeNadar === 'sim' && idadeNum > 16) {
            setResultado('Aprovado para o navio!');
        } else if (sabeNadar === 'não' && temRecomendacao === 'sim' && idadeNum >= 14) {
            setResultado('Aprovado sob recomendação. Monitorar nas primeiras viagens.');
        } else {
            setResultado('Reprovado. Volte quando estiver mais preparado para o mar.');
        }
    };

    return (
        <div>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                <Typography variant="h3" component="h2">
                    Teste de Recrutamento para Novos Marujos
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', marginTop: 2 }}>
                    <FormControl variant="standard" sx={{ marginBottom: 2 }}>
                        <InputLabel id="sabe-nadar-label">Sabe nadar?</InputLabel>
                        <Select
                            labelId="sabe-nadar-label"
                            id="sabe-nadar"
                            value={sabeNadar}
                            onChange={handleSabeNadarChange}
                        >
                            <MenuItem value="sim">Sim</MenuItem>
                            <MenuItem value="não">Não</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="idade"
                        label="Idade"
                        variant="standard"
                        type="number"
                        value={idade}
                        onChange={handleIdadeChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <FormControl variant="standard" sx={{ marginBottom: 2 }}>
                        <InputLabel id="tem-recomendacao-label">Tem recomendação?</InputLabel>
                        <Select
                            labelId="tem-recomendacao-label"
                            id="tem-recomendacao"
                            value={temRecomendacao}
                            onChange={handleTemRecomendacaoChange}
                        >
                            <MenuItem value="sim">Sim</MenuItem>
                            <MenuItem value="não">Não</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={avaliarCandidato}>
                        Avaliar
                    </Button>
                    {resultado && (
                        <Typography variant="h6" sx={{ marginTop: 2 }}>
                            {resultado}
                        </Typography>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default MarujoEntrevista;