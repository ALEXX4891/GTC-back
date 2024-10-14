// let urlParams = new URLSearchParams(window.location.search);

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

const formAll = document.querySelectorAll(".os-form");

if (formAll) {
  console.log("formAll", formAll);
  formAll.forEach((form) => {
    form.addEventListener("submit", sendForm);

    async function sendForm(e) {
      e.preventDefault();

      let errore = formvalidation(form);

      if (errore === 0) {
        form.classList.add("_sending");
        let formData = new FormData(form);
        const dataRequest = form.closest(".popup").getAttribute("data-request");
        if (dataRequest) {
          formData.append("dataRequest", dataRequest);
        }

        let response = await fetch("/backend/post-mail.php", {
          method: "POST",
          body: formData,
        });

        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        if (response.ok) {
          // let result = await response.json();
          form.reset();
          if (formData.get("id") == 3) {
            popupOpen(document.getElementById("popup-success-subscribe"));
          } else {
            popupOpen(document.getElementById("success"));
          }
          form.classList.remove("_sending");
        } else {
          // popupOpen(document.getElementById("error"));
          form.classList.remove("_sending");
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
  console.log("тест");
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
      console.log("тест");
      const popupName = popupLink.getAttribute("data-popup");
      console.log(popupName);
      const curentPopup = document.getElementById(popupName); //получаем id попап-окна

      const dataRequest = popupLink.getAttribute("data-request");
      if (dataRequest) {
        console.log(curentPopup);
        curentPopup.setAttribute("data-request", dataRequest);
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
      console.log("тест");
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

    // // Импорт модулей для элементов управления на карте
    // const { YMapZoomControl, YMapGeolocationControl } = await ymaps3.import("@yandex/ymaps3-controls@0.0.1");

    // const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    // // кластеризация маркеров
    // const {YMapClusterer, clusterByGrid} = await ymaps3.import('@yandex/ymaps3-clusterer@0.0.1');
    // const clusterer = new YMapClusterer({
    //   method: clusterByGrid({gridSize: 128}),
    //   features: map._points,
    //   функция которая вернет YMapMarker для маркера,
    //   функция которая вернет YMapMarker для кластера
    // });
    // // https://yandex.ru/dev/maps/jsapi/doc/3.0/ref/packages/clusterer/index.html

    // Координаты центра карты

    // Иницилиазируем карту
    // Создание объекта карты
    if (document.getElementById("map")) {
      // const CENTER_COORDINATES = [65.79187000766548, 56.97004647141038];
      // координаты метки на карте
      // const MARKER_COORDINATES = [65.80127919688765, 56.971359032603615];

      // Объект с параметрами центра и зумом карты
      // const LOCATION = { center: CENTER_COORDINATES, zoom: 14.7 };
      // console.log("тест");
      const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        // document.querySelector(".map-yandex"),
        document.getElementById("map"),
        // Передаём параметры инициализации карты
        {
          location: {
            // Координаты центра карты
            center: [30.333316, 59.846034],
            // center: [59.846034, 30.333316],

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
        // { coordinates: [59.849966, 30.302950], title: "Детский сад", dataId: 1, img: "/assets/img/pin1.svg" },
        // { coordinates: [30.302950, 59.849966], title: "Офис", dataId: 1, img: "/assets/img/pin1.svg" },
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

      // // создаем маркер для ЖК
      // const markerElement = document.createElement("img");
      // markerElement.className = "marker";
      // markerElement.src = "/assets/img/pin.svg";
      // markerElement.title = "ЖК Сосновый";

      // // Контейнер для элементов маркера
      // const imgContainer = document.createElement("div");
      // imgContainer.className = "marker-wrap";

      // imgContainer.append(markerElement);

      // // Добавление маркера на карту
      // const marker = new YMapMarker(
      //   {
      //     coordinates: [65.80127919688765, 56.971359032603615],
      //     // draggable: true,
      //     mapFollowsOnDrag: true,
      //   },
      //   imgContainer
      // );
      // map.addChild(marker);
    }
  }
}

const filter = document.querySelectorAll(".map__mark-item_point");
if (filter.length) {
  filter.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("тест");
      item.classList.toggle("map__mark-item_active");
      checkAll();
    });
  });
}

const resetBtns = document.querySelector(".reset-btn");
if (resetBtns) {
  resetBtns.addEventListener("click", function () {
    console.log("тест");
    filter.forEach((item) => {
      item.classList.remove("map__mark-item_active");
      checkAll();
    });
  });
}

const allBtn = document.querySelector(".map__mark-item-all");
if (allBtn) {
  allBtn.addEventListener("click", function () {
    console.log("тест");
    if (allBtn.classList.contains("map__mark-item_active")) {
      allBtn.classList.remove("map__mark-item_active");
      filter.forEach((item) => {
        item.classList.remove("map__mark-item_active");
      });
    } else {
      filter.forEach((item) => {
        item.classList.add("map__mark-item_active");
      });
      allBtn.classList.add("map__mark-item_active");
    }
    checkAll();
  });
}

function checkAll() {
  console.log("тест");
  let activeItems = document.querySelectorAll(".map__mark-item_point.map__mark-item_active");
  // const menuItems = document.querySelectorAll(".map__mark-item_point");
  const markers = document.querySelectorAll(".marker-wrap");
  console.log(markers);
  console.log(activeItems.length);
  console.log(filter.length);

  // menuItems.forEach((item) => {
  //   if (item.classList.contains("map__mark-item_active")) {
  //     const id = item.getAttribute("data-id");
  //   } else {
  //     item.style.display = "none";
  //   }
  // });

  // if (markers.length) {
  //   markers.forEach((item) => {
  //     console.log(item);
  //     if (item.getAttribute("data-id")) {
  //       item.style.display = "none";
  //     } else {
  //       item.style.display = "block";
  //     }
  //   });
  // }

  if (activeItems.length) {
    const activIdArr = [];

    activeItems.forEach((item) => {
      const id = item.getAttribute("data-id");
      activIdArr.push(id);
    });

    markers.forEach((marker) => {
      if (activIdArr.includes(marker.getAttribute("data-id"))) {
        marker.style.display = "block";
      } else {
        marker.style.display = "none";
      }

      if (!marker.getAttribute("data-id")) {
        marker.style.display = "block";
      }
    });
  } else {
    markers.forEach((marker) => {
      marker.style.display = "none";
      if (!marker.getAttribute("data-id")) {
        marker.style.display = "block";
      }
    });
  }

  if (activeItems.length === filter.length) {
    allBtn.classList.add("map__mark-item_active");
    // markers.forEach((marker) => {
    //   marker.style.display = "block";
    // })
  } else {
    allBtn.classList.remove("map__mark-item_active");
    // markers.forEach((marker) => {
    //   marker.style.display = "block";
    // })
  }
}

const markListBtnOpen = document.querySelector(".map__menu-btn-filters");
const markListBtnClose = document.querySelector(".map__menu-btn-apply");

if (markListBtnOpen) {
  markListBtnOpen.addEventListener("click", function () {
    const markList = document.querySelector(".map__mark-list-wrap");
    console.log("тест");
    markList.classList.add("map__mark-list-wrap_active");
  });

  markListBtnClose.addEventListener("click", function () {
    const markList = document.querySelector(".map__mark-list-wrap");
    console.log("тест");
    markList.classList.remove("map__mark-list-wrap_active");
  });
}

// -------------------------------------------- end Карта ---------------------------------------------
//#endregion

const promoPopup = document.querySelector("#promo");
if (promoPopup) {
  const btns = document.querySelectorAll(".promo-link");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      renderPromo(btn);
    });
  });

  function renderPromo(btn) {
    const id = btn.getAttribute("data-id");
    const promoArr = document.querySelectorAll(".popup__promo");
    console.log(id);
    console.log(promoArr);

    promoArr.forEach((promo) => {
      if (promo.getAttribute("data-id") != id) {
        promo.style.display = "none";
      } else {
        promo.style.display = "block";
      }
    });
  }
}
// --------------------------------------------- end render promo -----------------------------

