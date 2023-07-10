import { useState } from "react"

function Condicional() {

    function enviarEmail(e) {
        e.preventDefault()
        console.log('Testando!')

        setUserEmail(email)
    }

    function limparEmail(){
        console.log('Limpando e-mail!')
        setUserEmail()
    }

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite o seu e-mail ..."
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={enviarEmail}>Enviar-email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional