
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
    card.classList =`card col-12 col-md-5 col-lg-3 justify-content-center my-4 cardProduct ${product.category} animate__animated`
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

// lista adminpanel

const createItemList = async () => {
  getItemInfo = await getProducts();
  getItemInfo.map((item) => {
    console.log(item.name)
    let listAdmin = document.getElementById('listAdmin')
    let itemList = document.createElement('li');
    itemList.classList = 'd-flex justify-content-between align-content-center mb-3 text-white listTitle'
    itemList.innerHTML = `<p class="fw-bolder fs-6 m-0 p-1">ID:${item.id}</p>
    <p class="fw-bold fs-6 m-0 p-1">${item.name}</p>
     <div>
      <button class="btn btn-sm customOffcanvaBtn">editar</button>
      <button class="btn btn-sm customOffcanvaBtn">eliminar</button>
     </div>`
    listAdmin.appendChild(itemList)
  })
};

createItemList()