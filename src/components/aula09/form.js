function form() {

function cadUsuario(e){
    e.preventDefault()
    console.log("Cadastrou o usuário!")
}

    return(
        <div>
            <h2>Meu cadastro</h2>
            <form onSubmit={cadUsuario}>
                <input type="text" placeholder="Digite o seu nome"/>
                <input type="submit" value="cadastrar" />
            </form>
        </div>
    )
}

export default form