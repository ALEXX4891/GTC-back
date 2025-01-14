let urlParams = new URLSearchParams(window.location.search);
$(".phone").mask("+7 (999) 999 99 99");
const nextStepBtnTwo = document.querySelector(".popup__next-btn[data-step='2']");
const nextStepBtnThree = document.querySelector(".popup__next-btn[data-step='3']");
const nextStepBtnFour = document.querySelector(".popup__next-btn[data-step='4']");
const nextStepBtnFive = document.querySelector(".popup__next-btn[data-step='5']");
const nextStepBtnSix = document.querySelector(".popup__next-btn[data-step='6']");
const resultCalcBtn = document.querySelector(".popup__step-btn[data-popup='popup-calc_result']");

// ------------------------- start FANCYBOX: ---------------------------
const body = document.querySelector("body");
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// ------------------------- end FANCYBOX: ---------------------------

// ---------------------------------- start menu ----------------------------------
//#region menu
const header = document.querySelector(".header");
const main = document.querySelector(".main");
if (header) {
  document.addEventListener("scroll", (e) => {
    if (window.innerWidth > 760) {
      // console.log(window.scrollY);
      if (window.scrollY > 115) {
        header.classList.add("header_scroll");
        main.classList.add("main_scroll");
      } else {
        header.classList.remove("header_scroll");
        main.classList.remove("main_scroll");
      }
    }
  });
}

// console.log(window.innerWidth);
if (window.innerWidth < 1440) {
  const runner = document.querySelector(".runner");
  const partnersList = document.querySelector(".partners__list");
  runner.style.display = "none";
  partnersList.style.display = "flex";
}

let animates = Array.from(document.querySelectorAll(".animation")).filter((item) => {
  if (item.style.display !== "none") {
    return item;
  }
});

animates.forEach((item) => {
  // получаем параметры секции
  const rect = item.getBoundingClientRect(); // положение элемента в окне
  // console.log('item', item);
  // console.log('rect.top', rect.top);
  // console.log('window.innerHeight / 2', window.innerHeight / 2);
  // console.log('rect.top', rect.top);
  // проверяем что начало секции находится в первой половине экрана
  // if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
  if (rect.top <= window.innerHeight / 1.4) {
    item.classList.add("animation_active");
  }
});

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  // console.log("scroll");
  // получаем все секции с атрибутом id

  // console.log("animates", animates);

  animates.forEach((item) => {
    // получаем параметры секции
    const rect = item.getBoundingClientRect();
    // console.log(rect);

    // проверяем что начало секции находится в первой половине экрана
    if (rect.top <= window.innerHeight / 1.4) {
      // if (rect.top >= 0) {
      // console.log(rect.top);
      item.classList.add("animation_active");
    }
  });
});

// ---------------------------------- end menu ----------------------------------
//#endregion

// -------------------------------------------- start Карточки предложений: ---------------------------------------------
//#region offer cards
const offerCards = document.querySelectorAll(".offers__slider-item");
if (offerCards.length) {
  offerCards.forEach((item) => {
    const id = item.dataset.id;
    const cardTitle = item.querySelector(".off-card__title");
    const cardSubtitle = item.querySelector(".off-card__subtitle");
    const cardImg = item.querySelector(".off-card__img img");

    const cardText = item.querySelector(".off-card__text");
    const cardMoreBtn = item.querySelector(".btn_modal");
    const cardConsultBtn = item.querySelector(".btn_cons");
    const cardCalcBtn = item.querySelector(".btn_calc");
    const truthCardText = cardText.innerHTML;

    cardText.style.display = "none";

    // $clamp(cardText, { clamp: 2 });

    cardMoreBtn.addEventListener("click", function () {
      // console.log("click");
      const popup = document.querySelector(".popup-offer_more");
      const popupTitle = popup.querySelector(".off-card__title");
      const popupSubtitle = popup.querySelector(".off-card__subtitle");
      const popupImg = popup.querySelector(".off-card__img img");
      const popupText = popup.querySelector(".off-card__text");
      const popupConsultBtn = popup.querySelector(".btn_cons");
      const popupCalcBtn = popup.querySelector(".btn_calc");
      const showBtn = popup.querySelector(".off-card__btn_show");
      const hideBtn = popup.querySelector(".off-card__btn_hide");
      const btnWrapper = popup.querySelector(".off-card__btn-wrap");
      btnWrapper.style.display = "block";

      popupTitle.textContent = cardTitle.textContent;
      popupSubtitle.textContent = cardSubtitle.textContent;
      popupImg.src = cardImg.src;
      popupText.innerHTML = cardText.innerHTML;

      const itemClasses = item.classList;
      if (itemClasses.contains("off-card_cons")) {
        popupConsultBtn.style.display = "block";
        popupCalcBtn.style.display = "none";
        showBtn.style.display = "block";
        hideBtn.style.display = "none";
      } else {
        popupConsultBtn.style.display = "none";
        popupCalcBtn.style.display = "block";
        showBtn.style.display = "none";
        hideBtn.style.display = "block";
      }

      if (popupText.innerHTML.length > 500) {
        popupText.innerHTML = truthCardText.slice(0, 470) + "...";
        showBtn.style.display = "block";
        hideBtn.style.display = "none";
      } else {
        popupText.innerHTML = truthCardText;
        showBtn.style.display = "none";
        hideBtn.style.display = "none";
      }

      showBtn.addEventListener("click", function () {
        // console.log("click");
        popupText.innerHTML = truthCardText;
        showBtn.style.display = "none";
        hideBtn.style.display = "block";
      });

      hideBtn.addEventListener("click", function () {
        // console.log("click");
        popupText.innerHTML = truthCardText.slice(0, 470) + "...";
        showBtn.style.display = "block";
        hideBtn.style.display = "none";
      });
    });
  });
}

// -------------------------------------------- end Карточки предложений ---------------------------------------------
//#endregion

// ---------------------------------- start плавающие кнопки: ----------------------------------
//#region fly buttons
// кнопка вверх:
const btnToUp = document.querySelector(".btn-go-up");
if (btnToUp) {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btnToUp.classList.remove("btn-go-up_hide");
    } else {
      btnToUp.classList.add("btn-go-up_hide");
    }
  });

  btnToUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// кнопка социал:

const socialBtn = document.querySelector(".social-btn");

if (socialBtn) {
  const socialBlock = document.querySelector(".social-btn__wrap");
  socialBtn.addEventListener("click", () => {
    socialBtn.classList.toggle("social-btn_active");
    socialBlock.classList.toggle("social-btn__wrap_active");
  });
}
// ---------------------------------- end плавающие кнопки: ----------------------------------
//#endregion

// ---------------------------------- start отправка и валидация формы ----------------------------------
//#region send forms
const formAll = document.querySelectorAll(".form");

if (formAll) {
  formAll.forEach((form) => {
    form.addEventListener("submit", sendForm);

    async function sendForm(e) {
      e.preventDefault();

      let errore = formvalidation(form);

      if (errore === 0) {
        let formData = new FormData(form);

        const resPopup = document.getElementById("popup-calc_result");
        if (resPopup && resPopup.classList.contains("open")) {
          const img = resPopup.querySelector(".popup__result-img").querySelector("img").src;
          const price = resPopup.querySelector(".popup__result-price").textContent;
          const description = resPopup.querySelector(".popup__result-desc").textContent;
          const params = resPopup.querySelector(".popup__result-params").textContent;
          formData.append("image", img);
          formData.append("price", price);
          formData.append("description", description);
          formData.append("params", params);
        }

        const wrapper = form.closest(".form-wrap");
        wrapper.classList.add("_sending");

        let response = await fetch("/backend/post-mail.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          form.reset();
          popupOpen(document.getElementById("popup-success"));
          wrapper.classList.remove("_sending");
        } else {
          wrapper.classList.remove("_sending");
        }
      } else {
        alert("Заполните обязательные поля");
      }
    }
  });

  function formvalidation(item) {
    let error = 0;
    let formReq = item.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];

      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
}

// ---------------------------------- end отправка и валидация формы ----------------------------------
//#endregion

// ------------------------- start WEBP: ---------------------------
//#region webp class
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  let className = support === true ? "webp" : "no-webp";
  document.documentElement.classList.add(className);
});

// ------------------------- end WEBP: ---------------------------
//#endregion

// -------------------------------------------- start slider: ---------------------------------------------
//#region slider

new Swiper(".banner_swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)
  effect: "fade",
  spaceBetween: 500,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-banner",
    prevEl: ".swiper-button-prev-banner",
  },
  autoplay: {
    delay: 5000,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  pagination: {
    el: ".swiper-pagination-banner",
    type: "fraction",
  },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
});

new Swiper(".offers_swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 1000,
  // loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  slidesPerView: 2, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 25,
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-offer",
    prevEl: ".swiper-button-prev-offer",
  },
  // autoplay: {
  //   delay: 3000,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    660: {
      spaceBetween: 15,
      slidesPerView: 2,

      // spaceBetween: 40,
    },
    960: {
      spaceBetween: 25,
      slidesPerView: 2,

      // spaceBetween: 40,
    },
  },
  on: {
    slideChange: function (e) {
      this.slides.forEach((item) => {
        if (!item.classList.contains("swiper-slide-active") && !item.classList.contains("swiper-slide-next")) {
          item.querySelector(".off-card__img").classList.remove("fade-in-right-1");
        }
      });
    },
    slideNextTransitionEnd: function () {
      const activeSlide = this.slides.filter((slide) => slide.classList.contains("swiper-slide-active"))[0];
      const index = this.slides.indexOf(activeSlide);
      this.slides[index].querySelector(".off-card__img").classList.add("fade-in-right-1");
      this.slides[index + 1].querySelector(".off-card__img").classList.add("fade-in-right-1");
      if (this.slides[index + 2]) {
        this.slides[index + 2].querySelector(".off-card__img").classList.add("fade-in-right-1");
      }
    },
    slidePrevTransitionEnd: function () {
      const activeSlide = this.slides.filter((slide) => slide.classList.contains("swiper-slide-active"))[0];
      const index = this.slides.indexOf(activeSlide);
      if (this.slides[index]) {
        this.slides[index].querySelector(".off-card__img").classList.add("fade-in-right-1");
      }
      if (this.slides[index + 1]) {
        this.slides[index + 1].querySelector(".off-card__img").classList.add("fade-in-right-1");
      }
    },
  },
});

