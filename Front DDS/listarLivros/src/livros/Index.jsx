import Listagem from "./listagem";
import Cadastro from "./cadastro";
import { useEffect, useState } from "react";
import { buscarLivros } from "../services/livros";


const Index = props => {
    const [ livros, setlivros ] = useState([]);

    const carregarlivros = async () => {
        const livros = await buscarLivros();
        
        setlivros(livros.data);
        

    }

    useEffect(() => {
        carregarlivros();
    }, []);

    return <div>
            <Cadastro/>

            <Listagem livros={livros}/>
        </div>
}

export default Index;