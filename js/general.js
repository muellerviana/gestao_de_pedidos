let allProdIdent = document.getElementById('newProduct')
let hideAllProducts = document.getElementById('allProducts')

function showNewProduct(){
  allProdIdent.removeAttribute('hidden');
  hideAllProducts.setAttribute('hidden','true');
}

let price = document.getElementById("price").value

function addProduct(){
  alert(price)
}