// -------------------------------------- start Url Query --------------------------
function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

function parseUrlQuery() {
  // console.log("*************** Старт функции parseUrlQuery ***************");
  let urlParams = new URLSearchParams(window.location.search);

  // const urlParams = new URLSearchParams(window.location.search);
  const filterArr = [];
  const res = [];
  urlParams.forEach((value, key) => {
    filterArr.push({ name: key, value: value });
  });
  // console.log("filterArr", filterArr);

  //   [
  //     {
  //         "name": "project",
  //         "value": "Все"
  //     },
  //     {
  //         "name": "house",
  //         "value": "2"
  //     },
  //     {
  //         "name": "section",
  //         "value": "2"
  //     },
  //     {
  //         "name": "rooms",
  //         "value": "2"
  //     },
  //     {
  //         "name": "date",
  //         "value": "IV квартал 2025"
  //     },
  //     {
  //         "name": "floor",
  //         "value": "2-4"
  //     },
  //     {
  //         "name": "cost",
  //         "value": "2330000-6260000"
  //     },
  //     {
  //         "name": "square",
  //         "value": "61-81"
  //     }
  // ]

  if (filterArr.find((item) => item.name === "project")) {
    const projectFilter = filterArr.find((item) => item.name === "project").value;
    res.push({
      name: "Проект",
      value: projectFilter,
    });
  }

  if (filterArr.find((item) => item.name === "rooms")) {
    const roomsFilter = filterArr.find((item) => item.name === "rooms").value;
    res.push({
      name: "Комнат",
      value: roomsFilter.split(",").map(Number),
    });
  }

  if (filterArr.find((item) => item.name === "square")) {
    const squareFilter = filterArr.find((item) => item.name === "square").value;
    res.push({
      name: "Площадь, м2",
      value: {
        from: squareFilter.split("-")[0],
        to: squareFilter.split("-")[1],
      },
    });
  }

  if (filterArr.find((item) => item.name === "cost")) {
    const costFilter = filterArr.find((item) => item.name === "cost").value;
    res.push({
      name: "Стоимость, ₽",
      value: {
        from: costFilter.split("-")[0],
        to: costFilter.split("-")[1],
      },
    });
  }

  if (filterArr.find((item) => item.name === "house")) {
    const houseFilter = filterArr.find((item) => item.name === "house").value;
    res.push({
      name: "Дом",
      value: houseFilter,
    });
  }

  if (filterArr.find((item) => item.name === "section")) {
    const sectionFilter = filterArr.find((item) => item.name === "section").value;
    res.push({
      name: "Секция",
      value: sectionFilter,
    });
  }

  if (filterArr.find((item) => item.name === "date")) {
    const dateFilter = filterArr.find((item) => item.name === "date").value;
    res.push({
      name: "Срок сдачи",
      value: dateFilter,
    });
  }

  if (filterArr.find((item) => item.name === "floor")) {
    const floorFilter = filterArr.find((item) => item.name === "floor").value;
    res.push({
      name: "Этаж",
      value: {
        from: floorFilter.split("-")[0],
        to: floorFilter.split("-")[1],
      },
    });
  }

  if (filterArr.find((item) => item.name.includes("option"))) {
    const btnsFilter = [];
    filterArr.forEach((item) => {
      if (item.name.includes("option")) {
        btnsFilter.push(item.name);
      }
    });
    res.push({
      name: "btns",
      value: btnsFilter,
    });
  }

  return res;
}

