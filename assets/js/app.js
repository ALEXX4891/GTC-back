let urlParams = new URLSearchParams(window.location.search);
window.history.pushState({}, document.title, window.location.pathname);
urlParams = new URLSearchParams(window.location.search);

// ---------------------------------- start menu ----------------------------------

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
// ---------------------------------- end menu ----------------------------------

// ---------------------------------- start плавающие кнопки: ----------------------------------

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
// ---------------------------------- start отправка и валидация формы ----------------------------------

const formAll = document.querySelectorAll(".form");

if (formAll) {
  formAll.forEach((form) => {
    form.addEventListener("submit", sendForm);

    async function sendForm(e) {
      e.preventDefault();

      let errore = formvalidation(form);

      if (errore === 0) {
        let formData = new FormData(form);

        const wrapper = form.closest(".form-wrap");
        wrapper.classList.add("_sending");

        let response = await fetch("/backend/post-mail.php", {
          method: "POST",
          body: formData,
        });

        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

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

// ------------------------- start WEBP: ---------------------------

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
// ------------------------- start FANCYBOX: ---------------------------
const body = document.querySelector("body");
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// ------------------------- end FANCYBOX: ---------------------------

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
});

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

new Swiper(".results_bot_swiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,
  // allowTouchMove: true,
  // slidesPerView: auto, // сколько слайдов показывать, можно дробно
  // slidesPerView: 1, // сколько слайдов показывать, можно дробно
  // slidersPerGroup: 3, // сколько слайдов в группе
  // centeredSlides: true, //выравнивание слайдов по центру
  // initialSlide: 0, //начальный слайд (c нуля)

  spaceBetween: 10000,
  thumbs: {
    swiper: thumbs_swiper,
  },
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
});

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
      console.log("тест");
      popupClose(el.closest(".popup")); //ближайший родитель класса popup
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      // закрываем текущий открытый попап, если он есть
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    // console.log(curentPopup);
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      // console.log("тест");
      if (!e.target.closest(".popup__content")) {
        // если клик был по области вокруг попапа то ничего не делаем
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  console.log("popupClose");
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
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

// -------------------------------------------- end popup: ---------------------------------------------
//#endregion

// -------------------------------------------- start BURGER: ---------------------------------------------

const burger = document.querySelector(".burger");
// console.log(burger);

if (burger) {
  const popup = document.querySelector("#popup-menu");
  const popupContent = popup.querySelector(".popup__content");

  const content = document.querySelector(".header__nav");
  const headerNavWrap = document.querySelector(".header__nav-wrap");

  burger.addEventListener("click", function (e) {
    console.log("тест");
    popupOpen(popup);
    // bodyLock()
    popup.classList.add("open");
    popupContent.append(content);
    console.log(popup);
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

$(".phone").mask("8(999) 999 99 99");
// console.log(urlParams);

// -------------------------------------------- start Куки: ---------------------------------------------
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
    console.log("тест");
    e.preventDefault();
    acceptCookiePolicy();
  });
}

const cookieCloseBtn = document.querySelector(".cookie__close");
if (cookieCloseBtn) {
  cookieCloseBtn.addEventListener("click", function (e) {
    console.log("тест");
    e.preventDefault();
    closeCookiePolicyNotification();
  });
}
// -------------------------------------------- end Куки ---------------------------------------------

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
            center: [30.333316, 59.846034],

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
        { coordinates: [30.30295, 59.849966], title: "Setl center", dataId: 1, img: "/assets/img/pin.svg" },
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

function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

// /?rooms=2
// parseUrlQuery();

function parseUrlQuery() {
  console.log("*************** Старт функции parseUrlQuery ***************");
  const filterArr = [];
  urlParams.forEach((value, key) => {
    filterArr.push({ name: key, value: value });
  });
  // console.log(filterArr);
  return filterArr;
}

function setUrlQueryParam(param, value) {
  console.log("*************** Старт функции setUrlQueryParam ***************");
  urlParams.set(param, value);
  // showActiveItem(input);
  window.history.pushState({}, "", "?" + urlParams.toString());
  // apartRender(allApartsInfo);
  pastImageName();
}

function delUrlQueryParam(param) {
  console.log("*************** Старт функции delUrlQueryParam ***************");
  urlParams.delete(param);
  window.history.pushState({}, "", "?" + urlParams.toString());
  pastImageName();
}

// function setParamsFromGet {

// }

//функция формирования имени изображения
function getImageName() {
  console.log("*************** Старт функции getImageName ***************");
  // [
  //   {
  //     "name": "usage",
  //     "value": "Personal"
  //   },
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
  //     "value": "cont"
  //   },
  //   {
  //     "name": "volume",
  //     "value": "60"
  //   },
  //   {
  //     "name": "petrol-95",
  //     "value": "1"
  //   },
  //   {
  //     "name": "petrol-92",
  //     "value": "1"
  //   },
  //   {
  //     "name": "sections",
  //     "value": "2"
  //   },
  //   {
  //     "name": "trk",
  //     "value": "4"
  //   },
  //   {
  //     "name": "side",
  //     "value": "2"
  //   },
  //   {
  //     "name": "fast",
  //     "value": "2"
  //   }
  // ]
  let name = "";

  const queryParams = parseUrlQuery();

  let type = "";
  let volume = "";
  // let fuel = '';
  let sections = "";
  let trk = "";
  let side = "";
  let fast = "";

  console.log(queryParams);
  // тип
  if (queryParams.filter((item) => item.name == "type").length) {
    const typeParam = queryParams.filter((item) => item.name == "type");
    type = typeParam[0]["value"];

    name = `/assets/img/renders/${type}_S.png`;
  }

  // объем
  if (queryParams.filter((item) => item.name == "volume").length) {
    const type = queryParams.filter((item) => item.name == "type")[0]["value"];
    let volumePar = queryParams.filter((item) => item.name == "volume")[0]["value"];
    if (volumePar < 25) {
      volume = "S";
    } else if (volumePar < 45) {
      volume = "M";
    } else {
      if (type == "cont") {
        volume = "M";
      } else {
        volume = "L";
      }
      // TODO переписать, ограничить контейнер до 45 м3?
    }
    name = `/assets/img/renders/${type}_${volume}.png`;
  }

  // секции
  if (queryParams.filter((item) => item.name == "sections").length) {
    const sectionsParam = queryParams.filter((item) => item.name == "sections");
    sections = sectionsParam[0]["value"];

    name = `/assets/img/renders/${type}_${volume}_${sections}r.png`;
  }

  // трк
  if (queryParams.filter((item) => item.name == "trk").length) {
    const trkParam = queryParams.filter((item) => item.name == "trk");
    trk = trkParam[0]["value"];
    name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}k.png`;

    const sideParam = queryParams.filter((item) => item.name == "side");
    if (sideParam.length) {
      side = sideParam[0]["value"];
      name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}.${side}k.png`;
    }
  }

  // скоростная выдача
  if (queryParams.filter((item) => item.name == "fast").length) {
    const fastParam = queryParams.filter((item) => item.name == "fast");
    const sideParam = queryParams.filter((item) => item.name == "side");

    if (fastParam[0]["value"] > 0) {
      fast = "+";
      // name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}k_${fast}.png`;
      if (sideParam.length) {
        name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}.${side}k_${fast}.png`;
      } else {
        name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}k_${fast}.png`;
      }
    } else {
      fast = "";
      if (sideParam.length) {
        name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}.${side}k.png`;
      } else {
        name = `/assets/img/renders/${type}_${volume}_${sections}r_${trk}k.png`;
      }
    }
  }

  // name = `/assets/img/renders/${type}_${volume}.png`;
  console.log(name);
  return name;
}

//функция подстановки имени изображения
function pastImageName() {
  console.log("*************** Старт функции pastImageName ***************");
  const imageName = getImageName();
  const images = document.querySelectorAll(".popup__type-img");
  images.forEach((item) => {
    item.querySelector("img").src = imageName;
  });
}

// дата атрибуты кнопок формы:
// data-calc-btn
// data-name="usage"
// data-value="Personal"

// -------------------------------------- end Url Query -----------------------------
// -------------------------------------- start Калькулятор --------------------------
const btnTemp = document.querySelectorAll(".popup__btn_temp");
if (btnTemp.length) {
  const popup = btnTemp[0].closest(".popup");
  const nextBtn = popup.querySelector(".popup__next-btn");

  btnTemp.forEach((btn) => {
    btn.addEventListener("click", function () {
      btnTemp.forEach((item) => {
        item.classList.remove("popup__btn_temp_active");
      });

      btn.classList.add("popup__btn_temp_active");
      nextBtn.classList.remove("btn_disabled");
    });
  });
}

// обработка событий для кнопок выбора типа:
const btnType = document.querySelectorAll(".popup__type-item");
if (btnType.length) {
  const popup = btnType[0].closest(".popup");
  const nextBtn = popup.querySelector(".popup__next-btn");

  const type = checkType;

  const slider = document.querySelector(".popup__range-slider");
  const numberListUl = document.querySelector(".popup__range-list");
  const numberList = numberListUl.querySelectorAll(".popup__range-number");

  btnType.forEach((btn) => {
    btn.addEventListener("click", function () {
      btnType.forEach((item) => {
        item.classList.remove("popup__type-item_active");
      });

      btn.classList.add("popup__type-item_active");
      nextBtn.classList.remove("btn_disabled");

      // TODO написать функцию сброса параметров
      if (btn.dataset.value == "cont") {

        numberList.forEach((item) => {
          if (item.innerHTML.trim() > 40) {
            // item.style.display = "none";
          } else {
            // item.style.display = "list-item";
          }
        });

        // rangeSliderInit(slider, 5, 5, 40);

        // // удаляем параметры, которые не нужны для контейнера
        // delUrlQueryParam("sections");
        // delUrlQueryParam("trk");
        // delUrlQueryParam("side");
        // delUrlQueryParam("fast");
        // delUrlQueryParam("volume");
        // // перезаписываем параметры
        // setUrlQueryParam("type", btn.dataset.value);
        // setUrlQueryParam("volume", "60");
        // // подставляем новое изображение
        // pastImageName();
        // // перезаписываем параметры
        // setUrlQueryParam("type", btn.dataset.value);
        // setUrlQueryParam("volume", "60");
        // // подставляем новое изображение
        // pastImageName();
        // // перезаписываем параметры
        // setUrlQueryParam("type", btn.dataset.value);
        // setUrlQueryParam("volume", "60");
        // // подставляем новое изображение
        // pastImageName();
        // // перезаписываем параметры
        // setUrlQueryParam("type", btn.dataset.value);
      } else {
        numberList.forEach((item) => {
          // item.style.display = "list-item";
        });
        // rangeSliderInit(slider, 5, 5, 60);


      }
    });
  });
}

//выбор параметров и запись / удаление их в строке поиска.
const calcBtns = document.querySelectorAll("[data-calc-btn]");
if (calcBtns.length) {
  calcBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
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
    });
  });
}

const checkbox = document.querySelectorAll(".checkbox");
if (checkbox.length) {
  checkbox.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (item.classList.contains("checkbox_disabled")) {
        e.preventDefault();
        const popup = item.closest(".popup");
        const desc = popup.querySelector(".popup__recommended-desc");
        desc.classList.add("popup__recommended-desc_active");
        setTimeout(function () {
          desc.classList.remove("popup__recommended-desc_active");
        }, 1000);
      }
    });
  });
}

// -------------------------------------- end Калькулятор -----------------------------

// -------------------------------------------- start range-slider: ---------------------------------------------

const slider = document.querySelector(".popup__range-slider");
if (slider) {
  rangeSliderInit(slider, 5, 5, 60);
}

function rangeSliderInit(slider, gap, minRange, maxRange) {
  const rangeSlider = slider.querySelector(".range-slider");

  // рендж инпуты:
  const rangeInputs = slider.querySelectorAll(".range-inputs-wrap input");
  const rangeInputMax = slider.querySelector(".max-range");

  // основные параметры:
  // const gap = gap;
  // const minRange = minRange;
  // const maxRange = maxRange;
  
  rangeInputMax.min = minRange;
  rangeInputMax.max = maxRange;
  rangeInputMax.step = gap;
  rangeInputMax.value = minRange;
  
  rangeInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const type = checkType();
      const sections = checkSections();
      //получаем значения из текстовых инпутов:
      let minVal = minRange;
      let maxVal = parseInt(input.value);
      let value = parseInt(input.value);
      // ограничиваем значение max инпута:
      // console.log('type', type);
      if (type == "cont" && value >= 40) {
        
        // if (parseInt(rangeInputMax.value) >= 40) {
          input.value = 40;
          value = 40;
          maxVal = 40;
        // }
      } if (sections == "4" && value <= 25) {
        input.value = 25;
        value = 25;
        maxVal = 25;
      
      } else {
        if (maxVal >= maxRange) {
          rangeInputMax.value = maxRange;
          maxVal = maxRange;
        }
      }
      
      console.log('parseInt(input.value)', value);
      if (maxVal <= minVal) {
        value = minRange;
        maxVal = minRange;
      }

      rangeSlider.style.right = `${100 - ((maxVal - minRange) * 100) / (maxRange - minRange)}%`;

      // const name = 'volume';
      // const value = parseInt(rangeInputMax.value);
      // setUrlQueryParam(name, value);

      // const name = "volume";
      // let value = volume.value;
      const rangeNumbers = document.querySelectorAll(".popup__range-number");
  
      // if (type == "cont" && value >= 40) {    
        // value = 40;
        // setUrlQueryParam(name, value);
        // TODO добавить установку параметров рэндж слайдера
      // } else {
        // value = volume.value;
        // setUrlQueryParam(name, value);
      // }
  
  
  
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

// TODO написать функцию установки параметров слайдера и других параметров

// -------------------------------------------- end range-slider: ---------------------------------------------

// разблокировка подогоревателя при выборе утеплителя:
const insulationBtn = document.querySelector(".insulation");
const heaterBtn = document.querySelector(".heater");
if (insulationBtn && heaterBtn) {
  console.log(insulationBtn);
  console.log(heaterBtn);

  insulationBtn.addEventListener("click", function (e) {
    console.log(insulationBtn.querySelector("input").checked);

    if (insulationBtn.querySelector("input").checked) {
      heaterBtn.classList.remove("checkbox_disabled");
    } else {
      heaterBtn.classList.add("checkbox_disabled");
      heaterBtn.querySelector("input").checked = false;
      const name = heaterBtn.querySelector("input").dataset.name;
      delUrlQueryParam(name);
    }
  });
}

// утановка минимального объема при переходе на этам выбора объема:
const volumeStepBtn = document.querySelector(".popup__next-btn_volume");
if (volumeStepBtn) {
  volumeStepBtn.addEventListener("click", function () {
    // const volume = checkVolume();
    // const type = checkType();

    // urlParams.forEach((value, key) => {
    //   if (key == "volume") {
    //     volume = value;
    //   }

    //   if (key == "type") {
    //     type = value;
    //   }
    // });

    // numberList.forEach((item) => {
    //   if (item.innerHTML.trim() > 40) {
    //     item.style.display = "none";
    //   } else {
    //     item.style.display = "list-item";
    //   }
    // });

    // rangeSliderInit(slider, 5, 5, 40);
    // setUrlQueryParam("volume", "5");
    // }
    // } else {
    //   console.log("22222222222222222");

    //   numberList.forEach((item) => {
    //     item.style.display = "list-item";
    //   });

    //   rangeSliderInit(slider, 5, 5, 60);
    //   setUrlQueryParam("volume", "5");

    // if (!volume && type == "cont") {
    //   numberList.forEach((item) => {
    //     if (item.innerHTML.trim() > 40) {
    //       item.style.display = "none";
    //     } else {
    //       item.style.display = "list-item";
    //     }
    //   });

    // rangeSliderInit(slider, 5, 5, 40);
    // setUrlQueryParam("volume", "5");
    // }
  });
}

function checkUsage() {
  const urlParams = new URLSearchParams(window.location.search);
  let usage = "";
  urlParams.forEach((value, key) => {
    if (key == "usage") {
      usage = value;
    }
  });
  return usage;
}

function checkTemperature() {
  const urlParams = new URLSearchParams(window.location.search);
  let temperature = "";
  urlParams.forEach((value, key) => {
    if (key == "temperature") {
      temperature = value;
    }
  });
  return temperature;
}

function checkInsulation() {
  const urlParams = new URLSearchParams(window.location.search);
  let insulation = "";
  urlParams.forEach((value, key) => {
    if (key == "insulation") {
      insulation = value;
    }
  });
  return insulation;
}

function checkHeater() {
  const urlParams = new URLSearchParams(window.location.search);
  let heater = "";
  urlParams.forEach((value, key) => {
    if (key == "heater") {
      heater = value;
    }
  });
  return heater;
}

function checkType() {
  const urlParams = new URLSearchParams(window.location.search);
  let type = "";
  urlParams.forEach((value, key) => {
    if (key == "type") {
      console.log(value, key);
      type = value;
    }
  });
  return type;
}

function checkVolume() {
  const urlParams = new URLSearchParams(window.location.search);
  let volume = "";
  urlParams.forEach((value, key) => {
    if (key == "volume") {
      volume = value;
    }
  });
  return volume;
}

function checkDiesel() {
  const urlParams = new URLSearchParams(window.location.search);
  let diesel = "";
  urlParams.forEach((value, key) => {
    if (key == "diesel") {
      diesel = value;
    }
  });
  return diesel;
}

function checkPetrol92() {
  const urlParams = new URLSearchParams(window.location.search);
  let petrol92 = "";
  urlParams.forEach((value, key) => {
    if (key == "petrol-92") {
      petrol92 = value;
    }
  });
  return petrol92;
}

function checkPetrol95() {
  const urlParams = new URLSearchParams(window.location.search);
  let petrol95 = "";
  urlParams.forEach((value, key) => {
    if (key == "petrol-95") {
      petrol95 = value;
    }
  });
  return petrol95;
}

function checkOther() {
  const urlParams = new URLSearchParams(window.location.search);
  let other = "";
  urlParams.forEach((value, key) => {
    if (key == "other") {
      other = value;
    }
  });
  return other;
}

function checkSections() {
  const urlParams = new URLSearchParams(window.location.search);
  let sections = "";
  urlParams.forEach((value, key) => {
    if (key == "sections") {
      sections = value;
    }
  });
  return sections;
}

function checkTrk() {
  const urlParams = new URLSearchParams(window.location.search);
  let trk = "";
  urlParams.forEach((value, key) => {
    if (key == "trk") {
      trk = value;
    }
  });
  return trk;
}

function checkSide() {
  const urlParams = new URLSearchParams(window.location.search);
  let side = "";
  urlParams.forEach((value, key) => {
    if (key == "side") {
      side = value;
    }
  });
  return side;
}

function checkFast() {
  const urlParams = new URLSearchParams(window.location.search);
  let fast = "";
  urlParams.forEach((value, key) => {
    if (key == "fast") {
      fast = value;
    }
  });
  return fast;
}

// утановка минимального количества секции при переходе на этап выбора секций:
const sectionStepBtn = document.querySelector(".popup__next-btn_sections");
if (sectionStepBtn) {
  sectionStepBtn.addEventListener("click", function () {
    const sections = "";
    urlParams.forEach((value, key) => {
      if (key == "sections") {
        sections = value;
      }
    });

    if (!sections) {
      setUrlQueryParam("sections", "1");
    }
  });
}

// утановка минимального количества ТРК и стороны при переходе на этап выбора ТРК:
const trkStepBtn = document.querySelector(".popup__next-btn_trk");
if (trkStepBtn) {
  trkStepBtn.addEventListener("click", function () {
    const trk = "";
    // const side = '';
    urlParams.forEach((value, key) => {
      if (key == "trk") {
        trk = value;
      }
      // if (key == 'side') {
      //   side = value;
      // }
    });
    if (!trk) {
      setUrlQueryParam("trk", "1");
    }
    // if (!side) {
    //   setUrlQueryParam('side', '1')
    // }
  });
}

// const twoTrkBtn = document.querySelector("[data-calc-btn][data-name='trk'][data-value='2']");
// if (twoTrkBtn) {
//   twoTrkBtn.addEventListener('click', function() {
//     const side = '';
//     urlParams.forEach((value, key) => {
//       if (key == 'side') {
//         side = value;
//       }
//     });
//     if (!side) {
//       setUrlQueryParam('side', '1')
//       oneSideBtn.closest('.radio').classList.remove("radio_disabled");
//       twoSideBtn.closest('.radio').classList.remove("radio_disabled");
//       oneSideBtn.checked = true;
//     }

// TODO отключить закрытие модалок калькулятора при нажатии на  область вне модалки

const trkBtns = document.querySelectorAll("[data-calc-btn][data-name='trk']");
if (trkBtns.length) {
  const oneSideBtn = document.querySelector("[data-calc-btn][data-name='side'][data-value='1']");
  const twoSideBtn = document.querySelector("[data-calc-btn][data-name='side'][data-value='2']");
  trkBtns.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.dataset.value != 2) {
        oneSideBtn.closest(".radio").classList.add("radio_disabled");
        twoSideBtn.closest(".radio").classList.add("radio_disabled");
        oneSideBtn.checked = false;
        twoSideBtn.checked = false;
        delUrlQueryParam("side");
      } else {
        oneSideBtn.closest(".radio").classList.remove("radio_disabled");
        twoSideBtn.closest(".radio").classList.remove("radio_disabled");
        oneSideBtn.checked = true;
        setUrlQueryParam("side", "1");
      }
    });
    // if (item.dataset.value == 2) {
    //   item.closest('.radio').classList.remove("radio_disabled");
    // } else {
    //   item.closest('.radio').classList.add("radio_disabled");
    // }
    // item.checked = false;
    // delUrlQueryParam('side');
  });

  //   })
}

// -------------------------------------------- start Карточки предложений: ---------------------------------------------

const offerCards = document.querySelectorAll(".offers__slider-item");
if (offerCards.length) {
  offerCards.forEach((item) => {

    // const cardTitle = item.querySelector(".offers__slider-item_title");
    // const cardSubtitle = item.querySelector(".offers__slider-item_subtitle");
    // const cardDesc = item.querySelector(".offers__slider-item_desc");
    // const cardImg = item.querySelector(".offers__slider-item_img");
    const cardText = item.querySelector(".off-card__text");
    const cardMoreBtn = item.querySelector(".btn_modal");
    const cardConsultBtn = item.querySelector(".btn_cons");
    const cardCalcBtn = item.querySelector(".btn_calc");

    // const card = item.closest(".card_about");
    // const truthCardTextBlock = card.querySelector(".card__desc_hide");
    // const truthCardText = cardText.innerHTML;
    // const cardTextBlockForShow = card.querySelector(".card__desc_show");
    // card.classList.remove("card_about_open");
    // const cardTextTrim = truthCardText.slice(0, 140) + "...";
    // cardText.innerHTML = cardTextTrim;

    $clamp(cardText, {clamp: 2});
})
// document.addEventListener("click", function (e) {
//   // закрытие отзывов при клике на другой елемент:
//   if (!e.target.closest(".card_about_open")) {
//     const cardsFeedback = document.querySelectorAll(".card_about");

//     cardsFeedback.forEach((item) => {
//       item.classList.remove("card_about_open");
//     });
//   }

//   // открытие отзывов:
//   const openBtns = document.querySelectorAll(".feedback-btn_open");
//   if (openBtns) {
//     openBtns.forEach((item) => {
//       if (e.target.closest(".feedback-btn_open") == item) {
//         const card = item.closest(".card_about");
//         const truthCardTextBlock = card.querySelector(".card__desc_hide");
//         const truthCardText = truthCardTextBlock.textContent;
//         const cardTextBlockForShow = card.querySelector(".card__desc_show");
//         card.classList.add("card_about_open");
//         cardTextBlockForShow.textContent = truthCardText;
//       }
//     });
//   }

//   // закрытие отзывов:
//   const closeBtns = document.querySelectorAll(".feedback-btn_close");
//   if (closeBtns) {
//     closeBtns.forEach((item) => {
//       if (e.target.closest(".feedback-btn_close") == item) {
//         const card = item.closest(".card_about");
//         const truthCardTextBlock = card.querySelector(".card__desc_hide");
//         const truthCardText = truthCardTextBlock.textContent;
//         const cardTextBlockForShow = card.querySelector(".card__desc_show");
//         card.classList.remove("card_about_open");
//         const cardTextTrim = truthCardText.slice(0, 140) + "...";
//         cardTextBlockForShow.textContent = cardTextTrim;
//       }
//     });
//   }
// });

// // форматирование отзывов при загрузке страницы:
// const cardsFeedback = document.querySelectorAll(".card_about");
// if (cardsFeedback.length) {
//   cardsFeedback.forEach((item) => {
//     const truthCardTextBlock = item.querySelector(".card__desc_hide");
//     const truthCardText = truthCardTextBlock.textContent;
//     // console.log(truthCardText);
//     const cardTextBlockForShow = item.querySelector(".card__desc_show");

//     if (truthCardText.length > 160) {
//       item.classList.add("card_about_overflow");
//       const cardTextTrim = truthCardText.slice(0, 140) + "...";
//       cardTextBlockForShow.textContent = cardTextTrim;
//     } else {
//       cardTextBlockForShow.textContent = truthCardText;
//     }
//   });
}

// -------------------------------------------- end Карточки предложений ---------------------------------------------
