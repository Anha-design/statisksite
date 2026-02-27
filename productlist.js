const container = document.querySelector("#productlist");

const endpoint = `https://kea-alt-del.dk/t7/api/products`;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  console.log(json);
  let markup = "";

  json.forEach((product) => {
    console.log(product);

    markup += `
       <article class="smallProduct">
        <a href="product.html" class="product-link">
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

// const endpoint = "https://kea-alt-del.dk/t7/api/products";
// const container = document.querySelector("#productlist");

// function getData() {
//   fetch(endpoint)
//     .then((response) => response.json())
//     .then(showData);
// }

// function showData(data) {
//   container.innerHTML = "";

//   data.forEach((product) => {
//     const hasDiscount = product.discount > 0;
//     const isSoldOut = product.soldout;

//     const newPrice = hasDiscount
//       ? Math.round(product.price * (1 - product.discount / 100))
//       : product.price;

//     container.innerHTML += `
//       <article class="smallProduct">
//         <a href="product.html?id=${product.id}" class="product-link">

//           ${isSoldOut ? `<span class="soldout">Sold out</span>` : ""}

//           <img
//             class="${isSoldOut ? "soldoutimage" : ""}"
//             src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
//             alt="${product.productdisplayname}"
//           />

//           <h3>${product.productdisplayname}</h3>
//           <p class="subtle">${product.articletype} | ${product.brandname}</p>

//           ${
//             hasDiscount
//               ? `
//                 <p class="price">
//                   DKK <span class="sale">${product.price}</span>,-
//                 </p>
//                 <div class="discounted">
//                   <p>Now DKK <span>${newPrice}</span>,-</p>
//                   <p class="redpricebox">${product.discount}%</p>
//                 </div>
//               `
//               : `
//                 <p class="price">
//             //       DKK <span>${product.price}</span>,-</p>
//             //   `
//           }

//         </a>
//       </article>
//     `;
//   });
// }

// getData();
