<?
$title = 'Квартиры';
$description = '';
$keywords = '';
include $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
?>

<body class="apartments-page">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZW3TMH" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
  ?>

  <main class="main apartments-page__main">
    <section class="section section_choice choice">
      <div class="container choice__container">
        <h1 class="choice__title title title_40">
          Квартиры
        </h1>

        <div class="choice__form" choice-form>

          <ul class="choice__inputs-list choice__inputs-list_top">
            <li class="choice__input-block choice__input-block_select choice__input-block_select_project">
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
                  <!-- <li class="select__item">Все</li> -->
                  <!-- <li class="select__item">Сосновый</li>
                  <li class="select__item">Дубовый</li>
                  <li class="select__item">Березовый</li> -->
                </ul>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_buttons choice__input-block_buttons_rooms">
              <p class="choice__label">
                Комнат
              </p>
              <div class="choice__buttons-select select-frame">
                <button class="choice__buttons-select-item" data-id="11">
                  Студия
                </button>
                <button class="choice__buttons-select-item" data-id="1">
                  1
                </button>
                <button class="choice__buttons-select-item" data-id="2">
                  2
                </button>
                <button class="choice__buttons-select-item" data-id="3">
                  3
                </button>
                <button class="choice__buttons-select-item" data-id="4">
                  3+
                </button>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_slider choice__input-block_slider_square">
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

            <li class="choice__input-block choice__input-block_slider choice__input-block_slider_cost">
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

          <ul class="choice__inputs-list choice__inputs-list_bot">
            <li class="choice__input-block choice__input-block_select choice__input-block_select_house">
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
                  <!-- <li class="select__item">Все</li> -->
                  <!-- <li class="select__item">1</li>
                  <li class="select__item">2</li>
                  <li class="select__item">3</li> -->

                </ul>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_select choice__input-block_select_section">
              <p class="choice__label">
                Секция
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
                  <!-- <li class="select__item">Все</li> -->
                  <!-- <li class="select__item" data-id="duboviy">1</li>
                  <li class="select__item" data-id="berezoviy">2</li>
                  <li class="select__item" data-id="berezoviy">3</li> -->
                </ul>
              </div>
            </li>
            <!-- TODO Динамическ формировать содержимое фильтров -->

            <li class="choice__input-block choice__input-block_select choice__input-block_select_date">
              <p class="choice__label">
                Срок сдачи
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
                  <!-- <li class="select__item">Все</li> -->
                  <!-- <li class="select__item" data-id="sosnoviy">II квартал 2025</li>
                  <li class="select__item" data-id="sosnoviy">II квартал 2026</li>
                  <li class="select__item" data-id="sosnoviy">IV квартал 2025</li> -->

                  <!-- <li class="select__item" data-id="duboviy">Дубовый</li> -->
                  <!-- <li class="select__item" data-id="berezoviy">Березовый</li> -->
                </ul>
              </div>
            </li>

            <li class="choice__input-block choice__input-block_slider choice__input-block_slider_floor">
              <p class="choice__label">
                Этаж
              </p>
              <div class="choice__slider-select choice__slider-select_floor select-frame">
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

          <div class="choice__btns-block">
            <p class="choice__btns-block-title">
              Особенности
            </p>
            <div class="choice__btns-wrap">
              <button class="choice__btn-filter" data-id="optionPromotion">
                Акция
              </button>
              <button class="choice__btn-filter" data-id="optionKeyToday">
                Ключи сегодня
              </button>
              <button class="choice__btn-filter" data-id="optionBalcony">
                Балкон
              </button>
              <button class="choice__btn-filter" data-id="optionDressRoom">
                Гардеробная
              </button>
              <button class="choice__btn-filter" data-id="optionTwoSide">
                Окна на 2 стороны
              </button>
              <button class="choice__btn-filter" data-id="optionThreeSide">
                Окна на 3 стороны
              </button>
              <button class="choice__btn-filter" data-id="optionGuestBathroom">
                Гостевой санузел
              </button>
              <button class="choice__btn-filter" data-id="optionTerrace">
                Терраса
              </button>
              <button class="choice__btn-filter" data-id="optionKitchenLiving">
                Кухня-гостиная
              </button>
            </div>
          </div>

          <div class="choice__reset-wrap">

            <button class="choice__btn-additional choice__btn-additional_show">
              <p class="choice__btn-text">
                Еще параметры
              </p>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7.2069 7L13 1" stroke="#363636" stroke-linejoin="round" />
              </svg>
            </button>

            <button class="choice__btn-additional choice__btn-additional_hide" style="display: none;">
              <p class="choice__btn-text">
                Скрыть дополнительные параметры
              </p>
              <svg style="transform: rotate(180deg);" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7.2069 7L13 1" stroke="#363636" stroke-linejoin="round" />
              </svg>
            </button>

            <button class="choice__btn-reset">
              <p class="choice__btn-text">
                Сбросить фильтры
              </p>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5L15 14.5M1 14.5L15 0.5" stroke="black" />
              </svg>
            </button>

            <p class="choice__search-text">
              <!-- Найдено 20 квартир -->
            </p>

            <button class="choice__btn-request choice__btn-request_mobile choice__btn-request_mobile_filter btn btn_dark">
              Фильтр
            </button>

            <button class="choice__btn-request choice__btn-request_mobile choice__btn-request_mobile_apply btn btn_dark" style="display: none;">
              Применить
            </button>

          </div>

        </div>
      </div>
    </section>

    <section class="section section__apartments apartments">
      <div class="container apartments__container">
        <ul class="apartments__list">
        </ul>
        <button class="apartments__button btn btn_dark" id="addApartrs">
          Показать еще 8 планировок
        </button>
      </div>
    </section>
  </main>

  <?
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>

</body>

</html>