const offerActive = document.querySelector('.offers__slider-item.swiper-slide-active');
const offerNext = document.querySelector('.offers__slider-item.swiper-slide-next');


if (offerActive) {
  const offerActiveImg = offerActive.querySelector('.animation_img')
  setTimeout(function () {
    // circles.forEach((item) => {
      offerActiveImg.classList.add('fade-in-right-1');
    // })
  }, 500);
}

if (offerNext) {
  const offerNextImg = offerNext.querySelector('.animation_img')

  setTimeout(function () {
    // circles.forEach((item) => {
      offerNextImg.classList.add('fade-in-right-1');
    // })
  }, 800);
}

const thumbs_swiper = new Swiper(".results_top_swiper", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 4, // сколько слайдов показывать, можно дробно
  freeMode: true, // перелистывание слайдов при свободном положении
  watchSlidesProgress: true, //перелистывание слайдов при свободном положении
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    830: {
      // spaceBetween: 40,
      slidesPerView: 4, // сколько слайдов показывать, можно дробно
    },
  },
});

const resultsBotSwiper = new Swiper(".results_bot_swiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,
  speed: 1000,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  // slidesPerView: 1, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 100,
  thumbs: {
    swiper: thumbs_swiper,
  },
  // autoplay: {
  //   delay: 5000,
  // },
  navigation: {
    nextEl: ".swiper-button-next_res",
    prevEl: ".swiper-button-prev_res",
  },
  // slideToClickedSlide: true, //перелистывание слайдов по клику
  // grabCursor: true, //меняет курсор при наведении на руку
  // watchOverflow: true, //отключает слайдер если все слайды входят в область видимости

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next_res-card__right",
  //   prevEl: ".swiper-button-prev_res-card__right",
  // },

  // autoplay: {
  //   delay: 3000,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   // type: "fraction",
  //   clickable: true,
  // },
  // mousewheel: { //перелистывание слайдов по мышке
  //   sensitivity: 1,
  //   eventsTarget: ".news__slider",
  // },
  // keyboard: { //перелистывание слайдов по нажатию клавиш
  //   enabled: true,
  //   onlyInViewport: true,
  //   // pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
  on: {
    slideNextTransitionEnd: function () {
      const activeSlide = this.slides.filter((slide) => slide.classList.contains("swiper-slide-active"))[0];
      activeSlide.querySelectorAll(".circle-animate").forEach((el) => {
        el.classList.add("circle-animate_active")
      })
      this.slides.forEach((item) => {
        item.querySelectorAll(".circle-animate").forEach((el) => {
          if (!el.closest(".swiper-slide-active")) {
            // console.log(el);            
            el.classList.remove("circle-animate_active")
          }
        })
      });
    },
    slidePrevTransitionEnd: function () {
      const activeSlide = this.slides.filter((slide) => slide.classList.contains("swiper-slide-active"))[0];
      activeSlide.querySelectorAll(".circle-animate").forEach((el) => {
        el.classList.add("circle-animate_active")
      })
      this.slides.forEach((item) => {
        item.querySelectorAll(".circle-animate").forEach((el) => {
          if (!el.closest(".swiper-slide-active")) {
            // console.log(el);            
            el.classList.remove("circle-animate_active")
          }
        })
      });
    },
  },
});

const circles = document.querySelector('.results__bot-item.swiper-slide-active');


if (circles) {
  const circlesItem = circles.querySelectorAll('.circle-animate')
  setTimeout(function () {
    circlesItem.forEach((item) => {
      item.classList.add('circle-animate_active');
    })
  }, 500);
}


new Swiper(".res-card_swiper-1", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 50,
  nested: true,
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости
  navigation: {
    nextEl: ".swiper-button-next_res-card__right-1",
    prevEl: ".swiper-button-prev_res-card__right-1",
  },
  pagination: {
    el: ".swiper-pagination-res-1",
    clickable: true,
  },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
});

// // if (deg <= 270) {
//   // for (let i = 0; i <= 270; i++) {
//   //   let deg = 0;
//   //   setTimeout(function () {
//   //     deg += 1;
//   //   }, 1000);
//     // circle25.style.backgroundImage = `conic-gradient(from 0deg at 50% 50%, #CDFAF6 0deg, #CDFAF6 ${deg}deg, #FAB502 ${deg}deg, #117074 360deg)`;

//   //   // requestAnimationFrame(circle25
    
//   // }

//   const target = 270;
//   let deg = 0;

//   while (deg <= target) {
//     setTimeout(function () {
//       deg++;
//       console.log(deg);
//       circle25.style.backgroundImage = `conic-gradient(from 0deg at 50% 50%, #CDFAF6 0deg, #CDFAF6 ${deg}deg, #FAB502 ${deg}deg, #117074 360deg)`;
//     }, 10);

//   }

// // }



new Swiper(".res-card_swiper-2", {
  direction: "horizontal",
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  spaceBetween: 50,
  nested: true,
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости
  navigation: {
    nextEl: ".swiper-button-next_res-card__right-2",
    prevEl: ".swiper-button-prev_res-card__right-2",
  },
  pagination: {
    el: ".swiper-pagination-res-2",
    // type: "fraction",
    clickable: true,
  },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
});

new Swiper(".res-card_swiper-3", {
  direction: "horizontal",
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  spaceBetween: 50,
  nested: true,
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости
  navigation: {
    nextEl: ".swiper-button-next_res-card__right-3",
    prevEl: ".swiper-button-prev_res-card__right-3",
  },
  pagination: {
    el: ".swiper-pagination-res-3",
    clickable: true,
  },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
});

new Swiper(".res-card_swiper-4", {
  direction: "horizontal",
  slidesPerView: 1, // сколько слайдов показывать, можно дробно
  spaceBetween: 50,
  nested: true,
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости
  navigation: {
    nextEl: ".swiper-button-next_res-card__right-4",
    prevEl: ".swiper-button-prev_res-card__right-4",
  },
  pagination: {
    el: ".swiper-pagination-res-4",
    clickable: true,
  },
  pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
});

new Swiper(".news_swiper", {
  direction: "horizontal",
  // slidesPerView: 1, // сколько слайдов показывать, можно дробно
  spaceBetween: 500,
  // nested: true,
  watchOverflow: true, //отключает слайдер если все слайды входят в область видимости
  navigation: {
    nextEl: ".swiper-button-next_res-card__news",
    prevEl: ".swiper-button-prev_res-card__news",
  },
  pagination: {
    el: ".swiper-pagination-news",
    clickable: true,
  },
  pageUpDown: true,
  // },
  breakpoints: {
    0: {
      // slidesPerView: 1,
      // spaceBetween: 20,
    },
    960: {
      // spaceBetween: 40,
    },
  },
});

// -------------------------------------------- end slider: ---------------------------------------------
//#endregion

// -------------------------------------------- start popup: ---------------------------------------------
//#region popup
// вывод всех попап в список:
const popupArr = document.querySelectorAll(".popup");
if (popupArr.length > 0) {
  // console.log("тест");
  popupArr.forEach((popup) => {
    const li = document.createElement("li");
    li.classList.add("popup__item");
    li.innerHTML = `<button style="margin-bottom: 10px" class="btn btn_gray popup-link" data-popup="${popup.getAttribute(
      "id"
    )}">${popup.getAttribute("id")}</button>`;
    if (document.querySelector(".popup__list")) {
      document.querySelector(".popup__list").appendChild(li);
    }

    popup.classList.add("active");
  });
}

const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".lock-padding");
// const btn = document.querySelector(".project-btn");

let unlock = true;
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("data-popup");

      // функционал возврата на предыдущее окно:
      const curentPopup = document.getElementById(popupName); //получаем id попап-окна
      const dataStep = popupLink.getAttribute("data-step");
      if (dataStep) {
        const backBtn = curentPopup.querySelector(".calc-cansel-btn-no");
        if (backBtn) {
          const link = `popup-calc_${dataStep}`;
          backBtn.setAttribute("data-popup", link);
        }
      }

      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".popup-close");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      // console.log("тест");
      popupClose(el.closest(".popup")); //ближайший родитель класса popup
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    // закрываем текущий открытый попап, если он есть
    if (popupActive) {
      if (popupActive.classList.contains("popup-calc_result")) {
        popupActive.style.zIndex = 800;
      } else {
        popupClose(popupActive, false);
      }
    } else {
      bodyLock();
    }
    // console.log(curentPopup);
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      // console.log("тест");
      if (!e.target.closest(".popup__content")) {
        // если клик был по области вокруг попапа то ничего не делаем, если это не калькулятор
        if (!curentPopup.classList.contains("popup-calc")) {
          popupClose(e.target.closest(".popup"));
        }
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  // console.log("popupClose");
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      const popupActiveMore = document.querySelector(".popup.open");
      if (!popupActiveMore) {
        bodyUnLock();
      }
    }
  }
}

