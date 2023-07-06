function aula03(){
    const myName = 'Janaina';
    const newName = myName.toUpperCase();
  
    function sum(a, b){
      return a + b;
    }
  
    const url = 'https://via.placeholder.com/150';
    
    return(
        <div>
            <h1>Aula #03 - Entendendo o JSX</h1>
            <h2>Alterando o JSX</h2>
            <p>Olá, {myName}</p>
            <p>Olá, {newName}</p>
            <p>Soma: {2 + 2}</p>
            <p>Soma: {sum(1, 2)}</p>
            <img src={url} alt="img" />
        </div>
    )
}

export default aula03