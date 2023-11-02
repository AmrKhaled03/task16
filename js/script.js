let cartCount = document.querySelector(".cart-count");
let asideBar = document.querySelector("aside");
let closeIcon = document.querySelector(".fa-x");
cartCount.onclick = () => {
  asideBar.classList.toggle("open");
};
closeIcon.onclick = () => {
  asideBar.classList.toggle("open");
};

// window.addEventListener("load", vanish);

// function vanish() {
//   let preLoader = document.querySelector(".preloader");
//   preLoader.classList.add("disappear");
// }

let span = document.querySelector(".up");

let elem = document.querySelector(".loader");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  elem.style.width = `${(scrollTop / height) * 100}%`;
});

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// cart items
// array of items
const items = [
  {
    id: 0,
    title: "Samsung watch4",
    price: 1500,
    img: "imgs/samsw.jpeg",
    amount: 1,
    kind: "watch",
    name: "p1",
    target: "p1",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 1,
    title: "Macbook pro 16 inch m2 max",
    price: 3800,
    img: "imgs/p7.jpeg",
    amount: 1,
    kind: "laptop",
    name: "p2",
    target: "p2",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 2,
    title: "Macbook pro 14 inch m2 pro",
    price: 3000,
    img: "imgs/p5.jpeg",
    amount: 1,
    kind: "laptop",
    name: "p3",
    target: "p3",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 3,
    title: "Huawaei gt3",
    price: 1000,
    img: "imgs/prod31.jpeg",
    amount: 1,
    kind: "watch",
    name: "p4",
    target: "p4",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 4,
    title: "Apple watch series 8",
    price: 2500,
    img: "imgs/p9.jpeg",
    amount: 1,
    kind: "watch",
    name: "p5",
    target: "p5",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 5,
    title: "Apple watch ultra",
    price: 3000,
    img: "imgs/p8.jpeg",
    amount: 1,
    kind: "watch",
    name: "p6",
    target: "p6",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 6,
    title: "Macbook pro 16 inch m1 pro",
    price: 3200,
    img: "imgs/p6.jpeg",
    amount: 1,
    kind: "laptop",
    name: "p7",
    target: "p7",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 7,
    title: "Huawaei Matebook",
    price: 1800,
    img: "imgs/prod4.jpeg",
    amount: 1,

    kind: "laptop",
    name: "p8",
    target: "p8",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 8,
    title: "Hp gaming",
    price: 2000,
    img: "imgs/prod5.jpeg",
    amount: 1,
    kind: "laptop",
    name: "p9",
    target: "p9",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 9,
    title: "Iphone 14 pro max",
    price: 1999,
    img: "imgs/prod1.jpeg",

    amount: 1,
    kind: "mobile",
    name: "p10",
    target: "p10",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 10,
    title: "Iphone 13",
    price: 900,
    img: "imgs/prod2.jpeg",

    amount: 1,
    kind: "mobile",
    name: "p11",
    target: "p11",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
  {
    id: 11,
    title: "Samsung s23 ultra",
    price: 1100,
    img: "imgs/prod3.jpeg",
    amount: 1,
    kind: "mobile",
    name: "p12",
    target: "p12",
    review:
      "fdjnkfsdfmkc,sd mcdsmdfcvnfdjkmscddvmfdnvjlmsc.,dsnlcm slfvc sakesleqwxklf",
  },
];

// localStorage.setItem("products", JSON.stringify(items));
let products = JSON.parse(localStorage.getItem("products")) || [];
/* render items */

let parentBoxs = document.querySelector(".parent-boxs");
// let currentItem = "";

function rednerItems() {
  items.forEach((item) => {
    parentBoxs.innerHTML += `
        <div class="box all ${item.kind} wow flip" data-name="${item.name}">
        <img src="${item.img}">
        <h4 class="product">${item.title}</h4>
        <h5 class="price"> $${item.price}.00</h5>
        <div class="cart" data-id="${item.id}">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
        `;
  });
}
rednerItems();

// render cartItems




let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
localStorage.setItem("cart", JSON.stringify(cartItems));





let parentCartBoxs = document.querySelector("tbody");
let currentCartItems = "";

function renderCartItems() {
  currentCartItems = "";
  cartItems.forEach((item) => {
    currentCartItems += `
        <tr>
        <td>${item.id}</td>
        <td><img src="${item.img}" alt="" srcset=""></td>
        <td>${item.title}</td>
        <td>
        <span class="btn" onclick="updateCartItem('increase','${
          item.id
        }')">+</span>
        <span class="amount">${item.amount}</span>
        <span class="btn"  onclick="updateCartItem('decrease','${
          item.id
        }')">-</span>
        </td>
        <td>${item.price}.00$</td>
        <td class="all-price">${item.price * item.amount}.00$</td>
        <td> <button onclick="delteCartItem(${
          item.id
        })" > Delete </button> </td>
  </tr>
        
        `;
  });
  parentCartBoxs.innerHTML = currentCartItems;
 
}
renderCartItems();

function getCartCount() {
  return cartItems.length;
}
function renderCartCount() {
  const cartCountElement = document.querySelector(".cart-count span");
  cartCountElement.innerHTML = getCartCount();
}
// add to cart
let btnsAdd = document.querySelectorAll(".cart");
var erro = document.getElementById("alarm");
var text = "";
btnsAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    let id = btn.dataset.id;
    items.find((item) => {
      if (item.id == id) {
        if (cartItems.some((cartItem) => cartItem.id == id)) {
          alert("product already exist");
        } else {
          cartItems.push(item);
          text = "Product Is Added";
          erro.innerHTML = text;
            localStorage.setItem("cart", JSON.stringify(cartItems)); 
        }
      }
    });
    renderCartItems();
    renderCartCount();
 
  });
});


