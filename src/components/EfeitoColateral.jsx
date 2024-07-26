import { useEffect, useState } from 'react';

export function EfeitoColateral() {
    const [itens, setItems] = useState([]);

    useEffect(() => {
        // Simulação de chamada à API ou carregamento de dados
        const dados = ['carro', 'casa', 'livro'];
        const itemLista = dados.map((item, index) => <li key={index}>{item}</li>); // Usar o índice como chave
        setItems(itemLista);
    }, []); // Adicione dependência vazia para que o efeito seja executado apenas uma vez

    return (
        <>
            <ul>
                {itens}
            </ul>
        </>
    );
}


// import { useEffect, useState } from "react"


// export function EfeitoColateral  (){
//     //Se é um hook ele pede uma callback como parâmetro 
//     const [dados, setDados] = useState(false)
//     useEffect( () => {
//         //posso fazer uma chamada ao banco de dados 
//         //carregar os dados 
//         //tudo que acontece aqui é primeiro, é antes de renderizar a tela
       
//         setDados(true)//aqui eu to simulando que ele foi buscar no banco de dados e achou o dado

//     })
//     return(
//         <>
//        {dados ? <h1>{dados}Dados carregados com sucesso</h1> : <h1>Erro: dados não carregados </h1>}
//         </>
//  )   
// }