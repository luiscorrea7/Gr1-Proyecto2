
const getProducts = async () => {
  try {
    const productResp = await fetch('http://localhost:3000/products')
    const products = await productResp.json();
    return products;
  } catch (error) {
    console.log(error)
  }
}

const printItems = async () => {
  const productInfo = await getProducts();
  productInfo.map((product) => {
    let containerCard = document.getElementById('cardContainer');
    let card = document.createElement('div');
    card.classList = `card col-3 m-3 g-0 justify-content-center cardProduct ${product.category}`
    card.innerHTML =`
    <img src="https://picsum.photos/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h4 class="card-title">${product.category}</h4>
      <h4 class="card-title">${product.price}</h4>
      <a href="#" class="btn btn-primary">comprar</a>
    </div>`;
    containerCard.appendChild(card);
  })
}

printItems();

const printAllCategories = () => {
  let elementos = document.querySelectorAll('.card')
  elementos.forEach(x => {
    x.style.display = 'flex';
  });
}

const filterCategory1 = () => {
  let elementos = document.querySelectorAll('.hola2')
  elementos.forEach(x => {
    x.style.display = 'none';
  });
}

const filterCategory2 = () => {
  let elementos = document.querySelectorAll('.hola')
  elementos.forEach(x => {
    x.style.display = 'none';
  });
}