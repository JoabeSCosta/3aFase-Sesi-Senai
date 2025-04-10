//Importando o Express e body-parser com a sintaxe ES6
import {express} from 'express';

// Criando uma instância do Express
const app = express();

// Configurando o body-parser para interpretar requições POST
app.use(express.json());

// Rota GET - Retorna uma mensagem de boas-vindas
app.get('/', (req, res) => {
    res.json({mensagem: "Bem-Vindo!"});
});

// Rota POST - Recebe dados do formulário e retorna os dados



