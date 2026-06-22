const produtos ={
    //chave
     Nome: "notebook", //valor
    preço :600,
    marca: "positivo" 
};

for (let chave in produtos){
    console.log (chave, produtos[chave]);
}

console.log (Object.values (produtos)); //keys
console.log (Object.keys (produtos));