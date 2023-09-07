
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
    card.classList =`card col-4 m-3 g-0 justify-content-center cardProduct ${product.category} animate__animated`
    card.innerHTML =`
    <img src="${product.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h3 class="productName fw-bold fs-4">${product.name}</h3>
      <p class="productCategory fs-5">${product.category}</p>
      <p class="productPrice fs-5 fw-bolder">$${product.price}</p>
      <a href="#" class="btn btnCustomCard">ver</a>
    </div>`;
    containerCard.appendChild(card);
    card.addEventListener('mousemove', (e) => {
      card.classList.add('animate__pulse')
    })
  })
}

printItems();
// Categoria todos
let btncAll = document.getElementById('btnCategoryAll')

const printAllCategories = () => {
  let elementos = document.querySelectorAll('.card')
  elementos.forEach(x => {
    x.style.display = 'flex';
  });
}

btncAll.addEventListener('click', printAllCategories, false)
// Categoria 1
let btnC1 = document.getElementById('btnCategory1')

const filterCategory1 = () => {
  let elementos = document.querySelectorAll('.hola2')
  elementos.forEach(x => {
    x.style.display = 'none';
  });
}

btnC1.addEventListener('click', filterCategory1, false)
// Categoria 2
let btnC2 = document.getElementById('btnCategory2')

const filterCategory2 = () => {
  let elementos = document.querySelectorAll('.hola')
  elementos.forEach(x => {
    x.style.display = 'none';
  });
}

btnC2.addEventListener('click', filterCategory2, false)