// добавляем боди padding-right при открытии попапа, на ширину скролл-бара
function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector(".header").offsetWidth + "px";
  // console.log(lockPaddingValue);
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.marginRight = lockPaddingValue;
    // console.log(el.style.marginRight);
  }
  body.style.paddingRight = lockPaddingValue;
  // console.log(body.style.paddingRight);
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.marginRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

// сброс параметров калькулятора:
const canselCalcBtn = document.querySelector(".calc-cansel-btn-yes");
if (canselCalcBtn) {
  canselCalcBtn.addEventListener("click", function (e) {
    window.history.pushState({}, document.title, window.location.pathname);
    urlParams = new URLSearchParams(window.location.search);
    location.reload();
  });
}

const canselCalcBtnNo = document.querySelector(".calc-cansel-btn-no");
if (canselCalcBtnNo) {
  canselCalcBtnNo.addEventListener("click", function (e) {
    popupClose(e.target.closest(".popup"));
  });
}

// -------------------------------------------- end popup: ---------------------------------------------
//#endregion

// -------------------------------------------- start BURGER: ---------------------------------------------
//#region burger
const burger = document.querySelector(".burger");
// console.log(burger);

if (burger) {
  const popup = document.querySelector("#popup-menu");
  const popupContent = popup.querySelector(".popup__content");

  const content = document.querySelector(".header__nav");
  const headerNavWrap = document.querySelector(".header__nav-wrap");

  burger.addEventListener("click", function (e) {
    // console.log("тест");
    popupOpen(popup);
    // bodyLock()
    popup.classList.add("open");
    popupContent.append(content);
    // console.log(popup);
  });

  // закрытие popup по кнопке
  const popupCloseIcon = popup.querySelector(".popup__close");
  popupCloseIcon.addEventListener("click", function (e) {
    popupClose(popup);
    bodyUnLock();
    popup.classList.remove("open");
    if (popup.classList.contains("open")) {
      // передача формы обратно на главную страницу
      headerNavWrap.append(content);
    }
  });
}
// -------------------------------------------- end BURGER ---------------------------------------------
//#endregion

// -------------------------------------------- start Куки: ---------------------------------------------
//#region cookie
function setCookie(name, value, lifetimeDays = 30, path = "/") {
  var expires = "";
  if (lifetimeDays) {
    var date = new Date();
    date.setTime(date.getTime() + lifetimeDays * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

if (!getCookie("CookiePolicyAccepted")) {
  $(".cookie").show();
} else {
  $(".cookie").hide();
}

function acceptCookiePolicy() {
  // console.log("acceptCookiePolicy");
  setCookie("CookiePolicyAccepted", true);
  $(".cookie").fadeTo(500, 0);
  setTimeout(() => {
    $(".cookie").hide();
  }, 500);
}
function closeCookiePolicyNotification() {
  // console.log("closeCookiePolicyNotification");
  $(".cookie").fadeOut(300);
}

const cookieBtn = document.querySelector(".cookie__btn");
if (cookieBtn) {
  cookieBtn.addEventListener("click", function (e) {
    // console.log("тест");
    e.preventDefault();
    acceptCookiePolicy();
  });
}

const cookieCloseBtn = document.querySelector(".cookie__close");
if (cookieCloseBtn) {
  cookieCloseBtn.addEventListener("click", function (e) {
    // console.log("тест");
    e.preventDefault();
    closeCookiePolicyNotification();
  });
}
// -------------------------------------------- end Куки ---------------------------------------------
//#endregion

// -------------------------------------------- start Карта ---------------------------------------------
//#region Карта

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
const map = document.getElementById("map");
const map2 = document.getElementById("mapTwo");
if (map) {
  initMap();

  // Главная функция, вызывается при запуске скрипта
  async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    // Импорт модулей для элементов управления на карте
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    // Координаты центра карты

    // Иницилиазируем карту
    // Создание объекта карты
    if (document.getElementById("map")) {
      const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById("map"),
        // Передаём параметры инициализации карты
        {
          location: {
            // Координаты центра карты
            center: [30.312446, 59.902154],

            // Уровень масштабирования
            zoom: 12.5,
          },
        },
        [
          // Добавляем слой, скрываем POI
          new YMapDefaultSchemeLayer({
            customization: [
              {
                tags: {
                  any: ["poi", "transit"],
                },
                elements: "label",
                stylers: [
                  {
                    opacity: 1,
                  },
                ],
              },
            ],
          }),
          new YMapDefaultFeaturesLayer({}),
        ]
      );

      // *******************************************************************
      // Добавляем коллекцию маркеров
      const markersArr = [
        { coordinates: [30.312446, 59.902154], title: "Setl center", dataId: 1, img: "/assets/img/pin.svg" },        
      ];

      function renderMarks(arr) {
        arr.forEach((obj) => {
          const imgContainer = makeImgContainer(obj);
          const markerElement = makeMarkerElement(obj);
          const marker = makeMarker(obj, imgContainer);
          imgContainer.append(markerElement);
          map.addChild(marker);
        });
      }

      renderMarks(markersArr);

      // *******************************************************************

      // Функция создания контейнера для маркера
      function makeImgContainer(obj) {
        const imgContainer = document.createElement("div");
        imgContainer.className = "marker-wrap";
        imgContainer.setAttribute("data-id", obj.dataId);
        return imgContainer;
      }

      // Функция создания маркера
      function makeMarkerElement(obj) {
        const markerElement = document.createElement("img");
        markerElement.className = "marker";
        markerElement.src = obj.img;
        markerElement.title = obj.title;
        return markerElement;
      }

      // Функция инициализации маркера
      function makeMarker(obj, container) {
        const marker = new YMapMarker(
          {
            coordinates: obj.coordinates,
            // draggable: true,
            mapFollowsOnDrag: true,
          },
          container
        );
        return marker;
      }
    }
  }
}

// -------------------------------------------- end Карта ---------------------------------------------
//#endregion

// -------------------------------------- start Url Query --------------------------
//#region url query
function parseUrlQuery() {
  // console.log("*************** Старт функции parseUrlQuery ***************");
  const urlParams = new URLSearchParams(window.location.search);
  const filterArr = [];
  urlParams.forEach((value, key) => {
    filterArr.push({ name: key, value: value });
  });
  // console.log(filterArr);
  return filterArr;
}

function setUrlQueryParam(param, value) {
  // console.log("*************** Старт функции setUrlQueryParam ***************");
  urlParams.set(param, value);
  window.history.pushState({}, "", "?" + urlParams.toString());
  pastImageName();
}

function delUrlQueryParam(param) {
  // console.log("*************** Старт функции delUrlQueryParam ***************");
  urlParams.delete(param);
  window.history.pushState({}, "", "?" + urlParams.toString());
  pastImageName();
}

// функции достают пармаетры из URL:
function getTemperature() {
  const queryParams = parseUrlQuery();
  let temp = "";
  if (queryParams.filter((item) => item.name == "temperature").length) {
    const tempParam = queryParams.filter((item) => item.name == "temperature");
    temp = tempParam[0]["value"];
  }
  return temp;
}

function getInsulation() {
  const queryParams = parseUrlQuery();
  let ins = "";
  if (queryParams.filter((item) => item.name == "insulation").length) {
    const insParam = queryParams.filter((item) => item.name == "insulation");
    ins = insParam[0]["value"];
  }
  return ins;
}

function getHeater() {
  const queryParams = parseUrlQuery();
  let heater = "";
  if (queryParams.filter((item) => item.name == "heater").length) {
    const heaterParam = queryParams.filter((item) => item.name == "heater");
    heater = heaterParam[0]["value"];
  }
  return heater;
}

function getType() {
  const queryParams = parseUrlQuery();
  let type = "";
  if (queryParams.filter((item) => item.name == "type").length) {
    const typeParam = queryParams.filter((item) => item.name == "type");
    type = typeParam[0]["value"];
  }
  return type;
}

function getVolume() {
  const queryParams = parseUrlQuery();
  let volume = "";
  if (queryParams.filter((item) => item.name == "volume").length) {
    const volumeParam = queryParams.filter((item) => item.name == "volume");
    volume = volumeParam[0]["value"];
  }
  return volume;
}

function getSize() {
  let size = "";
  const volume = getVolume();
  if (volume) {
    if (volume < 25) {
      size = "S";
    } else if (volume < 45) {
      size = "M";
    } else {
      size = "L";
    }
  }
  return size;
}

function getFuels() {
  const queryParams = parseUrlQuery();
  const fuels = [];

  const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
  const allFuels = [];
  fuelBtns.forEach((item) => {
    allFuels.push(item.dataset.name);
  });

  allFuels.forEach((el) => {
    if (queryParams.filter((item) => item.name == el).length) {
      let fuelPar = queryParams.filter((item) => item.name == el)[0]["name"];
      fuels.push(fuelPar);
    }
  });
  return fuels;
}

function getCheckedFuels() {
  const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
  let numberOfChecked = 0;
  fuelBtns.forEach((el) => {
    if (el.checked) {
      numberOfChecked++;
    }
  });
  return numberOfChecked;
}

function getSections() {
  const queryParams = parseUrlQuery();
  let sections = "";
  if (queryParams.filter((item) => item.name == "sections").length) {
    const sectionsParam = queryParams.filter((item) => item.name == "sections");
    sections = sectionsParam[0]["value"];
  }
  return sections;
}

function getTrk() {
  const queryParams = parseUrlQuery();
  let trk = "";
  if (queryParams.filter((item) => item.name == "trk").length) {
    const trkParam = queryParams.filter((item) => item.name == "trk");
    trk = trkParam[0]["value"];
  }
  return trk;
}

function getSide() {
  const queryParams = parseUrlQuery();
  let side = "";
  if (queryParams.filter((item) => item.name == "side").length) {
    const sideParam = queryParams.filter((item) => item.name == "side");
    side = sideParam[0]["value"];
  }
  return side;
}

function getFast() {
  const queryParams = parseUrlQuery();
  let fast = "";
  if (queryParams.filter((item) => item.name == "fast").length) {
    const fastParam = queryParams.filter((item) => item.name == "fast");
    fast = fastParam[0]["value"];
  }
  return fast;
}
//#endregion

// -------------------------------------- start image name --------------------------
//#region image name
//функция формирования имени изображения
function getImageName() {
  // console.log("*************** Старт функции getImageName ***************");

  let name = "";

  const queryParams = parseUrlQuery();

  let type = "";
  let size = "";
  // let fuel = '';
  let sections = "";
  let trk = "";
  let side = "";
  let fast = "";

  // console.log(queryParams);
  // тип
  if (getType()) {
    type = getType();
    name = `/assets/img/renders/${type}_S.png`;
  }

  // объем
  if (getSize()) {
    size = getSize();
    name = `/assets/img/renders/${type}_${size}.png`;
  }

  // секции
  if (getSections()) {
    sections = getSections();
    name = `/assets/img/renders/${type}_${size}_${sections}r.png`;
  }

  // трк
  if (getTrk()) {
    trk = getTrk();
    name = `/assets/img/renders/${type}_${size}_${sections}r_${trk}k.png`;
  }

  if (getTrk() == 2 && getSide()) {
    side = getSide();
    name = `/assets/img/renders/${type}_${size}_${sections}r_${trk}.${side}k.png`;
  }

  // скоростная выдача
  if (getFast()) {
    fast = getFast() > 0 ? "f" : "";

    if (fast) {
      // console.log(fast);
      name = `/assets/img/renders/${type}_${size}_${sections}r_${trk}k_${fast}.png`;

      if (getTrk() == 2) {
        side = getSide();
        name = `/assets/img/renders/${type}_${size}_${sections}r_${trk}.${side}k_${fast}.png`;
      }
    }
  }

  // console.log(name);
  return name;
}

//функция подстановки имени изображения
function pastImageName() {
  // console.log("*************** Старт функции pastImageName ***************");
  const imageName = getImageName();
  const images = document.querySelectorAll(".popup__type-img");
  images.forEach((item) => {
    item.querySelector("img").src = imageName;
  });
}

// -------------------------------------- end image name --------------------------
//#endregion

// -------------------------------------------- start range-slider: ---------------------------------------------
//#region range-slider
const slider = document.querySelector(".popup__range-slider");
if (slider) {
  rangeSliderInit(slider, 5, 5, 60);
}

function rangeSliderInit(slider, gap, minRange, maxRange) {
  // console.log('**************** Старт функции rangeSliderInit ***************");');
  const rangeSlider = slider.querySelector(".range-slider");

  // рендж инпуты:
  const rangeInputs = slider.querySelectorAll(".range-inputs-wrap input");
  const rangeInputMax = slider.querySelector(".max-range");

  // основные параметры:

  rangeInputMax.min = minRange;
  rangeInputMax.max = maxRange;
  rangeInputMax.step = gap;
  rangeInputMax.value = minRange;

  rangeInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const type = getType();
      const sections = getSections();
      //получаем значения из текстовых инпутов:
      let minVal = minRange;
      let maxVal = parseInt(input.value);
      let value = parseInt(input.value);
      // ограничиваем значение max инпута:
      if (type == "Cont" && value >= 40) {
        input.value = 40;
        value = 40;
        maxVal = 40;
      }
      if (sections > 2 && value <= 25) {
        input.value = 25;
        value = 25;
        maxVal = 25;
      } else {
        if (maxVal >= maxRange) {
          rangeInputMax.value = maxRange;
          maxVal = maxRange;
        }
      }

      // console.log("parseInt(input.value)", value);
      if (maxVal <= minVal) {
        value = minRange;
        maxVal = minRange;
      }

      rangeSlider.style.right = `${100 - ((maxVal - minRange) * 100) / (maxRange - minRange)}%`;

      const rangeNumbers = document.querySelectorAll(".popup__range-number");

      if (rangeNumbers.length) {
        rangeNumbers.forEach((item) => {
          item.classList.remove("popup__range-number_active");
        });

        rangeNumbers.forEach((item) => {
          if (item.innerHTML.trim() == value) {
            item.classList.add("popup__range-number_active");
          }
        });
      }

      setUrlQueryParam("volume", value);
    });
  });
}
// -------------------------------------------- end range-slider: ---------------------------------------------
//#endregion

