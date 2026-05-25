const productsContainer = document.getElementById('products');

fetch('assets/data/products.json')
.then(response => response.json())

.then(products => {

    products.forEach(product => {

        productsContainer.innerHTML += `

            <div class="card">

                <img src="${product.image}" alt="${product.name}">

                <div class="card-content">

                    <h3>${product.name}</h3>

                    <div class="card-bottom">

                        <span class="price">
                            Rp ${product.price.toLocaleString()}
                        </span>

                        <button class="add-btn">
                            +
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

});