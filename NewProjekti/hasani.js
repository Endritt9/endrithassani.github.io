const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SUPERFLY",
    price: 179,
    colors: [
      {
        code: "black",
        img: "./hasani.img/superfly.png",
      },
      {
        code: "darkblue",
        img: "./hasani.img/superfly.png",
      },
    ],
  },
  {
    id: 2,
    title: "MERCURIAL",
    price: 159,
    colors: [
      {
        code: "lightgray",
        img: "./hasani.img/mercurial.png",
      },
      {
        code: "green",
        img: "./hasani.img/mercurial.png",
      },
    ],
  },
  {
    id: 3,
    title: "PHANTOM",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./hasani.img/phantom.png",
      },
      {
        code: "green",
        img: "./hasani.img/phantom.png",
      },
    ],
  },
  {
    id: 4,
    title: "VAPOR",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./hasani.img/vapor.png",
      },
      {
        code: "lightgray",
        img: "./hasani.img/vapor.png",
      },
    ],
  },
  {
    id: 5,
    title: "TIEMPO",
    price: 129,
    colors: [
      {
        code: "gray",
        img: "./hasani.img/tiempo.png",
      },
      {
        code: "black",
        img: "./hasani.img/tiempo.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".ehproductImg");
const currentProductTitle = document.querySelector(".ehproductTitle");
const currentProductPrice = document.querySelector(".ehproductPrice");
const currentProductColors = document.querySelectorAll(".ehcolor");
const currentProductSizes = document.querySelectorAll(".ehsize");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".ehproductButton");
const payment = document.querySelector(".ehpayment");
const close = document.querySelector(".ehclose");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
;

function changeBoots(nr){
  document.getElementById("wrapper").style.translate= -20*nr+"%";
}