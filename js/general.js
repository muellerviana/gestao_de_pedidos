const poductsList = [
  {
    code: 1001,
    product: "Super SMACH COMBO Programado - Hamburguer + Fritas",
    price: 55.00,
  },
  {
    code: 1002,
    product: "SMACH VariávelBurguer - Hamburguer + Fritas",
    price: 45.00,
  },
  {
    code: 1003,
    product: "SMACH BUG EM PROD – Hambúrguer meio torto",
    price: 25.00,
  },
  {
    code: 1004,
    product: "Combo Econômico SMACH Char 1 – Pão com Carne",
    price: 15.00,
  },
  {
    code: 1005,
    product: "Especial SMACH CSS – Hambúrguer colorido e alinhado",
    price: 65.00,
  },
  {
    code: 2001,
    product: "Refrigerante 350 ml",
    price: 8.00,
  },
  {
    code: 2002,
    product: "Água 500 ml",
    price: 5.00,
  },
  {
    code: 2003,
    product: "Suco 350 ml ",
    price: 7.00,
  },
  {
    code: 3001,
    product: "Sorvete 300 ml",
    price: 15.00,
  },
  {
    code: 3002,
    product: "Super SMACH COMBO Programado - Hamburguer + Fritas",
    price: 50.00,
  }
]

// trocar de Tela
let allProdIdent = document.getElementById('newProduct')
let hideAllProducts = document.getElementById('allProducts')

function showNewProduct(){
  allProdIdent.removeAttribute('hidden');
  hideAllProducts.setAttribute('hidden','true');
}