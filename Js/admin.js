
const getProducts = async () => {
  try {
    const productResp = await fetch('http://localhost:3000/products?_limit=9')
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
  <div class="container containerDetails row justify-content-center">
          <div class="col-12 col-lg-12 p-2 row justify-content-center">
            <div class="imgFatherDetail p-2 col-12 col-lg-8">
              <img src="${itemData.img}" alt="" class="imgDetail">
            </div>
            <div class="imgFatherDetail2 d-none d-lg-flex flex-column align-content-center justify-content-between p-2 col-4">
              <img src="${itemData.img2}" alt="" class="imgDetail2">
              <img src="${itemData.img3}" alt="" class="imgDetail2">
              <img src="${itemData.img4}" alt="" class="imgDetail2">
            </div>
          </div>
          <div class="col-12 col-lg-6 p-2 justify-content-center detailDesc mb-2 d-none d-lg-block">
            <p class="fs-4 text-center">${itemData.description}</p>
          </div>
          <div class="col-12 col-lg-6 p-2 justify-content-center detailData mb-2">
            <div class="d-flex flex-column text-center">
              <div><h3 class="fs-4 fw-bold mb-3">-Nombre: ${itemData.name}</h3></div>
              <div><h3 class="fs-4 fw-bold mb-3">-Precio: $${itemData.price}</h3></div>
              <div><h3 class="fs-4 fw-bold mb-3">-Categoria: ${itemData.category}</h3></div>
              <div><h3 class="fs-4 fw-bold mb-3">-Disponibles: ${itemData.stock}</h3></div>
              <div><h3 class="fs-4 fw-bold mb-3">-ID: ${itemData.id}</h3></div>
              <div class="mt-5"><button class="btn btnCustomCard">Comprar</button></div>
              <div class="mt-1"><button class="btn btnCustomCard" onclick="printItems()">Salir</button></div>
            </div>
          </div>
        </div>
  `
  containerCard.appendChild(divDetail);
}


const printItems = async () => {
  const productInfo = await getProducts();
  let containerCard = document.getElementById('cardContainer');
  containerCard.innerHTML=""
  productInfo.map((product) => {
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

btncAll.addEventListener('click', printItems, false)
// Categoria 1
let btnC1 = document.getElementById('btnCategory1')
let btnC2 = document.getElementById('btnCategory2')
let btnC3 = document.getElementById('btnCategory3')
let btnC4 = document.getElementById('btnCategory4')
let btnC5 = document.getElementById('btnCategory5')

const filterCategory = async(category) => {
  const catInfo =  await fetch(`http://localhost:3000/products?category=${category}`)
  const catFinal = await catInfo.json();
  let containerCard = document.getElementById('cardContainer');
  containerCard.innerHTML="";
  containerCard.innerHTML=`<h3 class="text-center text-white fs-4">${category}</h3>`
  catFinal.map((catItems) => {
    let card = document.createElement('div');
    card.classList =`card col-12 col-md-5 col-lg-3 justify-content-center my-4 cardProduct ${catItems.category} animate__animated`
    card.innerHTML =`
    <img src="${catItems.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h3>${catItems.name}</h3>
      <p class="productPrice fs-4 fw-bolder">$${catItems.price}</p>
      <button class="btn btnCustomCard" onclick="printItemDetails(${catItems.id})">Comprar</button>
    </div>`;
    containerCard.appendChild(card);
    card.addEventListener('mousemove', (e) => {
      card.classList.add('animate__pulse')
    })
  })
}

btnC1.addEventListener('click', e => filterCategory('Auriculares'), false)
btnC2.addEventListener('click', e => filterCategory('Celulares'), false)
btnC3.addEventListener('click', e => filterCategory('Teclados'), false)
btnC4.addEventListener('click', e => filterCategory('Netbooks'), false)
btnC5.addEventListener('click', e => filterCategory('Mouses'), false)

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
  const initialInfo = await fetch("http://localhost:3000/products");
  const getItemInfo = await initialInfo.json()
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
 