
const getProducts = async () => {
  try {
    const productResp = await fetch('http://localhost:3000/products?_limit=10')
    const products = await productResp.json();
    return products;
  } catch (error) {
    console.log(error)
  }
}

const printItemDetails = async (id) => {
  const itemEntries = await fetch(`http://localhost:3000/products/${id}`);
  const itemData = await itemEntries.json();
  let containerCard = document.getElementById('cardContainer');
  containerCard.innerHTML="";
  let divDetail = document.createElement('div');
  divDetail.classList = 'd-flex justify-content-center m-0 p-0'
  divDetail.innerHTML = `
  <div class="container containerDetails row">
          <div class="col-12 col-lg-12 p-2">
            <div class="imgFatherDetail p-2">
              <img src="${itemData.img}" alt="" class="imgDetail">
            </div>
          </div>
          <div class="col-12 col-lg-6 p-2 justify-content-center">
            <p class="fs-4 fw-bolder">${itemData.description}</p>
          </div>
          <div class="col-12 col-lg-6 p-2 justify-content-center">
            <div class="">
              <div><h3 class="fs-4 fw-bold">-Nombre: ${itemData.name}</h3></div>
              <div><h3 class="fs-4 fw-bold">-Precio: ${itemData.price}</h3></div>
              <div><h3 class="fs-4 fw-bold">-Categoria: ${itemData.category}</h3></div>
              <div><h3 class="fs-4 fw-bold">-Disponibles: ${itemData.stock}</h3></div>
              <div class="mt-5"><button class="btn btnCustomCard">Comprar</button></div>
            </div>
          </div>
        </div>
  `
  containerCard.appendChild(divDetail)
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
      <h3>${product.name}</h3>
      <p class="productPrice fs-4 fw-bolder">$${product.price}</p>
      <button class="btn btnCustomCard" onclick="printItemDetails(${product.id})">Comprar</button>
    </div>`;
    containerCard.appendChild(card);
    card.addEventListener('mousemove', (e) => {
      card.classList.add('animate__pulse')
    })
  })
}

printItems()


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

// borrar item
const deleteItemOfList = async (idItem) => {
  await fetch(`http://localhost:3000/products/${idItem}`, {
    method: 'DELETE',
  });
}

// crear item
const itemFormData = document.getElementById('formProduct1');

const createItem = async (e) => {
  e.preventDefault();
  const dataItem = new FormData(e.target);
  const finalItem = Object.fromEntries(dataItem.entries());
  await fetch('http://localhost:3000/products', {
  method: 'POST',
  body: JSON.stringify({
    name: `${finalItem.Pname}`,
    price: `${parseInt(finalItem.Pprice)}`,
    description: `${finalItem.Pdesc}`,
    img: `${finalItem.Pimg}`,
    stock: `${parseInt(finalItem.Pstock)}`,
    category: `${finalItem.Pcats}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

itemFormData.addEventListener('submit', createItem, false)

// edit item

const editItemData = document.getElementById('formEdit1');

const editItem = async (e) => {
  e.preventDefault();
  const editData = new FormData(e.target);
  const finalEditData = Object.fromEntries(editData.entries());
  console.log(finalEditData)
  fetch(`http://localhost:3000/products/${finalEditData.eID}`, {
  method: 'PUT',
  body: JSON.stringify({
    name: `${finalEditData.eName}`,
    price: `${parseInt(finalEditData.ePrice)}`,
    description: `${finalEditData.eDesc}`,
    img: `${finalEditData.eImg}`,
    stock: `${parseInt(finalEditData.eStock)}`,
    category: `${finalEditData.eCat}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

editItemData.addEventListener('submit', editItem, false);

// lista adminpanel
const createItemList = async () => {
  getItemInfo = await getProducts();
  getItemInfo.map((item) => {
    let listAdmin = document.getElementById('listAdmin')
    let itemList = document.createElement('li');
    itemList.classList = 'd-flex justify-content-between align-content-center mb-3 text-white listTitle'
    itemList.innerHTML = `<p class="fw-bolder fs-6 m-0 p-1">ID:${item.id}</p>
    <p class="fw-bold fs-6 m-0 p-1">${item.name}</p>
     <div>
      <button class="btn btn-sm customOffcanvaBtn" onclick="deleteItemOfList(${item.id})">X</button>
     </div>`
    listAdmin.appendChild(itemList)
  })
};

createItemList();
 