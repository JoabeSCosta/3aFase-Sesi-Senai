import React from 'react'
import './Cadastro.css'
import TextInput from '../components/TextInput';

const Cadastro = props => {
    return (
        <div className='divCadastrarLivros'>
            <h3>Cadastrar Livros</h3>
            <TextInput label="Título"/>
            <TextInput label="Autor"/>
            <TextInput label="Genêro"/>
            <TextInput label="Descrição"/>
            <TextInput label="Data Publicação"/>
            <TextInput label="Editora"/>    


            <div className='divBttn'>
                <button className='bttnCad'>Novo</button>
                <button className='bttnCad'>Salvar</button>

            </div>


        </div>
    )
}

export default Cadastro
