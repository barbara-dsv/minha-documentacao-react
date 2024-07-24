import React, { useState } from 'react'

function Estados(props) {
    const [numero, setNumero] = useState(0);

    return <>
        <h1>Estados - Número: {numero}</h1>
        <button onClick={() => setNumero(numero + 1)}>Adicionar</button>
    </>
}

export default Estados;