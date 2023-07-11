function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return<>{nome && <p>Saudação {gerarSaudacao(nome)}</p>}</>
}

export default Saudacao