import React, { useEffect, useState } from 'react'

function EfeitoColateral(props) {
    const [itens, setItens] = useState(false);

    useEffect(() => {
        /* Chamou a API
        Buscou os dados
        */
        const dados = ['carro', 'casa', 'livro']
        const itemLista = dados.map((item) => <li>{item}</li>)

        setItens(itemLista)
    })


    return <>
        <ul>
            {
                itens
            }
        </ul>
    </>
}

export default EfeitoColateral;