// -------------------------------------------- start setCurrentParams: ---------------------------------------------
//#region setCurrentParams
// функция установки текущих значений фильтров из urlParams:
function setCurrentParams(arr) {
  // console.log("*************** Старт функции setCurrentParams ***************"); // имя функции
  // console.log(arr);
  let urlParams = new URLSearchParams(window.location.search);

  if (!arr) {
    window.history.pushState({}, document.title, window.location.pathname);
    urlParams = new URLSearchParams(window.location.search);
    // console.log("сброс фильтров");
  }

  // шаг 1

  // шаг 2
  const tempBtns = document.querySelectorAll(".popup__btn_temp");
  if (tempBtns && arr.filter((item) => item.name === "temperature").length) {
    tempBtns.forEach((item) => {
      if (arr.filter((el) => el.name === "temperature")[0].value === item.dataset.value) {
        item.classList.add("popup__btn_temp_active");
        nextStepBtnTwo.classList.remove("btn_disabled");
      }
    });
  }

  const insulationBtn = document.querySelector(".checkbox__input[data-name='insulation']");
  // console.log(insulationBtn);

  if (insulationBtn && arr.filter((item) => item.name === "insulation").length) {
    insulationBtn.checked = true;
  }

  const heaterBtn = document.querySelector(".checkbox__input[data-name='heater']");

  if (arr.filter((item) => item.name === "heater").length) {
    heaterBtn.checked = true;
    heaterBtn.closest(".checkbox").classList.remove("checkbox_disabled");
  }

  // шаг 3
  const typeBtns = document.querySelectorAll(".popup__type-item");
  if (typeBtns && arr.filter((item) => item.name === "type").length) {
    typeBtns.forEach((item) => {
      if (arr.filter((el) => el.name === "type")[0].value === item.dataset.value) {
        item.classList.add("popup__type-item_active");
        nextStepBtnThree.classList.remove("btn_disabled");
      }
    });
  }

  // шаг 4
  const volumeBtn = document.querySelectorAll(".popup__range");
  if (volumeBtn && arr.filter((item) => item.name === "volume").length) {
    const slider = document.querySelector(".popup__range-slider");
    volumeBtn.value = arr.filter((el) => el.name === "volume")[0].value;
    rangeSliderUpdate(slider, volumeBtn.value);
  }

  // шаг 5
  const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
  const fuels = [];
  fuelBtns.forEach((item) => {
    fuels.push(item.dataset.name);
  });

  if (fuelBtns.length) {
    fuelBtns.forEach((item) => {
      if (arr.filter((el) => el.name === item.dataset.name).length) {
        item.checked = true;
      }
    });
  }

  const sectionsBtns = document.querySelectorAll(".radio__input[data-name='sections']");
  if (sectionsBtns && arr.filter((item) => item.name === "sections").length) {
    sectionsBtns.forEach((item) => {
      if (arr.filter((el) => el.name === "sections")[0].value === item.dataset.value) {
        item.checked = true;
        nextStepBtnFive.classList.remove("btn_disabled");

        if (arr.filter((el) => el.name === "volume")[0].value == "S") {
          sectionsBtns.forEach((el) => {
            if (el.dataset.value > 2) {
              el.closest(".radio").classList.remove("radio_disabled");
            }
          });
        }
      }
    });
  }

  // шаг 6
  const trkBtns = document.querySelectorAll(".radio__input[name='trk']");

  if (trkBtns && arr.filter((item) => item.name === "trk").length) {
    trkBtns.forEach((item) => {
      if (arr.filter((el) => el.name === "trk")[0].value === item.dataset.value) {
        item.checked = true;
        nextStepBtnSix.classList.remove("btn_disabled");
      }
    });
  }

  const sideBtns = document.querySelectorAll(".radio__input[name='side']");

  if (sideBtns && arr.filter((item) => item.name === "side").length) {
    sideBtns.forEach((item) => {
      if (arr.filter((el) => el.name === "side")[0].value === item.dataset.value) {
        item.checked = true;
        sideBtns.forEach((el) => {
          el.closest(".radio").classList.remove("radio_disabled");
        });
        nextStepBtnSix.classList.remove("btn_disabled");
      }
    });
  }

  // шаг 7
  const fastBtns = document.querySelectorAll(".radio__input[name='fast']");

  if (fastBtns && arr.filter((item) => item.name === "fast").length) {
    fastBtns.forEach((item) => {
      if (arr.filter((el) => el.name === "fast")[0].value === item.dataset.value) {
        item.checked = true;
      }
    });
  }
}
// -------------------------------------------- end setCurrentParams: ---------------------------------------------
//#endregion

