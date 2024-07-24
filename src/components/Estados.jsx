import React, { useState } from 'react'

function Estados(props) {
    const [numero, setNumero] = useState(0);
    return <>
        <br />
        <br />
        <h2>Estados</h2>
        <h1>{numero}</h1>
        <button onClick={() => setNumero(numero + 1)}>Adicionar</button>
    </>
}

export default Estados;