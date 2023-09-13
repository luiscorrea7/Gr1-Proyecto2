const getAllProducts = async () => {
  try {
    const productResp = await fetch('http://localhost:3000/products');
    const products = await productResp.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}



const printAllProducts = async () => {
  const allItemsInfo = await getAllProducts();
  const productsContainer = document.getElementById('productContainer');
  allItemsInfo.map((items) => {
    let cardProduct = document.createElement('div');
    cardProduct.classList ="card cardHorizontal mb-3 col-12 col-md-5 col-lg-6 text-bg-dark p-0"
    cardProduct.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4 p-2">
        <img src="${items.img}" class="img-fluid imgProdAll" alt="imagen ${items.name}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-center fs-2">${items.name}</h5>
          <p class="card-text text-center mt-2 fs-4">${items.category}</p>
          <p class="card-text text-center mt-5 fs-3">$${items.price}</p>
        </div>
      </div>
    </div>`;
    productsContainer.appendChild(cardProduct);
  })
}

printAllProducts();