// -------------------------------------------- start rangeSliderUpdate: ---------------------------------------------
//#region rangeSliderUpdate
//функция установки значения рэндж слайдера:
function rangeSliderUpdate(slider, value) {
  // console.log("*************** Старт функции rangeSliderUpdate ***************"); // имя функции
  const rangeSlider = slider.querySelector(".range-slider");
  const rangeInputMax = slider.querySelector(".max-range");

  // let minVal = 0;
  let maxVal = value;
  let minRange = rangeInputMax.min;
  let maxRange = rangeInputMax.max;

  // присваиваем значения инпутам:
  rangeInputMax.value = value;

  // вычисляем положение рендж инпутов:
  rangeSlider.style.right = `${100 - ((maxVal - minRange) * 100) / (maxRange - minRange)}%`;

  const rangeNumbers = document.querySelectorAll(".popup__range-number");

  if (rangeNumbers.length) {
    rangeNumbers.forEach((item) => {
      item.classList.remove("popup__range-number_active");
    });

    rangeNumbers.forEach((item) => {
      if (item.innerHTML.trim() == value) {
        item.classList.add("popup__range-number_active");
      }
    });
  }
}
// -------------------------------------------- end rangeSliderUpdate: ---------------------------------------------
//#endregion

// ---------------------- start Формирование последнего шага -----------------
//#region result
if (resultCalcBtn) {
  resultCalcBtn.addEventListener("click", function (e) {
    // console.log("click");
    const finalImg = document.querySelector(".popup__result-img").querySelector("img");
    // console.log(finalImg);
    const img = getImageName();
    finalImg.src = img;

    // [
    //   {
    //     "name": "temperature",
    //     "value": "-60"
    //   },
    //   {
    //     "name": "insulation",
    //     "value": "1"
    //   },
    //   {
    //     "name": "heater",
    //     "value": "1"
    //   },
    //   {
    //     "name": "type",
    //     "value": "Close"
    //   },
    //   {
    //     "name": "volume",
    //     "value": "60"
    //   },
    //   {
    //     "name": "sections",
    //     "value": "4"
    //   },
    //   {
    //     "name": "diesel",
    //     "value": "1"
    //   },
    //   {
    //     "name": "trk",
    //     "value": "4"
    //   },
    //   {
    //     "name": "petrol-92",
    //     "value": "1"
    //   },
    //   {
    //     "name": "petrol-95",
    //     "value": "1"
    //   },
    //   {
    //     "name": "other",
    //     "value": "1"
    //   },
    //   {
    //     "name": "fast",
    //     "value": "2"
    //   }
    // ]

    // e.preventDefault();
    const params = parseUrlQuery();
    // console.log(params);
    let temperature = "";
    if (params.find((param) => param.name == "temperature")) {
      temperature = params.find((param) => param.name == "temperature")["value"];
    }

    let insulations = "";
    if (params.find((param) => param.name == "insulations")) {
      insulations = params.find((param) => param.name == "insulations")["value"];
    }

    let heater = "";
    if (params.find((param) => param.name == "heater")) {
      heater = params.find((param) => param.name == "heater")["value"];
    }

    let type = "";
    if (params.find((param) => param.name == "type")) {
      type = params.find((param) => param.name == "type")["value"];
    }

    let volume = "";
    if (params.find((param) => param.name == "volume")) {
      volume = params.find((param) => param.name == "volume")["value"];
    }

    let sections = "";
    if (params.find((param) => param.name == "sections")) {
      sections = params.find((param) => param.name == "sections")["value"];
    }

    let diesel = "";
    if (params.find((param) => param.name == "diesel")) {
      diesel = params.find((param) => param.name == "diesel")["value"];
    }

    let trk = "";
    if (params.find((param) => param.name == "trk")) {
      trk = params.find((param) => param.name == "trk")["value"];
    }

    let petrol92 = "";
    if (params.find((param) => param.name == "petrol-92")) {
      petrol92 = params.find((param) => param.name == "petrol-92")["value"];
    }

    let petrol95 = "";
    if (params.find((param) => param.name == "petrol-95")) {
      petrol95 = params.find((param) => param.name == "petrol-95")["value"];
    }

    let other = "";
    if (params.find((param) => param.name == "other")) {
      other = params.find((param) => param.name == "other")["value"];
    }

    let fast = "";
    if (params.find((param) => param.name == "fast")) {
      fast = params.find((param) => param.name == "fast")["value"];
    }

    let sectionVolume = parseInt(volume) / parseInt(sections);
    let textVolume = "";

    let titleSections = "";
    switch (sections) {
      case "1":
        titleSections = "односекционная";
        break;
      case "2":
        titleSections = "двухсекционная";
        textVolume = `(${sectionVolume}+${sectionVolume})`;
        break;
      case "3":
        titleSections = "трехсекционная";
        textVolume = `(${sectionVolume}+${sectionVolume}+${sectionVolume})`;
        break;
      case "4":
        titleSections = "четырехсекционная";
        textVolume = `(${sectionVolume}+${sectionVolume}+${sectionVolume}+${sectionVolume})`;
        break;
    }

    let textSections = "";
    switch (sections) {
      case "1":
        textSections = "односекционный";
        break;
      case "2":
        textSections = "двухсекционный";
        break;
      case "3":
        textSections = "трехсекционный";
        break;
      case "4":
        textSections = "четырехсекционный";
        break;
    }

    let titleType = "";
    switch (type) {
      case "Open":
        titleType = "окрытом";
        break;
      case "Close":
        titleType = "закрытом";
        break;
      case "Cont":
        titleType = "контейнером";
        break;
    }

    let textBarrier = parseInt(sections) - 1;

    // console.log(params);

    //  TODO надо сформировать формирование цены, описания и характеристик, они будут использоваться в файле pdf и в формах обратной связи

    // TODO посчитать стоимость и записать в переменную:
    const finalPrice = document.querySelector(".popup__result-price");
    const price = setPrice();
    console.log(price);
    finalPrice.innerHTML = `${price} руб.`;

    //TODO добавить опитсание:
    const finalDesc = document.querySelector(".popup__result-desc");
    finalDesc.innerHTML = `Внутриведомственная ${titleSections} АЗС в ${titleType} исполнении общим объёмом ${volume}м3`;

    //TODO добавить характеристики:
    const finalParams = document.querySelector(".popup__result-params");
    finalParams.innerHTML = `
    Резервуар: двустенный ${textSections} резервуар объёмом ${volume} ${textVolume} м.куб. (сталь Ст3 4/4мм, система контроля
    межстенного пространства с сиреной, азот); <br>
    Люк-лаз: 700мм с крышкой 800мм - ${sections}шт. <br>
    Перегородка: двустенная перегородка (Сталь Ст3 4/4мм) - ${textBarrier}шт. <br>
    Страховочные рымы: есть <br>
    Ложементы (опоры): есть <br>
    Лестница с площадкой обслуживания: есть <br>
    Технологический отсек: Закрытый, с поддоном сбора проливов <br>
    ТРК: однорукавная «GP» с однострочным отсчётным устройством, 50л/мин (возможна установка других на
    50-80л/мин) -
    ${trk} шт. <br>
    Насос: КМ 80-65-140Е (380В, 3кВт) <br>
    Узел наполнения: УН-80 со сливной муфтой <br>
    Датчик уровня: ПМП-185 с сиреной ВС-5 (возможна замена на уровнемер ПМП-201) - ${sections} комплекта <br>
    Сигнализатор: ВС-К-500, дисплейный <br>
    Сирена: ВС-5 <br>
    Технологические линии: (наполнения, выдачи, деаэрации, замера и обесшламливания) - ${sections} комплекта <br>
    Освещение и щит силовой в исполнении Ех: есть <br>
    Система автоматического пожаротушения: Буран 2,5 <br>
    Наружное покрытие: грунт=эмаль ЭКОМАСТ <br>
    Молниеотвод: есть <br>
    Надпись “Огнеопасно”: 2 шт. <br>
    Метрошок: МШС 3,5 (в приклад) <br>
    `;

    // Габариты, мм: 5000х2200х2650 <br>
    // Масса, кг: 3700

    createCalcFile();
  });

  async function createCalcFile() {
    // console.log("******************** Старт функции createCalcFile **********************");

    const params = parseUrlQuery();
    const img = getImageName();
    const finalPrice = document.querySelector(".popup__result-price");
    const finalDesc = document.querySelector(".popup__result-desc");
    const finalParams = document.querySelector(".popup__result-params");
    const downlodBtn = document.querySelector(".popup__result-download");
    downlodBtn.classList.add("btn_disabled");

    let formData = new FormData();
    formData.append("image", img);
    formData.append("price", finalPrice.innerHTML);
    formData.append("description", finalDesc.innerHTML);
    formData.append("characteristics", finalParams.innerHTML);

    let response = await fetch("/backend/create-pdf.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      downlodBtn.classList.remove("btn_disabled");
    } else {
      downlodBtn.classList.add("btn_disabled");
    }
  }
}
// ---------------------- end Формирование последнего шага -----------------
//#endregion

// -------------------------------------------- start вспомгательные функции: ---------------------------------------------
//#region functions
// разблокировка подогоревателя при выборе утеплителя:
const insulationBtn = document.querySelector(".insulation");
const heaterBtn = document.querySelector(".heater");
if (insulationBtn && heaterBtn) {
  insulationBtn.addEventListener("click", function (e) {
    // console.log("click");

    if (insulationBtn.querySelector("input").checked) {
      heaterBtn.classList.remove("checkbox_disabled");
    } else {
      heaterBtn.classList.add("checkbox_disabled");
      heaterBtn.querySelector("input").checked = false;
      delUrlQueryParam("heater");
    }
  });
}

