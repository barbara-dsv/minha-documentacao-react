import React from 'react';

function Teste(props) {
    const nota = 10;
    const frutas = props.frutas;
    const itemLista = frutas.map((item) => <li>{item}</li>);

    return <>
        <h1>Hello World!</h1>
        <p>Seja bem vindo(a) {props.nome}</p>
        <p>Altura: {props.altura}</p>
        <p>Nota: {nota}</p>
        <ul>
            {
                itemLista
            }
        </ul>
        {props.aluno ? <>
            <h1>É Aluno(a)!</h1>
            <img src="https://placehold.co/400" alt="imagem" />
        </> : <h1>Não é aluno(a)!</h1>}
    </>
}

export default Teste;