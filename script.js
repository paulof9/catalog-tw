//menu
function onToggleMenu(e) {
    const navlinks = document.querySelector('.nav-links');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navlinks.classList.toggle('top-[10%]');
}

//lista de produtos
const itens = [
    { id: 0, nome: 'Produto 1', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 1', quant: '01', valor: 'R$ 100,00' },
    { id: 1, nome: 'Produto 2', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 150,00' },
];

//index
function inicializarProdutos() {
    var cprodutos = document.getElementById('product-list');
    itens.map((val) => {
        cprodutos.innerHTML += `
        <div class="bg-white rounded-lg md:p-6 p-4 flex flex-col drop-shadow-md">
            <div class="mx-auto relative bg-gradient-to-t from-[#d4cdc5] to-[#f4f4f2] mb-2 w-full h-48 p-2 rounded-lg"> 
                <img src="${val.img}" class="mx-auto relative rounded-lg object-cover w-full h-full"></img>
            </div>
            <h1 class="text-black-500 text-lg">${val.nome}</h1>
            <h2 class="text-red-600 font-bold text-lg">${val.valor}</h2>
            <a href="product.html?id=${val.id}" class="flex w-fit px-2 py-1 rounded-lg transition ease-in-out delay-120 bg-[#5b88a5] hover:bg-[#243a69] text-white duration-300">Ver Detalhes</a>
        </div>
        `;
    });
}

//getID do produto
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

//product.html
function inicializarProdutoEspecifico() {
    const id = getProductIdFromUrl(); // Pega o ID da URL
    if (id !== null) {
        const produto = itens.find(item => item.id == id); // Encontra o produto pelo ID
        if (produto) {
            const cprodutos = document.getElementById('product-list');
            cprodutos.innerHTML = `
                <div class="bg-white rounded-lg md:p-6 p-4 flex flex-col drop-shadow-md relative">
                <div class="absolute -left-3 -top-3 md:-left-2 md:-top-2 rounded-full z-30 flex items-center justify-center"><a href="index.html" class="w-full h-full"> <ion-icon name="close" class="bg-[#5b88a5] text-white hover:text-[#243a69] px-2 py-2 rounded-full hover:bg-[#d4cdc5] text-3xl cursor-pointer"></ion-icon> </a></div>
                    <div class="mx-auto relative bg-gradient-to-t from-[#d4cdc5] to-[#f4f4f2] mb-2 w-full h-66 p-2 rounded-lg"> 
                        <img src="${produto.img}" class="mx-auto relative rounded-lg object-cover w-full h-full"></img>
                    </div>
                    <h1 class="text-black-500 text-2xl mt-2">${produto.nome}</h1>
                    <p class="text-black-500 text-lg mb-2">${produto.desc}</p>
                    <h2 class="text-red-600 font-bold text-2xl mt-4">${produto.valor}</h2>
                    <span class="text-gray-500">Quantidade: ${produto.quant}</span>
                </div>
            `;
        } else {
            const cprodutos = document.getElementById('product-list');
            cprodutos.innerHTML = '<p>Produto não encontrado!</p>';
        }
    }
}

//dependencias
if (document.getElementById('product-list')) {
    const page = window.location.pathname.split("/").pop();
    if (page === 'index.html' || page === '') {
        inicializarProdutos(); //index.html
    } else if (page === 'product.html') {
        inicializarProdutoEspecifico(); //product.html
    }
}