// функция показа ошибки:
function showError(popup) {
  const error = popup.querySelector(".popup__error-text");
  error.classList.add("popup__error-text_active");
  setTimeout(function () {
    error.classList.remove("popup__error-text_active");
  }, 2000);
}

// функция показа предупреждения:
function showWarning(popup) {
  const desc = popup.querySelector(".popup__info-text");
  if (desc) {
    desc.classList.add("popup__info-text_active");
    setTimeout(function () {
      desc.classList.remove("popup__info-text_active");
    }, 2000);
  }
}

const btnTemp = document.querySelectorAll(".popup__btn_temp");
if (btnTemp.length) {
  const popup = btnTemp[0].closest(".popup");
  const nextBtn = popup.querySelector(".popup__next-btn");
  const recommendation = popup.querySelector(".popup__recommended-wrap");
  const insulationBtn = popup.querySelector(".checkbox__input[data-name='insulation']");
  const heaterBtn = popup.querySelector(".checkbox__input[data-name='heater']");

  btnTemp.forEach((btn) => {
    btn.addEventListener("click", function () {
      // console.log("click");
      btnTemp.forEach((item) => {
        item.classList.remove("popup__btn_temp_active");
      });

      btn.classList.add("popup__btn_temp_active");
      nextBtn.classList.remove("btn_disabled");

      if (btn.dataset.value < -40) {
        recommendation.style.display = "grid";
      } else {
        recommendation.style.display = "none";
        delUrlQueryParam("insulation");
        insulationBtn.checked = false;
        delUrlQueryParam("heater");
        heaterBtn.checked = false;
      }
    });
  });
}

//выбор параметров и запись / удаление их в строке поиска.
const calcBtns = document.querySelectorAll("[data-calc-btn]");
if (calcBtns.length) {
  calcBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // console.log("click");

      if (btn.closest(".radio_disabled") || btn.closest(".checkbox_disabled")) {
        e.preventDefault();
        const size = getSize();
        if ((btn.dataset.value == "4" || btn.dataset.value == "3") && size == "S") {
          showWarning(btn.closest(".popup"));
        }
      } else {
        const name = btn.dataset.name;
        const value = btn.dataset.value;

        if (btn.type == "checkbox") {
          if (btn.checked) {
            setUrlQueryParam(name, value);
          } else {
            delUrlQueryParam(name);
          }
        } else {
          setUrlQueryParam(name, value);
        }
      }
    });
  });
}

// подсветка подсказки при клике на не активные кнопки:
const checkbox = document.querySelectorAll(".checkbox");
if (checkbox.length) {
  checkbox.forEach((item) => {
    item.addEventListener("click", function (e) {
      // console.log("click");
      if (item.classList.contains("checkbox_disabled")) {
        e.preventDefault();
        const popup = item.closest(".popup");
        showWarning(popup);
      }
    });
  });
}

function setSideFromTrk() {
  // console.log("******************** Старт функции setSideFromTrk **********************");
  const trk = getTrk();
  const type = getType();
  const oneSideBtn = document.querySelector(".radio__input[data-name='side'][data-value='1']");
  const twoSideBtn = document.querySelector(".radio__input[data-name='side'][data-value='2']");
  const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
  const sideBtns = document.querySelectorAll(".checkbox__input[name='side']");
  const trkBtns = Array.from(document.querySelectorAll("[data-calc-btn][data-name='trk']"));
  const size = getSize();
  let numberOfChecked = getCheckedFuels();

  if (trk == 1) {
    oneSideBtn.closest(".radio").classList.add("radio_disabled");
    twoSideBtn.closest(".radio").classList.add("radio_disabled");
    oneSideBtn.checked = true;
    delUrlQueryParam("side");
  }

  if (trk == 2) {
    oneSideBtn.closest(".radio").classList.remove("radio_disabled");
    twoSideBtn.closest(".radio").classList.remove("radio_disabled");
    oneSideBtn.checked = true;
    setUrlQueryParam("side", "1");
  }

  if (trk > 2) {
    oneSideBtn.closest(".radio").classList.add("radio_disabled");
    twoSideBtn.closest(".radio").classList.add("radio_disabled");
    twoSideBtn.checked = true;
    delUrlQueryParam("side");
  }

  if (type == "Cont") {
    oneSideBtn.closest(".radio").classList.add("radio_disabled");
    twoSideBtn.closest(".radio").classList.add("radio_disabled");
    oneSideBtn.checked = true;
    setUrlQueryParam("side", "1");
  }

  // если это контейнер:
  if (type == "Cont") {
    trkBtns.forEach((item) => {
      if (item.dataset.value > 2) {
        item.closest(".radio").classList.add("radio_disabled");
        item.checked = false;
      }
    });
    sideBtns.forEach((item) => {
      item.closest(".radio").classList.add("radio_disabled");
      item.checked = false;
    });
  }

  // если это не контейнер:
  if (type != "Cont") {
    if (numberOfChecked == 2) {
      trkBtns.forEach((item) => {
        if (item.dataset.value < 2) {
          item.closest(".radio").classList.add("radio_disabled");
        }
      });
    } else if (numberOfChecked == 3) {
      trkBtns.forEach((item) => {
        if (item.dataset.value < 3) {
          item.closest(".radio").classList.add("radio_disabled");
        }
      });
    } else if (numberOfChecked == 4) {
      trkBtns.forEach((item) => {
        if (item.dataset.value < 4) {
          item.closest(".radio").classList.add("radio_disabled");
        }
      });
    } else {
      trkBtns.forEach((item) => {
        item.closest(".radio").classList.remove("radio_disabled");
      });
    }
  }
}

