const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}`;

const container = document.querySelector("#productlist");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  let markup = "";
  console.log(json);
  json.forEach((product) => {
    console.log(product);

    markup += `
       <article class="smallProduct">
        <a href="product.html?id=${product.id}" class="product-link">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt="puma rygsæk"
          />
          <span class="soldout">Sold out</span>
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">Bag | Puma</p>
          <p class="price">DKK <span class="sale">${product.price}</span>,-</p>
          <div class="discounted">
            <p>Now DKK <span>974</span>,-</p>
            <p class="redpricebox"><span>24</span>%</p>
          </div>
        </a>
      </article>  `;
  });
  container.innerHTML = markup;
}

getData();
