let urlParams = new URLSearchParams(window.location.search);

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
  urlParams.delete(param)
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
  //     "value": "sale"
  //   },
  //   {
  //     "name": "temperature",
  //     "value": "-50"
  //   },
  //   {
  //     "name": "insulation",
  //     "value": "1"
  //   },
  //   {
  //     "name": "type",
  //     "value": "close"
  //   },
  //   {
  //     "name": "volume",
  //     "value": "15"
  //   }
  // ]

  let name = "";

  const queryParams = parseUrlQuery();

  console.log(queryParams);
  if (queryParams.filter((item) => item.name == "type").length) {
    const typeParam = queryParams.filter((item) => item.name == "type");
    console.log(typeParam);
    const type = typeParam[0]["value"];

    name = `/assets/img/renders/${type}_S.png`;
  }

  if (queryParams.filter((item) => item.name == "volume").length) {
    const type = queryParams.filter((item) => item.name == "type")[0]["value"];
    let volume = queryParams.filter((item) => item.name == "volume")[0]["value"];
    if (volume < 25) {
      volume = "S";
    } else if (volume < 45) {
      volume = "M";
    } else {
      if (type == "cont") {
        volume = "M";
      } else {
        volume = "L";
      }
    }
    name = `/assets/img/renders/${type}_${volume}.png`;
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

const btnType = document.querySelectorAll(".popup__type-item");
if (btnType.length) {
  const popup = btnType[0].closest(".popup");
  const nextBtn = popup.querySelector(".popup__next-btn");

  btnType.forEach((btn) => {
    btn.addEventListener("click", function () {
      btnType.forEach((item) => {
        item.classList.remove("popup__type-item_active");
      });

      btn.classList.add("popup__type-item_active");
      nextBtn.classList.remove("btn_disabled");
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

      if ((btn.type == "checkbox")) {
        if (btn.checked) {
          setUrlQueryParam(name, value);
        } else {
          delUrlQueryParam(name);
        }
      } else  {
        setUrlQueryParam(name, value);
      }
    });
  });
}

const volume = document.getElementById("volume");
if (volume) {
  volume.addEventListener("input", function () {
    const name = "volume";
    const value = volume.value;
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

    setUrlQueryParam(name, value);
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
  gap = gap;
  minRange = minRange;
  maxRange = maxRange;

  rangeInputMax.min = minRange;
  rangeInputMax.max = maxRange;
  rangeInputMax.step = gap;
  rangeInputMax.value = minRange;

  rangeInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      //получаем значения из текстовых инпутов:
      let minVal = minRange;
      let maxVal = parseInt(rangeInputMax.value);
      // ограничиваем значение max инпута:
      if (maxVal >= maxRange) {
        rangeInputMax.value = maxRange;
        maxVal = maxRange;
      }

      if (maxVal <= minVal) {
        rangeInputMax.value = minRange;
        maxVal = minRange;
      }

      rangeSlider.style.right = `${100 - ((maxVal - minRange) * 100) / (maxRange - minRange)}%`;

      // const name = 'volume';
      // const value = parseInt(rangeInputMax.value);
      // setUrlQueryParam(name, value);
    });
  });
}

// -------------------------------------------- end range-slider: ---------------------------------------------

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
