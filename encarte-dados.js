/* ================================================================
   ENCARTE DO MÊS: só mexa aqui.
   Para trocar o mês, mude id, mes, titulo, validade e a lista de produtos.
   O id novo faz o carrinho antigo de cada cliente sumir sozinho.

   tipo de cada produto:
     "livre"    não medicamento. Aparece com foto e entra no pedido.
     "mip"      remédio isento de prescrição. Aparece só na lista da
                Farmácia, com preço cheio e de oferta, sem foto e sem
                botão de pedido (política do WhatsApp e RDC 96/2008).
     "receita"  remédio de receita. Nunca aparece na página.
     "conferir" classificação ainda não confirmada. Não aparece.
   Quem dá a palavra final sobre o tipo de cada remédio é o farmacêutico.

   foto: caminho da imagem, ex.: "fotos/fralda-mili.jpg". Vazio mostra
   um bloco colorido com a marca. Foto tirada na loja ou cedida pelo
   distribuidor, nunca baixada de site de outra farmácia.
   ================================================================ */
window.ENCARTE = {
  id: "2026-10",
  mes: "outubro",
  titulo: "Ofertas de outubro",
  validade: "Válido em outubro de 2026, enquanto durar o estoque.",
  cidade: "Monte Carlo/SC",
  whatsapp: "4935461478",   // número que recebe os pedidos, com DDD
  mostrarFarmacia: false,   // true mostra a lista de remédios isentos (depois que o farmacêutico conferir)
  prazoRetirada: "",        // ex.: "até o fim do dia seguinte"
  responsavel: "",          // ex.: "Farmacêutico responsável: Nome Sobrenome, CRF/SC 00000"
  empresa: "",              // ex.: "Razão social · CNPJ 00.000.000/0001-00 · AFE 0.00000-0"

  lojas: [
    { id: "kidi",  nome: "Kidi Farma",  endereco: "Rod. SC-452, nº 1756", prefixo: "K" },
    { id: "lider", nome: "Líder Farma", endereco: "Rod. SC-452, nº 1643", prefixo: "L" }
  ],

  categorias: [
    { id: "bebe",    nome: "Fraldas e bebê" },
    { id: "higiene", nome: "Higiene" },
    { id: "cabelo",  nome: "Cabelo" },
    { id: "pele",    nome: "Pele" }
  ],

  produtos: [
    /* ---------- perfumaria (entra no pedido) ---------- */
    { id: "fralda-mili-giga", tipo: "livre", categoria: "bebe", destaque: true,
      marca: "Mili", nome: "Fralda Mili Giga", apresentacao: "Pacote Giga",
      variacoes: ["M · 78 unidades", "G · 72 unidades", "XG · 66 unidades", "XXG · 56 unidades"],
      de: 78.00, por: 64.90, foto: "" },
    { id: "kit-seda", tipo: "livre", categoria: "cabelo", destaque: true,
      marca: "Seda", nome: "Kit Seda Shampoo + Condicionador", apresentacao: "shampoo 300 ml e condicionador 190 ml",
      de: 21.90, por: 15.90, foto: "" },
    { id: "toalhas-mili", tipo: "livre", categoria: "bebe",
      marca: "Mili", nome: "Toalhas Umedecidas Mili Love & Care", apresentacao: "96 unidades",
      de: 15.90, por: 9.90, foto: "" },
    { id: "cotonetes-mili", tipo: "livre", categoria: "bebe",
      marca: "Mili", nome: "Cotonetes Mili Love & Care", apresentacao: "75 unidades",
      de: 4.50, por: 3.50, foto: "" },
    { id: "rexona-aerossol", tipo: "livre", categoria: "higiene",
      marca: "Rexona", nome: "Desodorante Rexona Aerossol", apresentacao: "150 ml",
      de: 20.90, por: 13.90, foto: "" },
    { id: "sabonete-nivea", tipo: "livre", categoria: "higiene",
      marca: "Nivea", nome: "Sabonete Nivea", apresentacao: "85 g",
      de: 3.90, por: 2.99, foto: "" },
    { id: "bic-comfort-3", tipo: "livre", categoria: "higiene",
      marca: "BIC", nome: "Aparelho de barbear BIC Comfort 3", apresentacao: "1 unidade",
      de: 6.90, por: 5.90, foto: "" },
    { id: "tenys-pe", tipo: "livre", categoria: "higiene",
      marca: "Baruel", nome: "Tenys Pé Baruel", apresentacao: "100 g",
      de: 14.90, por: 9.90, foto: "" },
    { id: "intimus-16", tipo: "livre", categoria: "higiene",
      marca: "Intimus", nome: "Absorvente Intimus", apresentacao: "16 unidades",
      de: 14.90, por: 10.90, foto: "" },
    { id: "nivea-facial", tipo: "livre", categoria: "pele",
      marca: "Nivea", nome: "Nivea Facial", apresentacao: "100 g",
      de: 37.90, por: 29.90, foto: "" }

    /* Remédios entram aqui depois que o farmacêutico conferir.
       Rascunho de outubro em _rascunho/remedios-outubro.js (não vai para o site). */
  ]
};
