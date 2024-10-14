<?
$title = 'Коммерция';
$description = '';
$keywords = '';
include $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
?>

<body class="commercial-page">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZW3TMH" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
  ?>

  <main class="main commercial-page__main">
    <section class="section section_choice choice">
      <div class="container choice__container">
        <h1 class="choice__title title title_40">
          Найдите помещение для своего бизнеса
        </h1>
        <p class="choice__subtitle">
          Коммерческая недвижимость
        </p>

        <div class="choice__form" choice-form>

          <ul class="choice__inputs-list choice__inputs-list_top choice__inputs-list_top_com">
            <li class="choice__input-block choice__input-block_select choice__input-block_select_project choice__input-block_select_project_com">
              <p class="choice__label">
                Проект
              </p>
              <div class="choice__select select select-frame">
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    Сосновый
                  </span>
                  <p class="select__text select__text_carton"></p>
                </div>
                <span class="select__arrow">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3335 1L7.54039 7L13.3335 1" stroke="#363636" stroke-width="1.5"
                      stroke-linejoin="round" />
                  </svg>
                </span>
                <ul class="select__list">
                </ul>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_select choice__input-block_select_date choice__input-block_select_date_com">
              <p class="choice__label">
                Срок сдачи
              </p>
              <div class="choice__select select select-frame">
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    Все
                  </span>
                  <p class="select__text select__text"></p>
                </div>
                <span class="select__arrow">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3335 1L7.54039 7L13.3335 1" stroke="#363636" stroke-width="1.5"
                      stroke-linejoin="round" />
                  </svg>
                </span>
                <ul class="select__list">
                </ul>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_select choice__input-block_select_house choice__input-block_select_house_com">
              <p class="choice__label">
                Дом
              </p>
              <div class="choice__select select select-frame">
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    Все
                  </span>
                  <p class="select__text select__text_carton"></p>
                </div>
                <span class="select__arrow">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3335 1L7.54039 7L13.3335 1" stroke="#363636" stroke-width="1.5"
                      stroke-linejoin="round" />
                  </svg>
                </span>
                <ul class="select__list">

                </ul>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_slider choice__input-block_slider_square choice__input-block_slider_square_com">
              <p class="choice__label">
                Площадь, м2
              </p>
              <div class="choice__slider-select choice__slider-select_square select-frame">
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    от
                  </span>
                  <input class="select__input select__input_from" type="number">
                </div>

                <span class="select__separator">
                  |
                </span>
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    до
                  </span>
                  <input class="select__input select__input_to" type="number">
                </div>

                <div class="slider-container">
                  <div class="range-slider">
                  </div>
                </div>

                <div class="range-inputs-wrap">
                  <input class="min-range" type="range">
                  <input class="max-range" type="range">
                </div>

              </div>
            </li>

            <li class="choice__input-block choice__input-block_slider choice__input-block_slider_cost choice__input-block_slider_cost_com">
              <p class="choice__label">
                Стоимость, ₽
              </p>
              <div class="choice__slider-select choice__slider-select_cost select-frame">
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    от
                  </span>
                  <input class="select__input select__input_from" type="number">
                </div>

                <span class="select__separator">
                  |
                </span>
                <div class="select__wrapper">
                  <span class="select__placeholder">
                    до
                  </span>
                  <input class="select__input select__input_to" type="number">
                </div>

                <div class="slider-container">
                  <div class="range-slider">
                  </div>
                </div>

                <div class="range-inputs-wrap">
                  <input class="min-range" type="range">
                  <input class="max-range" type="range">
                </div>

              </div>
            </li>
          </ul>

          <ul class="choice__inputs-list choice__inputs-list_bot choice__inputs-list_bot_com">
            <li class="choice__input-block choice__input-block_buttons choice__input-block_buttons_method">
              <p class="choice__label">
                Способ приобретения
              </p>
              <div class="choice__buttons-wrapp select-frame select-frame_com">

                <button class="choice__buttons-select-item" data-id="rent">
                  Аренда
                </button>
                <span class="select__separator">
                  |
                </span>
                <button class="choice__buttons-select-item" data-id="buy">
                  Покупка
                </button>
              </div>
            </li>
            <div class="choice__btns-block choice__btns-block_com">

              <p class="choice__btns-block-title">
                Особенности
              </p>
              <div class="choice__btns-wrap">
                <button class="choice__btn-filter" data-id="optionPromotion">
                  Акция
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="1.25" width="17.5" height="17.5" rx="8.75" stroke="#56693E" stroke-width="1.5" />
                    <path
                      d="M7.95597 12.2209V12.1009C7.95904 11.5438 8.01136 11.1006 8.11293 10.7713C8.21757 10.442 8.36529 10.1773 8.55611 9.97727C8.74692 9.77415 8.97929 9.58795 9.2532 9.41868C9.44093 9.30173 9.60866 9.17401 9.75639 9.03551C9.9072 8.89394 10.0257 8.73698 10.1119 8.56463C10.198 8.3892 10.2411 8.19377 10.2411 7.97834C10.2411 7.7352 10.1842 7.52438 10.0703 7.34588C9.95644 7.16738 9.80256 7.02888 9.60867 6.9304C9.41785 6.83191 9.20395 6.78267 8.96697 6.78267C8.74846 6.78267 8.54072 6.83037 8.34375 6.92578C8.14986 7.01811 7.98828 7.15968 7.85902 7.3505C7.73284 7.53823 7.66205 7.77675 7.64666 8.06605H6.0032C6.01858 7.4813 6.16016 6.99195 6.42791 6.59801C6.69875 6.20407 7.05575 5.90862 7.49893 5.71165C7.94519 5.51468 8.43762 5.41619 8.97621 5.41619C9.56404 5.41619 10.0811 5.51929 10.5273 5.7255C10.9767 5.9317 11.326 6.22562 11.5753 6.60724C11.8277 6.9858 11.9538 7.43513 11.9538 7.95526C11.9538 8.30611 11.8969 8.62003 11.783 8.89702C11.6722 9.17401 11.5137 9.42022 11.3075 9.63565C11.1013 9.85109 10.8567 10.0434 10.5735 10.2127C10.3242 10.3666 10.1196 10.5266 9.95952 10.6928C9.80256 10.859 9.68561 11.0545 9.60867 11.2791C9.5348 11.5007 9.49633 11.7746 9.49325 12.1009V12.2209H7.95597ZM8.75923 15.1016C8.48224 15.1016 8.24373 15.0031 8.04368 14.8061C7.84363 14.6091 7.74361 14.3691 7.74361 14.0859C7.74361 13.8089 7.84363 13.572 8.04368 13.375C8.24373 13.178 8.48224 13.0795 8.75923 13.0795C9.03314 13.0795 9.27012 13.178 9.47017 13.375C9.6733 13.572 9.77486 13.8089 9.77486 14.0859C9.77486 14.2737 9.72715 14.4445 9.63175 14.5984C9.53942 14.7522 9.41631 14.8754 9.26243 14.9677C9.11162 15.0569 8.94389 15.1016 8.75923 15.1016Z"
                      fill="#56693E" />
                  </svg>
                </button>
                <!-- <button class="choice__btn-filter" data-id="optionKeyToday">
                  Ключи сегодня
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="1.25" width="17.5" height="17.5" rx="8.75" stroke="#56693E" stroke-width="1.5" />
                    <path
                      d="M7.95597 12.2209V12.1009C7.95904 11.5438 8.01136 11.1006 8.11293 10.7713C8.21757 10.442 8.36529 10.1773 8.55611 9.97727C8.74692 9.77415 8.97929 9.58795 9.2532 9.41868C9.44093 9.30173 9.60866 9.17401 9.75639 9.03551C9.9072 8.89394 10.0257 8.73698 10.1119 8.56463C10.198 8.3892 10.2411 8.19377 10.2411 7.97834C10.2411 7.7352 10.1842 7.52438 10.0703 7.34588C9.95644 7.16738 9.80256 7.02888 9.60867 6.9304C9.41785 6.83191 9.20395 6.78267 8.96697 6.78267C8.74846 6.78267 8.54072 6.83037 8.34375 6.92578C8.14986 7.01811 7.98828 7.15968 7.85902 7.3505C7.73284 7.53823 7.66205 7.77675 7.64666 8.06605H6.0032C6.01858 7.4813 6.16016 6.99195 6.42791 6.59801C6.69875 6.20407 7.05575 5.90862 7.49893 5.71165C7.94519 5.51468 8.43762 5.41619 8.97621 5.41619C9.56404 5.41619 10.0811 5.51929 10.5273 5.7255C10.9767 5.9317 11.326 6.22562 11.5753 6.60724C11.8277 6.9858 11.9538 7.43513 11.9538 7.95526C11.9538 8.30611 11.8969 8.62003 11.783 8.89702C11.6722 9.17401 11.5137 9.42022 11.3075 9.63565C11.1013 9.85109 10.8567 10.0434 10.5735 10.2127C10.3242 10.3666 10.1196 10.5266 9.95952 10.6928C9.80256 10.859 9.68561 11.0545 9.60867 11.2791C9.5348 11.5007 9.49633 11.7746 9.49325 12.1009V12.2209H7.95597ZM8.75923 15.1016C8.48224 15.1016 8.24373 15.0031 8.04368 14.8061C7.84363 14.6091 7.74361 14.3691 7.74361 14.0859C7.74361 13.8089 7.84363 13.572 8.04368 13.375C8.24373 13.178 8.48224 13.0795 8.75923 13.0795C9.03314 13.0795 9.27012 13.178 9.47017 13.375C9.6733 13.572 9.77486 13.8089 9.77486 14.0859C9.77486 14.2737 9.72715 14.4445 9.63175 14.5984C9.53942 14.7522 9.41631 14.8754 9.26243 14.9677C9.11162 15.0569 8.94389 15.1016 8.75923 15.1016Z"
                      fill="#56693E" />
                  </svg>
                </button>
                <button class="choice__btn-filter" data-id="optionBalcony">
                  Балкон
                </button>
                <button class="choice__btn-filter" data-id="optionDressRoom">
                  Гардеробная
                </button> -->
                <button class="choice__btn-filter" data-id="optionTwoSide">
                  Окна на 2 стороны
                </button>
                <button class="choice__btn-filter" data-id="optionThreeSide">
                  Окна на 3 стороны
                </button>
                <!-- <button class="choice__btn-filter choice__btn-filter_disabled" data-id="optionGuestBathroom">
                  Гостевой санузел
                </button>
                <button class="choice__btn-filter choice__btn-filter_disabled" data-id="optionTerrace">
                  Терраса
                </button>
                <button class="choice__btn-filter" data-id="optionKitchenLiving">
                  Кухня-гостиная
                </button> -->
              </div>
            </div>

            <button class="choice-submit choice-submit_com btn btn_dark">
              Показать 6 помещений
            </button>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section_map map">
      <div class="map__content">
        <div class="map__left-block">

          <div class="map__left-wrap">
            <div class="cards__wrapper">
              <div class="cards__head">
                <h2 class="cards__head-title title title_25">
                  Коммерческие помещения
                </h2>
                <p class="cards__head-desc">
                  2 проекта
                </p>
              </div>

              <ul class="cards__list">
                <li class="cards__item">
                  <div class="cards__item-img">
                    <picture>
                      <source srcset="/assets/img/com-prev-1.webp" type="image/webp"><img src="/assets/img/com-prev-1.jpg" alt="превью">
                    </picture>
                  </div>
                  <h3 class="cards__item-title title title_25">
                    Сосновый квартал
                  </h3>
                  <p class="cards__item-count">
                    5 помещений
                  </p>
                  <p class="cards__item-price title title_25">
                    от 12 900 000₽
                  </p>
                </li>

                <li class="cards__item">
                  <div class="cards__item-img">
                    <picture>
                      <source srcset="/assets/img/com-prev-1.webp" type="image/webp"><img src="/assets/img/com-prev-1.jpg" alt="превью">
                    </picture>
                  </div>
                  <h3 class="cards__item-title title title_25">
                    Чистополье
                  </h3>
                  <p class="cards__item-count">
                    1 помещениe
                  </p>
                  <p class="cards__item-price title title_25">
                    от 12 900 000₽
                  </p>
                </li>

                <li class="cards__item">
                  <div class="cards__item-img">
                    <picture>
                      <source srcset="/assets/img/com-prev-1.webp" type="image/webp"><img src="/assets/img/com-prev-1.jpg" alt="превью">
                    </picture>
                  </div>
                  <h3 class="cards__item-title title title_25">
                    Сосновый квартал
                  </h3>
                  <p class="cards__item-count">
                    5 помещений
                  </p>
                  <p class="cards__item-price title title_25">
                    от 12 900 000₽
                  </p>
                </li>

                <li class="cards__item">
                  <div class="cards__item-img">
                    <picture>
                      <source srcset="/assets/img/com-prev-1.webp" type="image/webp"><img src="/assets/img/com-prev-1.jpg" alt="превью">
                    </picture>
                  </div>
                  <h3 class="cards__item-title title title_25">
                    Сосновый квартал
                  </h3>
                  <p class="cards__item-count">
                    5 помещений
                  </p>
                  <p class="cards__item-price title title_25">
                    от 12 900 000₽
                  </p>
                </li>

                <li class="cards__item">
                  <div class="cards__item-img">
                    <picture>
                      <source srcset="/assets/img/com-prev-1.webp" type="image/webp"><img src="/assets/img/com-prev-1.jpg" alt="превью">
                    </picture>
                  </div>
                  <h3 class="cards__item-title title title_25">
                    Сосновый квартал
                  </h3>
                  <p class="cards__item-count">
                    5 помещений
                  </p>
                  <p class="cards__item-price title title_25">
                    от 12 900 000₽
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="map__btn-wrap">
            <h4 class="map__btn-title title title_25">
              Помочь с выбором?
            </h4>
            <p class="map__btn-desc">
              Подберем лучшее место для вашего бизнеса
            </p>
            <button class="map__btn popup-link" href="#popup-call">
              Получить консультацию
            </button>
          </div>

        </div>

        <div class="map__right-block">
          <div class="map__map map-yandex" id="map">
          </div>
        </div>
      </div>
    </section>

    <section class="section section__commercial commercial">
      <div class="container commercial__container">
        <ul class="commercial__list commercial__list_grid">
          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

          <li class="commercial__item swiper-slide">
            <a class="commercial__item-link" href="/pages/commercial-item/">
              <h5 class="commercial__item-title">
                Сосновый | ГП 8 |
              </h5>
              <p class="commercial__item-desc">
                Помещение №1, 151,67м<sup>2</sup>
              </p>
              <div class="commercial__item-price-wrap">
                <p class="commercial__item-new-price">
                  5 662 000 ₽
                </p>
                <p class="commercial__item-old-price">
                  9 331 000 ₽
                </p>
              </div>
              <p class="commercial__credit-pay">
                от 45 426₽/месяц
              </p>
              <div class="commercial__item-img">
                <picture>
                  <source srcset="/assets/img/com-img-1.webp" type="image/webp"><img src="/assets/img/com-img-1.png" alt="квартира">
                </picture>
              </div>
            </a>

          </li>

        </ul>
        <button class="commercial__button btn btn_dark">
          Показать еще 8 планировок
        </button>
      </div>
    </section>

    <section class="section section_bot bot" id="office">
      <div class="container bot__container">
        <!-- <div class="bot__wrap bot__wrap_big wrap"> -->
        <div class="bot__address address">
          <h3 class="address__title title title_40">
            Офис продаж
          </h3>
          <p class="address__desc">
            <?= $office['description']; ?>
          </p>

          <div class="address__wrapper">
            <div class="address__item address__item_address">
              <p class="address__item-title">
                Адрес:
              </p>
              <p class="address__item-text">
                <?= $office['address']; ?>
              </p>
            </div>

            <div class="address__item address__item_phone">
              <p class="address__item-title">
                Телефон:
              </p>
              <a class="address__item-text" href="tel:<?= preg_replace('/[^0-9\.]+/', '', $office['phone']); ?>" class="contacts__item contacts__item_phone">
                <?= $office['phone']; ?>
              </a>
            </div>

            <div class="address__item address__item_mail">
              <p class="address__item-title">
                Почта:
              </p>
              <a class="address__item-text" href="mailto:<?= $office['email']; ?>">
                <?= $office['email']; ?>
              </a>
            </div>

          </div>

          <button class="btn btn_green address__btn popup-link" href="#popup-request">
            Получить консультацию
          </button>
        </div>

        <div class="bot__map map-yandex" id="mapTwo">
        </div>
        <!-- </div> -->

        <!-- <aside class="bot__aside aside"> -->
        <!-- </aside> -->
      </div>
    </section>
  </main>

  <?
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>

</body>

</html>