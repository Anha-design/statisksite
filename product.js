const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector("#productContainer");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${productId}`;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(renderProduct);
}

function renderProduct(json) {
  console.log(json);

  productContainer.innerHTML = `
    <div>
      <a class="back" href="productlist.html?category=${json.category}">Tilbage</a>
      <figure>
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp"
          alt="Produktbillede"
          class="productImage"
        />
        ${json.discount ? `<span class="saleLabel">Udsalg!</span>` : ""}
      </figure>
    </div>
    <section class="productDetails">
      <h2 class="productName">${json.productdisplayname}</h2>
      <div>
        <p class="articleType"><span class="bold">Type:</span> ${json.articletype}</p>
        <p class="productCategory"><span class="bold">Kategori:</span> ${json.category}</p>
        <p class="productPrice"><span class="bold">Pris:</span> ${json.price},-</p>
      </div>
      <button class="buyButton">Køb nu</button>
    </section>
  `;
}

getData();
