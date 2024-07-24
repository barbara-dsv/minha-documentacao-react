import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function Container(props) {
    return <>
        <br />
        <br />
        <h1>{props.titulo}</h1>
        <h3>{props.descricao}</h3>
        <div>
            <SyntaxHighlighter>
                {props.codigo}
            </SyntaxHighlighter>
        </div>

    </>
}

export default Container;