// update cart
function updateCartItem(action, id) {
  cartItems.find((item) => {
    if (item.id == id) {
      if (action == "increase") {
        item.amount += 1;
      } else {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          alert("Amount Must Be 1 and more than it");
        }
      }
    }
    renderCartItems();
    renderCartCount();
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

// delete cart item
function delteCartItem(id) {
  cartItems = cartItems.filter((item) => item.id != id);
  renderCartItems();
  renderCartCount();
  localStorage.setItem("cart", JSON.stringify(cartItems));

  text = "";
  erro.innerHTML = text;
}

// delete all cart
function deleteAll() {
  cartItems = [];
  text = "";
  erro.innerHTML = text;
  localStorage.setItem("cart", "");
  renderCartItems();
  renderCartCount();
}
window.addEventListener("load", function () {
  renderCartItems();
  renderCartCount();
});
let switcherLis = document.querySelectorAll(".switcher li");
let filters = document.querySelectorAll(".box");

switcherLis.forEach((ele) => {
  ele.addEventListener("click", function () {
    // console.log(ele);
    switcherLis.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    filters.forEach((div) => {
      div.style.display = "none";
    });

    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  });
});

// change color
var darkMode = false;

if (localStorage.getItem("theme") === "dark") {
  darkMode = true;
} else if (localStorage.getItem("theme") === "light") {
  darkMode = false;
}

if (darkMode) {
  document.body.classList.toggle("dark");
}
function changeColor() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  let icon = document.querySelector(".ico");
  icon.classList.toggle("fa-toggle-on");
  icon.classList.toggle("fa-toggle-off");

  if (document.body.classList.contains("dark")) {
    document.getElementById("demo").innerHTML = "LIGHT";
  } else {
    document.getElementById("demo").innerHTML = "DARK";
  }
}

// open details box
let previewContainer = document.querySelector(".products-preview");
let previewBoxs = document.querySelectorAll(".preview");

document.querySelectorAll(".box").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBoxs.forEach((box) => {
      let target = box.getAttribute("data-target");
      if (name == target) {
        box.classList.add("show");
      }
    });
  };
});
// close details box
previewBoxs.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("show");
    previewContainer.style.display = "none";
  };
});

// open checkout form

function outAll() {
  var check = document.querySelector(".checkout");

  check.classList.add("open");
}

function cancelBuy() {
  var check = document.querySelector(".checkout");

  check.classList.remove("open");
}
// payment

function payAll() {
  var nam = document.querySelector("#cc_name").value;
  var num = document.querySelector("#num").value;

  var cvc = document.querySelector("#cvc").value;

  var expY = document.querySelector("#yearhexp").value;
  var expM = document.querySelector("#monthexp").value;
  if (nam.length == 0) {
    alert("can't be empty");
    return false;
  } else if (num.length == 0) {
    alert("can't be empty");
    return false;
  } else if (cvc.length > 3 || cvc.length == 0) {
    alert("cvc must be 3");
    return false;
  } else if (expY == "No" || expM == "No") {
    alert("can't be empty");
    return false;
  } else {
    var modal = document.querySelector("#myModal");
    modal.classList.add("seen");
    return false;

    // return true;
  }
}

function closeModal() {
  var modal = document.querySelector("#myModal");
  modal.classList.remove("seen");
  window.location.href = "home.html";
}

// email

function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_ib9q8mf";
  const templateId = "template_7hn7tqe";

  emailjs
    .send(serviceId, templateId, params)

    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("phone").value = "";

      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Message Is Sent Successfully !",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("Your Message Is Sent Successfully !");
    })
    .catch((err) => () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
}
let buttons = document.querySelectorAll(".buynow");
buttons.forEach((butt) => {
  butt.onclick = function () {
    alert("You Should Add To Cart First");
  };
});

function showProfile() {
  var profile = document.querySelector(".profile");
  profile.classList.toggle("yes");
}
function reload() {
  window.location.href = "home.html";
}
function showMap() {
  window.location.href = "map.html";
}