function setSections() {
  // console.log("******************** Старт функции setSections **********************");
  const size = getSize();
  const type = getType();
  const fuels = getFuels();
  const side = getSide();
  const sections = getSections();
  const trkBtns = document.querySelectorAll(".radio__input[name='trk']");
  const sideBtns = document.querySelectorAll(".radio__input[name='side']");
  const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
  const sectionsBtns = document.querySelectorAll(".radio__input[data-name='sections']");
  const desc = document.querySelector(".popup__info-wrap_section");
  const sectionInputOne = sectionsBtns.entries().find((el) => el[1].dataset.value == "1");
  const sectionInputTwo = sectionsBtns.entries().find((el) => el[1].dataset.value == "2");
  const sectionInputThree = sectionsBtns.entries().find((el) => el[1].dataset.value == "3");
  const sectionInputFour = sectionsBtns.entries().find((el) => el[1].dataset.value == "4");
  const radioSectionOne = sectionInputOne[1].closest(".radio");
  const radioSectionTwo = sectionInputTwo[1].closest(".radio");
  const radioSectionThree = sectionInputThree[1].closest(".radio");
  const radioSectionFour = sectionInputFour[1].closest(".radio");
  const trkInputOne = trkBtns.entries().find((el) => el[1].dataset.value == "1");
  const trkInputTwo = trkBtns.entries().find((el) => el[1].dataset.value == "2");
  const trkInputThree = trkBtns.entries().find((el) => el[1].dataset.value == "3");
  const trkInputFour = trkBtns.entries().find((el) => el[1].dataset.value == "4");
  const radioTrkOne = trkInputOne[1].closest(".radio");
  const radioTrkTwo = trkInputTwo[1].closest(".radio");
  const radioTrkThree = trkInputThree[1].closest(".radio");
  const radioTrkFour = trkInputFour[1].closest(".radio");
  let numberOfChecked = getCheckedFuels();

  if (numberOfChecked) {
    nextStepBtnFive.classList.remove("btn_disabled");
  } else {
    nextStepBtnFive.classList.add("btn_disabled");
  }

  sectionsBtns.forEach((item) => {
    item.closest(".radio").classList.remove("radio_disabled");
  });

  fuelBtns.forEach((item) => {
    item.closest(".checkbox").classList.remove("checkbox_disabled");
  });

  trkBtns.forEach((el) => {
    el.closest(".radio").classList.remove("radio_disabled");
  });
  desc.style.display = "none";

  sideBtns.forEach((el) => {
    el.closest(".radio").classList.remove("radio_disabled");
  });

  // если это маленькая бочка то можно разделить только на 2 секции, трк до 4-х:
  if (size == "S" || type == "Cont") {
    // console.log(`size == "S"`);
    desc.style.display = "grid";
    sectionsBtns.forEach((item) => {
      if (item.dataset.value > 2) {
        item.closest(".radio").classList.add("radio_disabled");
      }
      if (item.checked == true && item.dataset.value > 2) {
        item.checked = false;
        sectionsBtns.forEach((el) => {
          if (el.dataset.value == 2) {
            el.checked = true;
          }
        });
      }
    });

    if (numberOfChecked == 1) {
      if (!sections) {
        sectionInputOne[1].checked = true;
        setUrlQueryParam("sections", 1);
      }
      setUrlQueryParam("trk", 1);
      delUrlQueryParam("side");
      trkInputOne[1].checked = true;
      sideBtns.forEach((el) => {
        el.closest(".radio").classList.add("radio_disabled");
        el.checked = false;
      });
    }

    if (numberOfChecked == 2) {
      if (!sections || sections < 2) {
        sectionInputTwo[1].checked = true;
        setUrlQueryParam("sections", 2);
      }
      radioSectionOne.classList.add("radio_disabled");
      trkInputTwo[1].checked = true;
      radioTrkOne.classList.add("radio_disabled");
      setUrlQueryParam("trk", 2);
      setUrlQueryParam("side", 1);

      fuelBtns.forEach((item) => {
        if (item.checked == false) {
          item.closest(".checkbox").classList.add("checkbox_disabled");
        }
      });
    }

    if (numberOfChecked > 2) {
      fuelBtns.forEach((item) => {
        if (item.checked == false) {
          item.closest(".checkbox").classList.remove("checkbox_disabled");
        }
        delUrlQueryParam(item.getAttribute("data-name"));
      });
    }
  }

  // если это не контейнер и не мальнекая бочка:
  if (size != "S" && type != "Cont") {
    // console.log(`size != "S" && type != "Cont"`);

    if (numberOfChecked == 1) {
      if (!sections) {
        sectionInputOne[1].checked = true;
        setUrlQueryParam("sections", 1);
      }
      trkInputOne[1].checked = true;
      setUrlQueryParam("trk", 1);
      delUrlQueryParam("side");

      sideBtns.forEach((el) => {
        el.closest(".radio").classList.remove("radio_disabled");
        if (el.dataset.value == 1) {
          el.checked = true;
        }
      });
    }

    if (numberOfChecked == 2) {
      if (!sections || sections < 2) {
        sectionInputTwo[1].checked = true;
        setUrlQueryParam("sections", 2);
      }
      radioSectionOne.classList.add("radio_disabled");
      trkInputTwo[1].checked = true;
      setUrlQueryParam("trk", 2);
      setUrlQueryParam("side", 1);

      sideBtns.forEach((el) => {
        el.closest(".radio").classList.remove("radio_disabled");
        if (el.dataset.value == 1) {
          el.checked = true;
        }
      });
    }

    if (numberOfChecked == 3) {
      if (!sections || sections < 3) {
        sectionInputThree[1].checked = true;
        setUrlQueryParam("sections", 3);
      }
      radioSectionOne.classList.add("radio_disabled");
      radioSectionTwo.classList.add("radio_disabled");
      trkInputThree[1].checked = true;
      setUrlQueryParam("trk", 3);
      delUrlQueryParam("side");

      sideBtns.forEach((el) => {
        el.closest(".radio").classList.add("radio_disabled");
        if (el.dataset.value == 2) {
          el.checked = true;
        }
      });
    }

    if (numberOfChecked == 4) {
      if (!sections || sections < 4) {
        sectionInputFour[1].checked = true;
        setUrlQueryParam("sections", 4);
      }
      radioSectionOne.classList.add("radio_disabled");
      radioSectionTwo.classList.add("radio_disabled");
      radioSectionThree.classList.add("radio_disabled");
      trkInputFour[1].checked = true;
      setUrlQueryParam("trk", 4);
      delUrlQueryParam("side");

      sideBtns.forEach((el) => {
        el.closest(".radio").classList.add("radio_disabled");
        if (el.dataset.value == 2) {
          el.checked = true;
        }
      });
    }
  }

  // если это средний контейнер:
  if (size != "S" && type == "Cont") {
    // console.log(`size != "S" && type == "Cont"`);

    sideBtns.forEach((el) => {
      el.closest(".radio").classList.add("radio_disabled");
      if (el.dataset.value == 1) {
        el.checked = true;
      }
    });

    if (numberOfChecked == 1) {
      if (!sections) {
        sectionInputOne[1].checked = true;
        setUrlQueryParam("sections", 1);
      }
      setUrlQueryParam("trk", 1);
      delUrlQueryParam("side");
      trkInputOne[1].checked = true;
      sideBtns.forEach((el) => {
        el.closest(".radio").classList.add("radio_disabled");
        el.checked = false;
      });
    }

    if (numberOfChecked == 2) {
      if (!sections || sections < 2) {
        sectionInputTwo[1].checked = true;
        setUrlQueryParam("sections", 2);
      }
      radioSectionOne.classList.add("radio_disabled");
      trkInputTwo[1].checked = true;
      radioTrkOne.classList.add("radio_disabled");
      setUrlQueryParam("trk", 2);
      setUrlQueryParam("side", 1);

      fuelBtns.forEach((item) => {
        if (item.checked == false) {
          item.closest(".checkbox").classList.add("checkbox_disabled");
        }
      });
    }

    if (numberOfChecked > 2) {
      fuelBtns.forEach((item) => {
        if (item.checked == false) {
          item.closest(".checkbox").classList.remove("checkbox_disabled");
        }
        delUrlQueryParam(item.getAttribute("data-name"));
      });
    }
  }

  // если это малый контейнер:
  if (size == "S" && type == "Cont") {
    // console.log(`size == "S" && type == "Cont"`);

    sideBtns.forEach((el) => {
      el.closest(".radio").classList.add("radio_disabled");
      if (el.dataset.value == 1) {
        el.checked = true;
      }
    });

    if (numberOfChecked == 1) {
      if (!sections) {
        sectionInputOne[1].checked = true;
        setUrlQueryParam("sections", 1);
      }
      setUrlQueryParam("trk", 1);
      delUrlQueryParam("side");
      trkInputOne[1].checked = true;
      sideBtns.forEach((el) => {
        el.closest(".radio").classList.add("radio_disabled");
        el.checked = false;
      });
    }

    if (numberOfChecked == 2) {
      if (!sections || sections < 2) {
        sectionInputTwo[1].checked = true;
        setUrlQueryParam("sections", 2);
      }
      radioSectionOne.classList.add("radio_disabled");
      trkInputTwo[1].checked = true;
      radioTrkOne.classList.add("radio_disabled");
      setUrlQueryParam("trk", 2);
      setUrlQueryParam("side", 1);

      fuelBtns.forEach((item) => {
        if (item.checked == false) {
          item.closest(".checkbox").classList.add("checkbox_disabled");
        }
      });
    }

    if (numberOfChecked > 2) {
      fuelBtns.forEach((item) => {
        if (item.checked == false) {
          item.closest(".checkbox").classList.remove("checkbox_disabled");
        }
        delUrlQueryParam(item.getAttribute("data-name"));
      });
    }
  }

  // блокировка количества видов топлива в зависимости от объема:
  numberOfChecked = getCheckedFuels();

  if (size == "S" && numberOfChecked == 2) {
    fuelBtns.forEach((item) => {
      if (item.checked == false) {
        item.closest(".checkbox").classList.add("checkbox_disabled");
      }
    });
  }
  if (type == "Cont" && numberOfChecked == 2) {
    fuelBtns.forEach((item) => {
      if (item.checked == false) {
        item.closest(".checkbox").classList.add("checkbox_disabled");
      }
    });
  }
}

// -------------------------------------------- end вспомогательные функции: ---------------------------------------------
//#endregion

// --------------------------------------------- start обработка событий кнопок калькулятора: ---------------------------------------------
//#region calc btns
// обработка событий для кнопок выбора типа:
const typeBtns = document.querySelectorAll(".popup__type-item");
if (typeBtns.length) {
  typeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // console.log("click");
      const size = getSize();
      const trk = getTrk();
      const sections = getSections();
      const side = getSide();
      const type = getType();
      const sectionsBtns = document.querySelectorAll(".radio__input[data-name='sections']");
      const sideBtns = document.querySelectorAll(".radio__input[data-name='side']");
      const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
      const trkBtns = document.querySelectorAll(".radio__input[data-name='trk']");
      const btnSectionOne = document.querySelector(".radio__input[data-name='sections'][data-value='1']");
      const btnSectionTwo = document.querySelector(".radio__input[data-name='sections'][data-value='2']");
      const btnSideOne = document.querySelector(".radio__input[data-name='side'][data-value='1']");
      const descVol = document.querySelector(".popup__info-text_volume");
      const descTrcCont = document.querySelector(".popup__info-text_trk-cont");
      const descTrc = document.querySelector(".popup__info-text_trk");
      const descFuel = document.querySelector(".popup__info-text_fuel");

      const popup = typeBtns[0].closest(".popup");
      const nextBtn = popup.querySelector(".popup__next-btn");
      const slider = document.querySelector(".popup__range-slider");
      const numberListUl = document.querySelector(".popup__range-list");
      const numberList = numberListUl.querySelectorAll(".popup__range-number");

      let activeFuelsQuontity = 0;
      fuelBtns.forEach((item) => {
        if (item.checked) {
          activeFuelsQuontity++;
        }
      });
      // console.log("activeFuelsQuontity", activeFuelsQuontity);

      typeBtns.forEach((item) => {
        item.classList.remove("popup__type-item_active");
      });

      btn.classList.add("popup__type-item_active");
      nextBtn.classList.remove("btn_disabled");

      if (btn.dataset.value == "Cont") {
        if (side == "2") {
          sideBtns.forEach((el) => {
            el.closest(".radio").classList.remove("radio_disabled");
            if (el.dataset.value == "2") {
              el.checked = false;
            }
            if (el.dataset.value == "1") {
              el.checked = true;
            }
          });
          setUrlQueryParam("side", "1");
        }

        trkBtns.forEach((el) => {
          if (el.dataset.value > 2) {
            el.closest(".radio").classList.add("radio_disabled");
          }
        });
        sideBtns.forEach((el) => {
          el.closest(".radio").classList.add("radio_disabled");
        });

        descVol.style.display = "block";
        descTrcCont.style.display = "block";
        descFuel.style.display = "block";
        descTrc.style.display = "block";
        numberList.forEach((item) => {
          if (item.innerHTML.trim() > 40) {
            item.classList.add("popup__range-number_hidden");
          }

          if (size == "L") {
            rangeSliderUpdate(slider, 40);
            setUrlQueryParam("volume", "40");
          }

          if (trk > "2") {
            setUrlQueryParam("trk", "2");
            setUrlQueryParam("side", "1");
          }

          if (activeFuelsQuontity > 2) {
            fuelBtns.forEach((item) => {
              item.checked = false;
              item.closest(".checkbox").classList.remove("checkbox_disabled");
              delUrlQueryParam(item.dataset.name);
              nextStepBtnFive.classList.add("btn_disabled");
            });
          } else if (activeFuelsQuontity == 2) {
            fuelBtns.forEach((item) => {
              if (!item.checked) {
                item.closest(".checkbox").classList.remove("checkbox_disabled");
              }
            });
          }
        });
      } else {
        fuelBtns.forEach((item) => {
          item.closest(".checkbox").classList.remove("checkbox_disabled");
        });

        descVol.style.display = "none";
        descTrcCont.style.display = "none";
        descFuel.style.display = "none";
        descTrc.style.display = "none";
        numberList.forEach((item) => {
          if (item.innerHTML.trim() > 40) {
            item.classList.remove("popup__range-number_hidden");
          }
        });

        // console.log(type);
        if (size == "S" || type == "Cont") {
          desc.style.display = "grid";
          sectionsBtns.forEach((el) => {
            if (el.dataset.value > 2) {
              el.closest(".radio").classList.add("radio_disabled");
              el.checked = false;
            }
            if (item.checked == true && item.dataset.value > 2) {
              item.checked = false;
              sectionsBtns.forEach((el) => {
                if (el.dataset.value == 2) {
                  el.checked = true;
                }
              });
            }
          });
        }

        if (activeFuelsQuontity > 2) {
          fuelBtns.forEach((item) => {
            item.checked = false;
            item.closest(".checkbox").classList.remove("checkbox_disabled");
            delUrlQueryParam(item.dataset.name);
            nextStepBtnFive.classList.add("btn_disabled");
          });
        } else if (activeFuelsQuontity == 2) {
          fuelBtns.forEach((item) => {
            if (!item.checked) {
              item.closest(".checkbox").classList.add("checkbox_disabled");
            }
          });
        }

        // TODO добавить проверку на количество выбранного топлива?
      }
    });
  });
}

