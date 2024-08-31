//menu
function onToggleMenu(e) {
    const navlinks = document.querySelector('.nav-links');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navlinks.classList.toggle('top-[10%]');
}

//lista de produtos
const itens = [
    { id: 0, nome: 'Squeeze Palmeiras 500ml', img: '/https://images.tcdn.com.br/img/img_prod/213069/squeeze_do_palmeiras_500ml_inox_verde_9564_1_20200521105129.jpg', desc: 'Uma elegante garrafa squeeze com o logo do Palmeiras, perfeita para se hidratar enquanto está em movimento. Seu design moderno e prático a torna ideal para atividades ao ar livre, viagens e uso diário.', quant: '01', valor: 'R$ 59,90' },
    { id: 1, nome: 'Caneca c/gel Palmeiras 400ml', img: 'https://cdn.awsli.com.br/600x700/1316/1316335/produto/194695967/1-da1c85d373.jpg', desc: 'Uma caneca com gel que mantém suas bebidas geladas, adornada com o emblema do Palmeiras. Seu interior com gel proporciona um resfriamento duradouro, enquanto o exterior com o logo do time adiciona um toque de estilo.', quant: '04', valor: 'R$ 49,90' },
    { id: 2, nome: 'Caneca c/gel "Eu curto meu irmão" 400ml', img: '/imagens/teste.jpg', desc: 'Uma divertida caneca com gel que expressa o amor fraterno, ideal para compartilhar bebidas com a família. Seu design descontraído e mensagem carinhosa a tornam um presente perfeito para ocasiões especiais.', quant: '01', valor: 'R$ 00,00' },
    { id: 3, nome: 'Caneca c/gel "Pedagogia"', img: 'https://mipedecor.com.br/wp-content/uploads/2024/04/Photoroom_20240425_123843.jpg', desc: 'Uma caneca com gel projetada para educadores, combinando funcionalidade com um tema pedagógico. Seu interior com gel mantém as bebidas frias, enquanto seu exterior com a palavra "Pedagogia" homenageia a nobre profissão.', quant: '04', valor: 'R$ 00,00' },
    { id: 4, nome: 'Caneca c/gel "Odontologia"', img: 'https://mipedecor.com.br/wp-content/uploads/2024/04/Photoroom_20240425_122639.jpg', desc: 'Uma caneca com gel especialmente criada para profissionais da odontologia, perfeita para desfrutar de bebidas durante os intervalos. Seu design elegante e a palavra "Odontologia" a tornam um item essencial para dentistas e estudantes da área.', quant: '02', valor: 'R$ 00,00' },
    { id: 5, nome: 'Caneca c/gel "Contabilidade"', img: '/imagens/teste.jpg', desc: 'Uma caneca com gel para contadores, com um design profissional para uso no escritório. Seu interior com gel mantém as bebidas na temperatura ideal, enquanto seu exterior com a palavra "Contabilidade" a torna um acessório útil e personalizado.', quant: '01', valor: 'R$ 00,00' },
    { id: 6, nome: 'Porta retratos SantosFC 95x146mm', img: 'https://http2.mlstatic.com/D_NQ_NP_633209-MLB76372117104_052024-O.webp', desc: 'Um elegante porta-retrato com o logo do SantosFC, perfeito para exibir memórias queridas. Seu design moderno e compacto o torna uma ótima opção para decorar sua casa ou escritório com o orgulho do seu time.', quant: '01', valor: 'R$ 00,00' },
    { id: 7, nome: 'Caneca Corinthians transparente 900ml', img: 'https://lojaminasdepresentes.com.br/media/catalog/product/cache/1/thumbnail/1200x1400/9df78eab33525d08d6e5fb8d27136e95/h/n/hn2013-1_7_c_pia.jpg', desc: 'Uma caneca grande e transparente com o logo do Corinthians, ótima para qualquer bebida. Seu tamanho generoso e material resistente a tornam uma escolha versátil para uso diário.', quant: '02', valor: 'R$ 49,90' },
    { id: 8, nome: 'Squeeze termica Atlético 550ml', img: '/imagens/teste.jpg', desc: '(PRODUTO COM AVARIA CONFORME IMAGEM) Uma garrafa squeeze térmica que mantém as bebidas quentes ou frias, com o branding do Atlético. Seu design elegante e funcional a torna ideal para atividades ao ar livre, viagens e uso diário.', quant: '01', valor: 'R$ 39,90' },
    { id: 9, nome: 'Mousepad São Paulo FC', img: '/imagens/teste.jpg', desc: 'Um mouse pad durável com o logo do São Paulo FC, perfeito para uso em casa ou no escritório. Seu design moderno e estilizado adiciona um toque de personalidade ao seu local de trabalho.', quant: '01', valor: 'R$ 19,90' },
    { id: 10, nome: 'Mousepad Cruzeiro', img: 'https://down-br.img.susercontent.com/file/944fdbefe3b5782af1c09396e72e0bce', desc: 'Um mouse pad estiloso com o logo do Cruzeiro, ideal para realçar seu espaço de trabalho. Sua superfície suave e antiderrapante proporciona um ótimo deslizamento do mouse, enquanto seu design com o emblema do time expressa sua paixão.', quant: '01', valor: 'R$ 19,90' },
    { id: 11, nome: 'Mousepad Corinthians', img: '/imagens/teste.jpg', desc: 'Um mouse pad funcional com o emblema do Corinthians, projetado para fãs. Seu design compacto e resistente o torna uma escolha prática para uso em casa ou no escritório.', quant: '01', valor: 'R$ 19,90' },
    { id: 12, nome: 'Squeeze Palmeiras 800ml', img: 'https://cebolabrindes.com.br/pub/media/catalog/product/cache/c70ae39189325524823e3a7bddbfebee/1/3/13142_4__1.jpg', desc: 'Uma garrafa squeeze maior com o logo do Palmeiras, perfeita para se manter hidratado. Seu tamanho generoso a torna ideal para atividades prolongadas, viagens e uso diário.', quant: '02', valor: 'R$ 39,90' },
    { id: 13, nome: 'Porta CDs Atlético', img: 'https://down-br.img.susercontent.com/file/sg-11134201-7rce3-lt1pa5fjq63l84', desc: 'Um porta-CDs compacto com o branding do Atlético, ideal para organizar sua coleção de música. Seu design elegante e prático o torna uma ótima opção para manter seus CDs em ordem.', quant: '01', valor: 'R$ 19,90' },
    { id: 14, nome: 'Porta CDs Cruzeiro', img: 'https://down-br.img.susercontent.com/file/sg-11134201-7qvdg-ljo2dlb0r8k26c', desc: 'Um estiloso porta-CDs com o logo do Cruzeiro, perfeito para amantes de música. Seu design moderno e funcional o torna uma escolha ideal para organizar sua coleção de CDs.', quant: '01', valor: 'R$ 19,90' },
    { id: 15, nome: 'Cantil Corinthians Inox', img: 'https://a-static.mlcdn.com.br/450x450/cantil-220ml-inox-corinthians/lojadotorcedor/ec21b994186811efbfbc4201ac185034/607553bd1131746d32e8baaca4cb68fe.jpeg', desc: 'Um cantil de aço inoxidável com o logo do Corinthians, ideal para atividades ao ar livre. Seu material resistente e design compacto o tornam uma opção prática e durável para levar suas bebidas favoritas em aventuras.', quant: '01', valor: 'R$ 00,00' },
    { id: 16, nome: 'Caneca Santos 500ml Azul', img: 'https://lojaminasdepresentes.com.br/media/catalog/product/cache/1/thumbnail/1200x1400/9df78eab33525d08d6e5fb8d27136e95/q/h/qh046-4_3_.jpg', desc: 'Uma caneca azul com o logo do Santos, perfeita para desfrutar de suas bebidas favoritas. Seu tamanho generoso e cor atraente a tornam uma escolha versátil para uso diário.', quant: '01', valor: 'R$ 59,90' },
    { id: 17, nome: 'Caneca c/gel Brasil 450ml', img: '/imagens/teste.jpg', desc: '(PRODUTO COM AVARIA CONFORME IMAGEM) Uma caneca com gel comemorando o Brasil, perfeita para desfrutar de bebidas durante festividades. Seu interior com gel mantém as bebidas geladas, enquanto seu exterior com as cores da bandeira brasileira a torna um item festivo.', quant: '01', valor: 'R$ 00,00' },
    { id: 18, nome: 'Caneca c/gel Fluminense 200ml mini', img: 'https://goldenmayapresentes.com/pub/media/catalog/product/cache/f4ef0b7e02581fe8f890fc6974eebeed/1/7/173836.jpg', desc: 'Uma mini caneca com gel com o branding do Fluminense, ideal para bebidas pequenas. Seu tamanho compacto e design com o logo do time a tornam uma opção prática e estilosa.', quant: '01', valor: 'R$ 45,00' },
    { id: 19, nome: 'Squeeze BotaFogo 800ml', img: 'https://cebolabrindes.com.br/pub/media/catalog/product/cache/c70ae39189325524823e3a7bddbfebee/6/1/6134_1_.jpg', desc: 'Uma garrafa squeeze espaçosa com o branding do BotaFogo, perfeita para hidratação. Seu tamanho generoso e design elegante a tornam uma escolha ideal para atividades ao ar livre, viagens e uso diário.', quant: '01', valor: 'R$ 39,90' },
    { id: 20, nome: 'Kit Jogo Americano Corinthians 3D Holo (4un)', img: 'https://lojaminasdepresentes.com.br/media/catalog/product/cache/1/thumbnail/1200x1400/9df78eab33525d08d6e5fb8d27136e95/c/d/cdpp120001-1-b_1.jpg', desc: 'Um conjunto de quatro jogos americanos holográficos com o logo do Corinthians, ótimo para refeições. Seu design chamativo e material resistente os tornam uma opção elegante e durável para decorar sua mesa.', quant: '01', valor: 'R$ 32,90' },
    { id: 21, nome: 'Pasta notebook Vasco', img: 'https://http2.mlstatic.com/D_NQ_NP_775886-MLB41524078636_042020-O.webp', desc: 'Uma pasta de notebook estilosa com o logo do Vasco, perfeita para a escola ou o trabalho. Seu design moderno e funcional a torna ideal para transportar seu laptop e documentos com estilo.', quant: '01', valor: 'R$ 39,90' },
    { id: 22, nome: 'Capacete Bike Poker', img: 'https://imgcentauro-a.akamaihd.net/1366x1366/M0BRQJ32.jpg', desc: 'Um capacete de bicicleta de alta qualidade da Poker, projetado para segurança e estilo. Seu design aerodinâmico e material resistente o tornam uma escolha ideal para ciclistas que buscam proteção e conforto.', quant: '02', valor: 'R$ 149,90' },
    { id: 23, nome: 'Capacete Bike Vollo', img: 'https://a-static.mlcdn.com.br/450x450/capacete-esportivo-de-protecao-skate-patins-bike-cinza-vollo/niteroisports/nc02vol00g/1b2da499d868fd8992b5daad3ec3fd69.jpeg', desc: 'Um capacete de bicicleta durável da Vollo, perfeito para entusiastas do ciclismo. Seu design moderno e sistema de ventilação eficiente o tornam uma opção segura e confortável para suas aventuras de bicicleta.', quant: '01', valor: 'R$ 89,90' },
    { id: 24, nome: 'Handgrip Poker 2-10Kg', img: 'https://alesportes.showdeprecos.com.br/_core/_uploads//2024/03/1629110324fegji28kfb.png', desc: 'Um versátil handgrip para treinamento de força, ajustável de 2 a 10 kg. Seu design ergonômico e faixas de resistência graduadas o tornam uma ferramenta eficaz para exercícios de mãos e antebraços.', quant: '01', valor: 'R$ 00,00' },
    { id: 25, nome: 'Roda Abdominal Poker', img: 'https://imgcentauro-a.akamaihd.net/1366x1366/M0I03B34A1.jpg', desc: 'Uma roda abdominal projetada para exercícios eficazes de core. Seu design robusto e rolamentos suaves a tornam uma opção ideal para fortalecer e definir seus músculos abdominais.', quant: '01', valor: 'R$ 99,90' },
    { id: 26, nome: 'Faixa Preta Yama C/Ponteira vermelha', img: '/imagens/teste.jpg', desc: 'Uma faixa preta com pontas vermelhas, perfeita para praticantes de artes marciais. Seu design tradicional e material resistente a tornam uma escolha adequada para treinamento e competições. Tamanho: 4t', quant: '02', valor: 'R$ 30,00' },
    { id: 27, nome: 'Faixa Preta Yama S/Ponteira', img: '/imagens/teste.jpg', desc: 'Uma faixa preta clássica para treinamento de artes marciais. Seu design simples e material de alta qualidade a tornam uma opção confiável para praticantes de todos os níveis. Tamanho 3t', quant: '01', valor: 'R$ 30,00' },
    { id: 28, nome: 'Faixa Shinai laranja', img: 'https://imgcentauro-a.akamaihd.net/1366x1366/M0H1TR11.jpg', desc: 'Ideal para prática em artes marciais. Seu design colorido e material durável o tornam uma escolha atraente e funcional para treinos. Tamanho 2t, Tamanho 3t', quant: '01 (3T) | 02 (2T)', valor: 'R$ 30,00' },
    { id: 29, nome: 'Faixa Shinai laranja C/Ponteira preta', img: 'https://images.tcdn.com.br/img/img_prod/860336/90_faixa_de_jiu_jitsu_laranja_especial_shiroi_3741_1_a349fb246b2bafdc41e27f9e460c6e7b.png', desc: 'Faixa laranja com uma ponta preta, projetado para treinamento de artes marciais. Seu design único e material resistente o tornam uma opção interessante para praticantes. Tamanho 2t', quant: '01', valor: 'R$ 30,00' },
    { id: 30, nome: 'Faixa Shinai Verde C/Ponteira', img: 'https://http2.mlstatic.com/D_693672-MLB31127522886_062019-O.jpg', desc: 'Faixa verde com uma ponta, adequado para prática de artes marciais. Seu design chamativo e material de alta qualidade o tornam uma escolha versátil para treinos. Tamanho 4t, Tamanho 3t, Tamanho 2t', quant: '03 (T4) | 02 (T3) | 02 (T2)', valor: 'R$ 30,00' },
    { id: 31, nome: 'Faixa Shinai Verde S/Ponteira', img: 'https://imgcentauro-a.akamaihd.net/1300x1300/M0H1TR07.jpg', desc: '(PRODUTO COM AVARIA CONFORME IMAGEM) Faixa verde sem ponta, projetado para treinamento. Seu design simples e material durável o tornam uma opção confiável para praticantes de artes marciais. Tamanho 2t', quant: '01', valor: 'R$ 30,00' },
    { id: 32, nome: 'Tornozeleira hidrolight', img: 'https://images-americanas.b2w.io/produtos/2779137894/imagens/tornozeleira-estabilizador-tornozelo-hidrolight-lesao-dor-pe-compreensao-melhora-sensacao-estabilidade-da-articulacao/2779137915_1_large.jpg', desc: 'Uma tornozeleira hidrolight disponível em vários tamanhos, perfeita para suporte durante atividades. Seu design ergonômico e material respirável proporcionam conforto e estabilidade para seus tornozelos. Tamanho M', quant: '02 Cinza M | 01 Preto M | 02 Preto PP', valor: 'R$ 49,90' },
    { id: 33, nome: 'Joelheira cross hidrolight', img: 'https://images.tcdn.com.br/img/img_prod/1025931/joelheira_cross_preta_h85_hidrolight_1467_2_e87a5e57df5f122741193a46e4cde25b.jpg', desc: 'Uma joelheira cross projetada para conforto e suporte durante esportes. Seu design envolvente e material de alta qualidade a tornam uma escolha ideal para atletas que buscam proteção e desempenho. Tamanho P Preto', quant: '01', valor: 'R$ 109,90' },
    { id: 34, nome: 'Cotoveleira cross hidrolight', img: 'https://images.tcdn.com.br/img/img_prod/964637/90_cotoveleira_ajustavel_hidrolight_659_1_b883f10a27a7edfc400c7afa5c6fd182.jpg', desc: 'Uma cotoveleira confortável, ideal para esportes e recuperação. Seu design ergonômico e material respirável proporcionam suporte e alívio para seus cotovelos durante atividades.', quant: '01 Preto M | 01 Preto G', valor: 'R$ 00,00' },
    { id: 35, nome: 'Kimono Yama azul Reforçado Judo A3 C/Faixa T4', img: 'https://images.tcdn.com.br/img/img_prod/860336/kimono_jiu_jitsu_yama_plus_azul_royal_adulto_unissex_2329_1_20200930160234.jpg', desc: 'Perfeito para treinamento e competições. Seu design robusto e corte atlético o tornam uma escolha ideal para judocas que buscam desempenho e durabilidade.', quant: '01', valor: 'R$ 00,00' },
    { id: 36, nome: 'Kimono Shinai azul A3', img: 'https://imgcentauro-a.akamaihd.net/1300x1300/M0H1TN04.jpg', desc: 'Projetado para conforto e flexibilidade. Seu design tradicional e material de alta qualidade o tornam uma opção confiável para praticantes.', quant: '01', valor: 'R$ 229,90' },
    { id: 37, nome: 'Kimono Taenkwondo Yama Branco+Preto C/Faixa A1', img: 'https://down-br.img.susercontent.com/file/sg-11134201-7rdxb-ly3sb530011899', desc: 'Ideal para praticantes. Seu design elegante e material resistente o tornam uma escolha adequada para treinamento e competições.', quant: '02', valor: 'R$ 179,90' },
    { id: 38, nome: 'Kimono Taenkwondo Yama A1 Branco S/Faixa A1', img: 'https://images.tcdn.com.br/img/img_prod/860336/kimono_judo_yama_master_branco_adulto_unissex_2336_1_20200930160304.jpg', desc: ' Perfeito para treinamento. Seu design simples e material de alta qualidade o tornam uma opção confiável para praticantes.', quant: '01', valor: 'R$ 159,90' },
    { id: 39, nome: 'Kimono Taenkwondo Yama A1 Branco S/Faixa M2', img: 'https://images.tcdn.com.br/img/img_prod/860336/kimono_judo_yama_especial_branco_adulto_unissex_2334_1_20200930160246.jpg', desc: 'Projetado para várias necessidades de treinamento. Seu design versátil e material resistente o tornam uma escolha ideal para praticantes de todos os níveis.', quant: '01', valor: 'R$ 139,90' },
    { id: 40, nome: 'Cotoveleira pre indoor Poker', img: 'https://images.tcdn.com.br/img/img_prod/671591/cotoveleira_pro_indoor_06454_5577_1_39251920a68597ff5c123d0c02f967cb_20220519183656.jpg', desc: 'Uma cotoveleira projetada para esportes indoor, disponível em diferentes tamanhos. Seu design ergonômico e material de alta qualidade proporcionam suporte e proteção para seus cotovelos durante atividades em ambientes fechados. Tamanho P', quant: '02 P | 01 G', valor: 'R$ 64,90' },
    { id: 41, nome: 'Saco gym Speedo', img: 'https://http2.mlstatic.com/D_NQ_NP_647939-MLU77962656079_072024-O.webp', desc: 'Uma bolsa de ginástica da Speedo, perfeita para carregar seus itens essenciais de treino. Seu design espaçoso e material durável a tornam uma escolha prática e estilosa para sua rotina de exercícios.', quant: '01', valor: 'R$ 00,00' },
    { id: 42, nome: 'Belize Snorkel Speedo', img: 'https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/21/65/21651_snorkel-speedo-belize_m2_636433366871017432.jpg', desc: 'Um snorkel da Speedo, ótimo para aventuras subaquáticas. Seu design ergonômico e material resistente a água o tornam uma opção confiável para explorar o mundo submerso.', quant: '01', valor: 'R$ 00,00' },
    { id: 43, nome: 'Luva de treino VOLLO', img: 'https://vollo.vtexassets.com/arquivos/ids/161169/VP1102-G-Luva-Musculacao-Vollo-Exemplo-Uso-03-1200px.jpg?v=638488896946700000', desc: 'Luvas de treino da VOLLO, projetadas para conforto e proteção. Seu design ergonômico e material respirável proporcionam suporte e segurança para suas mãos durante exercícios intensos.', quant: '02 P', valor: 'R$ 00,00' },
    { id: 44, nome: 'Luva neoprene C/Munhequeira Poker', img: 'https://down-br.img.susercontent.com/file/b8cb105a5caacb3f76f8a7f16bba08af', desc: 'Luvas de neoprene com suporte para o punho, ideais para vários esportes. Seu design envolvente e material resistente as tornam uma escolha versátil para atletas que buscam proteção e estabilidade.', quant: '01 M | 02 P', valor: 'R$ 85,90' },
    { id: 45, nome: 'Sapatinho babylook Flamengo rosa', img: 'https://flamengo.vteximg.com.br/arquivos/ids/156408-1000-1000/chuteira-rosa-flamengo.jpg?v=636328821966830000', desc: 'Um fofo sapatinho do Flamengo rosa para bebês, perfeito para os pequenos. Seu design delicado e material macio proporcionam conforto e estilo para os pezinhos dos bebês.', quant: '01 P | 1 G', valor: 'R$ 00,00' },
    { id: 46, nome: 'Sapatinho babylook Flamengo vermelho', img: 'https://http2.mlstatic.com/D_851480-MLB76960447340_062024-C.jpg', desc: 'Adoráveis sapatinhos vermelhos para bebês Flamenguistas, projetados para conforto e estilo. Seu design atraente e material de alta qualidade os tornam uma escolha perfeita para os pequenos fashionistas.', quant: '02', valor: 'R$ 00,00' }
];

