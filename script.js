//menu
function onToggleMenu(e) {
    const navlinks = document.querySelector('.nav-links');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navlinks.classList.toggle('top-[10%]');
}

//lista de produtos
const itens = [
    { id: 0, nome: 'Squeeze Palmeiras 500ml', img: './imagens/teste.jpg', desc: 'BLABALBLABLABLALBALA', quant: '01', valor: 'R$ 59,90' },
    { id: 1, nome: 'Caneca c/gel Palmeiras 400ml', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '04', valor: 'R$ 49,90' },
    { id: 2, nome: 'Caneca c/gel "Eu curto meu irmão" 400ml', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 3, nome: 'Caneca c/gel "Pedagogia"', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '04', valor: 'R$ 00,00' },
    { id: 4, nome: 'Caneca c/gel "Odontologia"', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02', valor: 'R$ 00,00' },
    { id: 5, nome: 'Caneca c/gel "Contabilidade"', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 6, nome: 'Porta retratos SantosFC 95x146mm', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 7, nome: 'Caneca Corinthians transparente 900ml', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02', valor: 'R$ 49,90' },
    { id: 8, nome: 'Squeeze termica Atlético 550ml', img: '/imagens/teste.jpg', desc: 'com avaria...', quant: '01', valor: 'R$ 39,90' },
    { id: 9, nome: 'Mousepad São Paulo FC', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 19,90' },
    { id: 10, nome: 'Mousepad Cruzeiro', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 19,90' },
    { id: 11, nome: 'Mousepad Corinthians', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 19,90' },
    { id: 12, nome: 'Squeeze Palmeiras 800ml', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02', valor: 'R$ 39,90' },
    { id: 13, nome: 'Porta CDs Atlético', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 19,90' },
    { id: 14, nome: 'Porta CDs Cruzeiro', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 19,90' },
    { id: 15, nome: 'Cantil Corinthians Inox', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 16, nome: 'Caneca Santos 500ml Azul', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 59,90' },
    { id: 17, nome: 'Caneca c/gel Brasil 450ml', img: '/imagens/teste.jpg', desc: 'com avaria...', quant: '01', valor: 'R$ 00,00' },
    { id: 18, nome: 'Caneca c/gel Fluminense 200ml mini', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 45,00' },
    { id: 19, nome: 'Squeeze BotaFogo 800ml', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 39,90' },
    { id: 20, nome: 'Kit Jogo Americano Corinthians Holo (4un)', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 32,90' },
    { id: 21, nome: 'Pasta notebook Vasco', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 39,90' },
    { id: 22, nome: 'Capacete Bike Poker', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02', valor: 'R$ 149,90' },
    { id: 23, nome: 'Capacete Bike Vollo', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 89,90' },
    { id: 24, nome: 'Handgrip Poker 2-10Kg', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 25, nome: 'Roda Abdominal Poker', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 99,90' },
    { id: 26, nome: 'Faixa Preta Yama C/Ponteira vermelha', img: '/imagens/teste.jpg', desc: 'tamanho 4t', quant: '02', valor: 'R$ 30,00' },
    { id: 27, nome: 'Faixa Preta Yama S/Ponteira', img: '/imagens/teste.jpg', desc: 'tamanho 3t', quant: '01', valor: 'R$ 30,00' },
    { id: 28, nome: 'Faixa Shinai laranja', img: '/imagens/teste.jpg', desc: 'tamanho 2t, tamanho 3t', quant: '01 (3T) | 02 (2T)', valor: 'R$ 30,00' },
    { id: 29, nome: 'Faixa Shinai laranja C/Ponteira preta', img: '/imagens/teste.jpg', desc: 'tamanho 2t', quant: '01', valor: 'R$ 30,00' },
    { id: 30, nome: 'Faixa Shinai Verde C/Ponteira', img: '/imagens/teste.jpg', desc: 'tamanho 4t, tamanho 3t, tamanho 2t', quant: '03 (T4) | 02 (T3) | 02 (T2)', valor: 'R$ 30,00' },
    { id: 31, nome: 'Faixa Shinai Verde S/Ponteira', img: '/imagens/teste.jpg', desc: 'com avaria, tamanho 2t', quant: '01', valor: 'R$ 30,00' },
    { id: 32, nome: 'Tornozeleira hidrolight', img: '/imagens/teste.jpg', desc: 'tamanho M', quant: '02 Cinza M | 01 Preto M | 02 Preto PP', valor: 'R$ 49,90' },
    { id: 33, nome: 'Joelheira cross hidrolight', img: '/imagens/teste.jpg', desc: 'tamanho p preto', quant: '01', valor: 'R$ 109,90' },
    { id: 34, nome: 'Cotoveleira cross hidrolight', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01 Preto M | 01 Preto G', valor: 'R$ 00,00' },
    { id: 35, nome: 'Kimono Yama azul Reforçado Judo A3 C/Faixa T4', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 36, nome: 'Kimono Shinai azul A3', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 229,90' },
    { id: 37, nome: 'Kimono Taenkwondo Yama Branco+Preto C/Faixa A1', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02', valor: 'R$ 179,90' },
    { id: 38, nome: 'Kimono Taenkwondo Yama A1 Branco S/Faixa A1', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 159,90' },
    { id: 39, nome: 'Kimono Taenkwondo Yama A1 Branco S/Faixa M2', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 139,90' },
    { id: 40, nome: 'Cotoveleira pre indoor Poker', img: '/imagens/teste.jpg', desc: 'tamanho P', quant: '02 P | 01 G', valor: 'R$ 64,90' },
    { id: 41, nome: 'Saco gym Speedo', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01', valor: 'R$ 00,00' },
    { id: 42, nome: 'Belize Snorkel Speedo', img: '/imagens/teste.jpg', desc: 'embalagem velha mas funciona', quant: '01', valor: 'R$ 00,00' },
    { id: 43, nome: 'Luva de treino VOLLO', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02 P', valor: 'R$ 00,00' },
    { id: 44, nome: 'Luva neoprene C/Munhequeira Poker', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01 M | 02 P', valor: 'R$ 85,90' },
    { id: 45, nome: 'Sapatinho babylook rosa', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '01 P | 1 G', valor: 'R$ 00,00' },
    { id: 46, nome: 'Sapatinho babylook vermelho', img: '/imagens/teste.jpg', desc: 'Descrição do Produto 2', quant: '02', valor: 'R$ 00,00' }
];

//index
function inicializarProdutos() {
    const cprodutos = document.getElementById('product-list');

    // Função para converter valores de string para números
    function parseValue(value) {
        return parseFloat(value.replace('R$ ', '').replace(',', '.'));
    }

    // Ordenar itens por valor em ordem decrescente
    itens.sort((a, b) => parseValue(b.valor) - parseValue(a.valor));

    // Adicionar produtos ao DOM
    cprodutos.innerHTML = itens.map((val) => `
        <div class="bg-white rounded-lg md:p-6 p-4 flex flex-col drop-shadow-md">
            <div class="mx-auto relative bg-gradient-to-t from-[#d4cdc5] to-[#f4f4f2] mb-2 w-full h-48 p-2 rounded-lg"> 
                <img src="${val.img}" class="mx-auto relative rounded-lg object-cover w-full h-full"></img>
            </div>
            <h1 class="text-black-500 text-lg">${val.nome}</h1>
            <h2 class="text-red-600 font-bold text-lg">${val.valor}</h2>
            <a href="product.html?id=${val.id}" class="flex w-fit px-2 py-1 rounded-lg transition ease-in-out delay-120 bg-[#5b88a5] hover:bg-[#243a69] text-white duration-300">Ver Detalhes</a>
        </div>
    `).join('');
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