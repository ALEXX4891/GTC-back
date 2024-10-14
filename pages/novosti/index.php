<?
$title = 'Новости';
$description = '';
$keywords = '';
$page = 'news-page';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

<main class="main">
    <section class="section news-page__section">
      <div class="container news-page__container">
        <div class="top-block">
          <h1 class="top-block__title section-title" style="text-wrap: nowrap;">
            Новости
          </h1>
          <p class="top-block__number">
          </p>
        </div>

        <ul class="news-page__list">
          <li class="news-page__item">
            <div class="news-page__item-img">
              <picture>
                <source srcset="/assets/img/news-img-1.webp" type="image/webp"><img src="/assets/img/news-img-1.jpg"
                  alt="">
              </picture>
            </div>
            <div class="news-page__item-text-wrapper">
              <h2 class="news-page__item-title">
                Система контроля и учёта топлива – экономия в режиме реального времени
              </h2>
              <p class="news-page__item-text">
                Оборудование контроля топлива «СКАУТ» позволяет собирать и анализировать данные в реальном времени и
                формировать нужные руководителю предприятия отчеты
              </p>
              <a class="news-page__item-btn btn btn_trans-orange" href="novosti-item.html">
                Подробнее
              </a>
            </div>

          </li>

          <li class="news-page__item">
            <div class="news-page__item-img">
              <picture>
                <source srcset="/assets/img/news-img-2.webp" type="image/webp"><img src="/assets/img/news-img-2.jpg"
                  alt="">
              </picture>
            </div>
            <div class="news-page__item-text-wrapper">
              <h2 class="news-page__item-title">
                Система мониторинга расхода топлива «СКАУТ» – вопросы и ответы
              </h2>
              <p class="news-page__item-text">
                Профессиональное оборудование для контроля топлива от компании «СКАУТ
              </p>
              <a class="news-page__item-btn btn btn_trans-orange" href="novosti-item.html">
                Подробнее
              </a>
            </div>

          </li>

          <li class="news-page__item">
            <div class="news-page__item-img">
              <picture>
                <source srcset="/assets/img/news-img-2.webp" type="image/webp"><img src="/assets/img/news-img-2.jpg"
                  alt="">
              </picture>
            </div>
            <div class="news-page__item-text-wrapper">
              <h2 class="news-page__item-title">
                Система мониторинга расхода топлива «СКАУТ» – вопросы и ответы
              </h2>
              <p class="news-page__item-text">
                Профессиональное оборудование для контроля топлива от компании «СКАУТ
              </p>
              <a class="news-page__item-btn btn btn_trans-orange" href="novosti-item.html">
                Подробнее
              </a>
            </div>

          </li>

        </ul>

    </section>

</main>

<?
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
?>