function setUrlQueryParam(param, value) {
  console.log("*************** Старт функции setUrlQuery ***************");
  urlParams.set(param, value);
  // showActiveItem(input);
  window.history.pushState({}, "", "?" + urlParams.toString());
  // apartRender(allApartsInfo);
}

// -------------------------------------- end Url Query -----------------------------
// -------------------------------------- start Калькулятор --------------------------
const btnTemp = document.querySelectorAll(".popup__btn_temp");
if (btnTemp.length) {
  btnTemp.forEach((btn) => {
    btn.addEventListener("click", function () {
      btnTemp.forEach((item) => {
        item.classList.remove("popup__btn_temp_active");
      });

      btn.classList.add("popup__btn_temp_active");

      const name = btn.dataset.name;
      const value = btn.dataset.value;
      console.log(name, " = ", value);
      // setUrlQueryParam(name, value);
    });
  });
}

const heater = document.querySelector(".heater");
if (heater) {
  heater.addEventListener("click", function (e) {
    e.preventDefault();
    const heaterDesc = document.querySelector(".heater-desc");
    if (heater.classList.contains("checkbox_disabled")) {
      heaterDesc.classList.add("popup__recommended-desc_active");
    } else {
      heaterDesc.classList.remove("popup__recommended-desc_active");
    }
    // heater.classList.toggle("heater_active");
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
  // текстовые инпуты:
  // const priceInputs = slider.querySelectorAll(
  //   ".choice__slider-select .select__input"
  // );
  // const textInputMin = slider.querySelector(".select__input_from");
  // const textInputMax = slider.querySelector(".select__input_to");
  // console.log(priceInputs);
  // рендж инпуты:
  const rangeInputs = slider.querySelectorAll(".range-inputs-wrap input");
  // const rangeInputMin = slider.querySelector(".min-range");
  const rangeInputMax = slider.querySelector(".max-range");

  // основные параметры:
  gap = gap;
  minRange = minRange;
  maxRange = maxRange;

  // присваиваем значения инпутам:
  // textInputMin.min = minRange;
  // textInputMax.min = minRange;
  // rangeInputMin.min = minRange;
  rangeInputMax.min = minRange;

  // textInputMin.max = maxRange;
  // textInputMax.max = maxRange;
  // rangeInputMin.max = maxRange;
  rangeInputMax.max = maxRange;

  // textInputMin.step = gap;
  // textInputMax.step = gap;
  // rangeInputMin.step = gap;
  rangeInputMax.step = gap;

  // value должно стоять соследним!!!
  // textInputMin.value = minRange;
  // textInputMax.value = maxRange;
  // rangeInputMin.value = minRange;
  rangeInputMax.value = minRange;

  // // обработка событий текстовых инпутов:
  // priceInputs.forEach((input) => {
  //   input.addEventListener("input", (e) => {
  //     //получаем значения из текстовых инпутов:
  //     let minVal = parseInt(textInputMin.value) ? parseInt(textInputMin.value) : minRange;
  //     let maxVal = parseInt(textInputMax.value);
  //     let diff = maxVal - minVal;

  //     // ограничиваем значение min инпута:
  //     // if (minVal < minRange) {
  //     //   // textInputMin.value = minRange;
  //     //   minVal = minRange;
  //     // }

  //     // ограничиваем значение max инпута:
  //     if (maxVal > maxRange) {
  //       // textInputMax.value = maxRange;
  //       maxVal = maxRange;
  //     }

  //     // ограничиваем максимальное значение min инпута:
  //     // if (e.target === textInputMin) {
  //     //   if (minVal > maxVal - gap) {
  //     //     // textInputMin.value = maxVal - gap;
  //     //     minVal = maxVal - gap;
  //     //   }
  //     // }

  //     // ограничиваем минимальное значение max инпута:
  //     // if (e.target === textInputMax) {
  //     //   if (maxVal < minVal + gap) {
  //     //     // textInputMax.value = minVal + gap;
  //     //     maxVal = minVal + gap;
  //     //   }
  //     // }

  //     // вычисляем положение рендж инпутов:
  //     if (diff >= gap) {
  //       rangeInputMax.value = maxVal;
  //       // rangeInputMin.value = minVal;
  //       rangeSlider.style.right = `${
  //         100 - ((maxVal - minRange) * 100) / (maxRange - minRange)
  //       }%`;
  //       // rangeSlider.style.left = `${
  //       //   ((minVal - minRange) * 100) / (maxRange - minRange)
  //       // }%`;
  //     }
  //   });
  // });

  rangeInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      console.log("-----------------****---------------");
      console.log("gap", gap);
      console.log("minRange", minRange);
      console.log("maxRange", maxRange);
      console.log("value", input.value);
      //получаем значения из текстовых инпутов:
      let minVal = minRange;
      let maxVal = parseInt(rangeInputMax.value);
      let diff = maxVal - minVal;
      console.log("minVal", minVal);
      console.log("maxVal", maxVal);
      console.log("diff", diff);

      // ограничиваем значение min инпута:
      // if (minVal < minRange) {
      //   // rangeInputMin.value = minRange;
      //   minVal = minRange;
      // }

      // ограничиваем значение max инпута:
      if (maxVal >= maxRange) {
        rangeInputMax.value = maxRange;
        maxVal = maxRange;
      }

      if (maxVal <= minVal) {
        rangeInputMax.value = minRange;
        maxVal = minRange;
      }

      // ограничиваем максимальное значение min инпута:
      // if (e.target === rangeInputMin) {
      //   if (minVal > maxVal - gap) {
      //     // rangeInputMin.value = maxVal - gap;
      //     minVal = maxVal - gap;
      //   }
      // }

      // // ограничиваем минимальное значение max инпута:
      // if (e.target === rangeInputMax) {
      //   if (maxVal < minVal + gap) {
      //     rangeInputMax.value = minVal + gap;
      //     maxVal = minVal + gap;
      //   }
      // }

      // вычисляем положение рендж инпутов:
      // if (diff >= gap) {

      // textInputMin.value = minVal;
      // textInputMax.value = maxVal;
      rangeSlider.style.right = `${
        100 - ((maxVal - minRange) * 100) / (maxRange - minRange)
        // ((minVal - minRange) * 100) / (maxRange - minRange)
      }%`;
      // rangeSlider.style.left = `${
      //   ((minVal - minRange) * 100) / (maxRange - minRange)
      // }%`;
      // }
    });
  });
}

// -------------------------------------------- end range-slider: ---------------------------------------------