//index
function inicializarProdutos(filtro = '') {
    const cprodutos = document.getElementById('product-list');
    const produtosOrdenados = ordenarProdutosPorPreco(itens);

    //pesquisa
    const produtosFiltrados = produtosOrdenados.filter(produto =>
        produto.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    cprodutos.innerHTML = produtosFiltrados.map(produto => `
        <div class="bg-white rounded-lg md:p-6 p-4 flex flex-col drop-shadow-md">
            <div class="mx-auto relative bg-gradient-to-t from-[#d4cdc5] to-[#f4f4f2] mb-2 w-full h-48 p-2 rounded-lg"> 
                <img src="${produto.img}" class="mx-auto relative rounded-lg object-cover w-full h-full"></img>
            </div>
            <h1 class="text-black-500 text-lg">${produto.nome}</h1>
            <h2 class="text-red-600 font-bold text-lg">${produto.valor}</h2>
            <a href="product.html?id=${produto.id}" class="flex w-fit px-2 py-1 rounded-lg transition ease-in-out delay-120 bg-[#5b88a5] hover:bg-[#243a69] text-white duration-300">Ver Detalhes</a>
        </div>
    `).join('');
}


function inicializarProdutoEspecifico() {
    const id = getProductIdFromUrl();
    if (id !== null) {
        const produto = itens.find(item => item.id == id);
        const cprodutos = document.getElementById('product-list');

        if (produto) {
            cprodutos.innerHTML = `
                <div class="bg-white rounded-lg md:p-6 p-4 flex flex-col drop-shadow-md relative">
                    <div class="absolute -left-3 -top-3 md:-left-2 md:-top-2 rounded-full z-30 flex items-center justify-center">
                        <a href="index.html" class="w-full h-full">
                            <ion-icon name="close" class="bg-[#5b88a5] text-white hover:text-[#243a69] px-2 py-2 rounded-full hover:bg-[#d4cdc5] text-3xl cursor-pointer"></ion-icon>
                        </a>
                    </div>
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
            cprodutos.innerHTML = '<p>Produto não encontrado!</p>';
        }
    }
}


function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

//produtos por preço
function ordenarProdutosPorPreco(produtos) {
    return produtos.sort((a, b) => parseFloat(b.valor.replace('R$ ', '').replace(',', '.')) - parseFloat(a.valor.replace('R$ ', '').replace(',', '.')));
}


function configurarBusca() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchValue = searchInput.value;
            inicializarProdutos(searchValue);
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split("/").pop();
    if (page === 'index.html') {
        inicializarProdutos(); 
        configurarBusca(); 
    } else if (page === 'product.html') {
        inicializarProdutoEspecifico(); 
    }
});