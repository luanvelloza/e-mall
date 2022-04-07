class ProdutosView{

    /* não funciona */
    constructor(){

    }



    adicionarProduto(){
        return `    
        <div class="subcard">
        <img src="./televisao.webp" />
        <div class="Informativos-card">
        <span>${item.nome}</span>
        <span>${item.descricao}</span>
        <span>${item.price}</span>
        </div>
        <button>Vizualizar</button>
        </div>
    `
    }
}