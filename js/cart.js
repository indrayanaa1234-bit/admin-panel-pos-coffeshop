const productGrid =
document.getElementById("productGrid");

function renderProducts(){

productGrid.innerHTML="";

products.forEach(product=>{

productGrid.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<div class="product-name">
${product.name}
</div>

<div class="product-bottom">

<div class="price">
Rp ${product.price.toLocaleString('id-ID')}
</div>

<button class="add-btn">
+
</button>

</div>

</div>

</div>

`;

});

}

renderProducts();