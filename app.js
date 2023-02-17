const navbar = document.querySelector(".navbar");
const sliderImg = document.querySelectorAll(".slider__img");
const sliderBtn = document.querySelectorAll(".slider__btn");
const sliderBtnImg = document.querySelectorAll(".slider__btn img");
const sliderItem = document.querySelector(".slider__item");

const rewiewCircle = document.querySelector(".rewiew__circle");
const circle = document.querySelectorAll(".circle");
const slider = document.querySelectorAll(".rewiew__slider");
const next = document.querySelector(".next i");
const back = document.querySelector(".back i");

const modal = document.querySelector(".modal");
const content = document.querySelector(".content__img img");
const menu = document.querySelector(".menu");
const X = document.querySelector(".backSpase");
const navbarMobile = document.querySelector(".navbar nav ul");
const navMobile = document.querySelector(".navbar nav");

function myFunction(x) {
  if (x.matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

let x = window.matchMedia("(max-width: 700px)");
myFunction(x);

X.style.display = "none";

const openMenu = () => {
  navbarMobile.style.transform = "translateX(0)";
  navMobile.classList.add("navMobile");
  document.body.style.overflow = "hidden";
  menu.style.display = "none";
};

const closeMenu = () => {
  navbarMobile.style.transform = "translateX(-100%)";
  navMobile.classList.remove("navMobile");
  document.body.style.overflow = "auto";
  X.style.display = "none";
  menu.style.display = "block";
};

menu.addEventListener("click", openMenu);

X.addEventListener("click", closeMenu);

navMobile.addEventListener("click", closeMenu);

window.addEventListener("scroll", () => {
  if (window.scrollY > 2500) {
    navbar.classList.remove("navbar__active");
  } else if (window.scrollY > 580) {
    navbar.classList.add("navbar__active");
  } else {
    navbar.classList.remove("navbar__active");
  }
});

function hideTabContent() {
  sliderBtn.forEach((item) => {
    item.classList.remove("active");
  });
  circle.forEach((element) => {
    element.classList.remove("active");
  });
}
function showTabContent(i) {
  sliderBtn[i].classList.add("active");
  circle[i].classList.add("active");
}

hideTabContent();
showTabContent(0);

sliderItem.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("slider__btn")) {
    sliderBtn.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

sliderBtnImg.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    if (i == 0) {
      sliderImg.forEach((item) => {
        item.classList.add("active1");
        item.classList.remove("active2");
        item.classList.remove("active3");
        hideTabContent();
        showTabContent(i);
      });
    } else if (i == 1) {
      sliderImg.forEach((item) => {
        item.classList.add("active2");
        item.classList.remove("active1");
        item.classList.remove("active3");
        hideTabContent();
        showTabContent(i);
      });
    } else if (i == 2) {
      sliderImg.forEach((item) => {
        item.classList.add("active3");
        item.classList.remove("active1");
        item.classList.remove("active2");
        hideTabContent();
        showTabContent(i);
      });
    }
  });
});
// product
class ProductItem {
  constructor(img, title, svg, price, button, selector) {
    this.img = img;
    this.title = title;
    this.svg = svg;
    this.price = price;
    this.button = button;
    this.selector = document.querySelector(selector);
  }
  render() {
    const element = document.createElement("div");
    const productBox = this.selector;
    element.innerHTML = `
        <div class="product__img">
            <img src=${this.img} alt="" />
        </div>
        <h1>${this.title}</h1>
        <img src=${this.svg} alt="" />
        <span>${this.price}</span>
        <button>${this.button}</button>
    `;
    element.classList.add("product__flex");
    productBox.append(element);
  }
}
new ProductItem(
  "./images/nike1.png",
  "Aliquam lobortis",
  "./images/stars.png",
  "$75.00 – $85.00",
  "Shop now",
  ".product__box"
).render();
new ProductItem(
  "./images/nike2.png",
  "FUSCE ALIQUAM",
  "./images/stars.png",
  "$65.00 – $75.00",
  "Shop now",
  ".product__box"
).render();
new ProductItem(
  "./images/nike3.png",
  "AIR SUPERIORITY",
  "./images/stars.png",
  "$35.00 – $45.00",
  "Shop now",
  ".product__box"
).render();

// rewiew
let offset = 0;

next.addEventListener("click", () => {
  offset = offset - 500;
  if (offset < -1200) {
    offset = 0;
  }
  slider.forEach((item) => {
    item.style.transform = `translateX(${offset}px)`;
  });
  circle.forEach((item) => {
    if (offset == -600) {
      hideTabContent();
      showTabContent(1);
    } else if (offset == -1200) {
      hideTabContent();
      showTabContent(2);
    } else if (offset == 0) {
      hideTabContent();
      showTabContent(0);
    }
  });
});

back.addEventListener("click", () => {
  offset = offset + 500;
  if (offset > 0) {
    offset = -1200;
  }
  console.log(offset);
  slider.forEach((item) => {
    item.style.transform = `translateX(${offset}px)`;
  });
  circle.forEach((item, i) => {
    if (offset == -1200) {
      hideTabContent();
      showTabContent(2);
    } else if (offset == -600) {
      hideTabContent();
      showTabContent(1);
    } else if (offset == 0) {
      hideTabContent();
      showTabContent(0);
    }
  });
});

rewiewCircle.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("circle")) {
    circle.forEach((item, i) => {
      if (item == target) {
        hideTabContent();
        showTabContent(i);
      }
      item.addEventListener("click", () => {
        if (i == 0) {
          slider.forEach((item) => {
            item.style.transform = "translateX(0)";
          });
        }
        if (i == 1) {
          slider.forEach((item) => {
            item.style.transform = "translateX(-600px)";
          });
        }
        if (i === 2) {
          slider.forEach((item) => {
            item.style.transform = "translateX(-1200px)";
          });
        }
      });
    });
  }
});

content.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  modal.classList.add("modal__active");
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("modal__active");
    document.body.style.overflow = "auto";
  }
});
