import "./Listagem.css";

const Listagem = props => {
    const { livros } = props;

    return (
        <>
            <div className="ListagemLivros">

            <h3>Lista de Livros</h3>
            
            {(livros.length === 0) && <span>Não existem livros cadastrados.</span>}
            {livros.length > 0 && 
                <div className='listagem'>
                    <table className='tabela-livros'>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Genero</th>
                                <th>Descrição</th>
                                <th>Publicado</th>
                                <th>Editora</th>
                                <th className='acoes' colSpan={2}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livros => (
                                <tr key={livros.id}>
                                    <td>{livros.title}</td>
                                    <td>{livros.author}</td>
                                    <td>{livros.genre}</td>
                                    <td>{livros.description}</td>
                                    <td>{livros.published}</td>
                                    <td>{livros.publisher}</td>
                                    <td className='acoes'><button>Editar</button></td>
                                    <td className='acoes'><button>Excluir</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
            </div>
        </>
    )
}

export default Listagem;