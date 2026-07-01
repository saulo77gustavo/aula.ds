const biblioteca ={
estante:[], //"anay lista"
adicionarlivro(nome,categoria,estoque,autor){
    const livro={
        nome:nome,
        categoria:categoria,
        estoque:estoque,
        autor:autor,
        disponivel:true,
        alugado:false,
    }
    this.estante.push(livro)
    console.log ("livro adicionado com sucesso");

}, //função
mostrarlivros (){
    for (let i=0; i<this.estante.length; i++){
        const p= thin.produtos[i];
    }
}



    
}//loja

biblioteca.adicionarlivro("a fera","ficção",10,"joão")





