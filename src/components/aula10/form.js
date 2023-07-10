import { useState } from "react"

function Form() {

    function cadUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${nome} foi cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState('Janaina')
    const [senha, setSenha] = useState("")

    return (
        <div>
            <h2>Meu cadastro</h2>
            <form onSubmit={cadUsuario}>

                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite o seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setSenha(e.target.value)} />
                </div>

                <input type="submit" value="cadastrar" />
            </form>
        </div>
    )
}

export default Form