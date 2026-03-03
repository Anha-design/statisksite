const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}&limit=30`;

const container = document.querySelector("#productlist");

document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filter));

let allData;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      showData(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;

  if (valgt === "All") {
    showData(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender === valgt);
    showData(udsnit);
  }
}

function showData(json) {
  let markup = "";
  console.log(json);
  json.forEach((product) => {
    console.log(product);

    markup += `
       <article class="smallProduct ${product.soldout && "soldout"}">
        <a href="product.html?id=${product.id}" class="product-link">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt="puma rygsæk"
          />
          <span class="sold">Sold out</span>
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">Bag | Puma</p>
          <p class="price">DKK <span class="${product.discount && "sale"}">${product.price}</span>,-</p>
         <div class="discounted">
          <p>Now DKK <span>${Math.round(product.price - (product.price * product.discount) / 100)}</span>,-</p>
            ${product.discount ? `<p class="redpricebox"><span>${product.discount}</span>%</p>` : ""}
          </div>
        </a>
      </article>  `;
  });
  container.innerHTML = markup;
}

getData();