const trkBtns = document.querySelectorAll("[data-calc-btn][data-name='trk']");
if (trkBtns.length) {
  trkBtns.forEach((item) => {
    item.addEventListener("click", function () {
      // console.log("click");
      setSideFromTrk();
    });
  });

  // функция работы с радиокнопками для сторон:
}

const fuelBtns = document.querySelectorAll(".checkbox__input[name='fuel']");
if (fuelBtns.length) {
  // подсчет количества выбранных видов топлива:

  fuelBtns.forEach((item) => {
    item.addEventListener("change", function (e) {
      // console.log("change");
      const sections = getSections();
      if (!sections) {
        setUrlQueryParam("sections", 1);
      }
      setSections();
    });
  });
}

const volumeInput = document.querySelector(".popup__range");
if (volumeInput) {
  volumeInput.addEventListener("input", function () {
    // console.log("input");
    const size = getSize();
    if (size == "S") {
      const volume = volumeInput.value;
    }
  });
}
// -------------------------------------- end обработка событий кнопок калькулятора ----------------
//#endregion

// -------------------------------------- start обработка событий кнопок перехода на следующий шаг ----------------
//#region calc steps
// переход на шаг 4 - выбора объема:
nextStepBtnThree.addEventListener("click", function () {
  // console.log("click");
  const size = getSize();
  if (!size) {
    setUrlQueryParam("volume", "5");
  }
});

// переход на шаг 5 - выбор топлива:
nextStepBtnFour.addEventListener("click", function () {
  // console.log("click");
  const sections = getSections();
  if (!sections) {
    setUrlQueryParam("sections", "1");
  }
  setSections();
});

// переход на шаг 6 - выбор ТРК:
nextStepBtnFive.addEventListener("click", function () {
  // console.log("click");
  const trk = getTrk();
  if (!trk) {
    setUrlQueryParam("trk", "1");
  }
  setSideFromTrk();
});
// -------------------------------------- end обработка событий кнопок перехода на следующий шаг ----------------
//#endregion

const queryParams = parseUrlQuery();
setCurrentParams(queryParams);

// -------------------------------------- start расчет цены ----------------
//#region calc price

async function fetchToDB(options) {
  let responseHouses = await fetch(options.script, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(options),
  });

  let result = [];
  if (responseHouses.ok) {
    // console.log("ok");
    result = await responseHouses.json();
    // console.log(result);
    // arr = Object.values(result.response);
    // console.log(result);
  } else {
    console.log("error");
  }

  return await result;
}

async function getPriceAZS() {
  const options = {
    script: "/backend/getInfo.php",
    function: "get",
    table: "price",
  };

  let arr = [];

  arr = fetchToDB(options);
  return arr;
}

async function getPriceHeating() {
  const options = {
    script: "/backend/getInfo.php",
    function: "get",
    table: "heating",
  };

  let arr = [];

  arr = fetchToDB(options);
  return arr;
}

let heating = await getPriceHeating();
let price = await getPriceAZS();

function setPrice() {
  let copyPrice = [...price];
  let copyHeating = [...heating];
  const params = parseUrlQuery();

  // фильтрация таблицы цен:
  if (params.find((param) => param.name == "type")) {
    copyPrice = filterPrice(params.find((param) => param.name == "type")["value"], "type", copyPrice);
  }

  if (params.find((param) => param.name == "volume")) {
    copyPrice = filterPrice(params.find((param) => param.name == "volume")["value"], "volume", copyPrice);
    copyHeating = filterPrice(params.find((param) => param.name == "volume")["value"], "volume", copyHeating);
  }
  console.log("copyPrice", copyPrice);

  if (params.find((param) => param.name == "sections")) {
    copyPrice = filterPrice(params.find((param) => param.name == "sections")["value"], "sections", copyPrice);
  }

  if (params.find((param) => param.name == "trk")) {
    let value = "";
    if (params.find((param) => param.name == "trk")["value"] == "2" && params.find((param) => param.name == "side")) {
      value =
        params.find((param) => param.name == "trk")["value"] +
        "_" +
        params.find((param) => param.name == "side")["value"];
    } else {
      value = params.find((param) => param.name == "trk")["value"];
    }
    copyPrice = filterPrice(value, "trk", copyPrice);
  }

  if (params.find((param) => param.name == "fast")) {
    let value = "";

    if (params.find((param) => param.name == "fast") && params.find((param) => param.name == "fast")["value"] != "0") {
      value = "f";
    } else {
      value = "0";
    }
    copyPrice = filterPrice(value, "fast", copyPrice);
  }
  console.log("copyPrice", copyPrice);
  // console.log("copyHeating", copyHeating);
  let priceAZS = parseInt(copyPrice[0].price);
  // console.log("priceAZS", priceAZS);

  if (
    params.find((param) => param.name == "insulation") &&
    params.find((param) => param.name == "insulation")["value"] == "1"
  ) {
    priceAZS += parseInt(copyHeating[0]["insulation"]);
    // console.log("priceAZS", priceAZS);
  }

  if (
    params.find((param) => param.name == "heater") &&
    params.find((param) => param.name == "heater")["value"] == "1"
  ) {
    priceAZS += parseInt(copyHeating[0]["heater"]);
    // console.log("priceAZS", priceAZS);
  }

  const textPrice = priceAZS.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return textPrice;
}

function filterPrice(value, name, arr) {
  return arr.filter((item) => item[name].toLowerCase() == value.toLowerCase());
}
// -------------------------------------- end расчет цены ----------------
//#endregion

// const advantagesCard = document.querySelectorAll(".advantages__card");
// // console.log(advantagesCard);
// if (advantagesCard.length > 0) {
//   advantagesCard.forEach((item) => {
//     if (item == advantagesCard[0]) {
//       // const svgAnimateNo = item.querySelector('.svgAnimateNo')
//       const svgAnimateYes = item.querySelector('.svgAnimateYes');
//       const animationItems = svgAnimateYes.querySelectorAll('animateTransform');
//       animationItems.forEach(el => el.removeAttribute('begin'));
//       console.log(animationItems);
//       // console.log(svgAnimateYes);  
  
//       // svgAnimateYes.style.display = 'none';
//       // svgAnimateNo.style.display = 'block';
  
//       item.addEventListener('click', () => {
//         animationItems.forEach(el => el.setAttribute('begin', '0s'));
//         console.log('dfgjdsfghdfgkjedrjg');
//         // svgAnimateYes.style.display = 'block';
//         // svgAnimateNo.style.display = 'none';
//         setTimeout(() => animationItems.forEach(el => el.removeAttribute('begin')), 1000);
//         // setTimeout(() => svgAnimateNo.style.display = 'block', 1000);
  
//       })
//     }
//   })
// }

// document.activeElement.addEventListener('click', (e) => {
//   console.log(e.target);
// });

const advantagesCards = document.querySelectorAll('.advantages__card');

if (advantagesCards.length > 0) {
  advantagesCards.forEach((item) => {
    const animate = item.querySelectorAll('animateTransform');
    item.addEventListener('mouseover', function() {
      animate.forEach((el) => {
        el.beginElement();
      })
    })

    const animate2 = item.querySelectorAll('animateMotion');
    item.addEventListener('mouseover', function() {
      animate2.forEach((el) => {
        el.beginElement();
      })
    })
  })
}

const additionBtns = document.querySelectorAll('.off-card__btn');
if (additionBtns && window.innerWidth <= 960) {
  additionBtns.forEach((btn) => {
    btn.classList.add('btn');
    btn.classList.add('btn_trans-orange');
  })
}

if (additionBtns && window.innerWidth > 960) {
  additionBtns.forEach((btn) => {
    btn.remove;
  })
}
