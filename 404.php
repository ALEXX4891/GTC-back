<?
$title = '404';
$description = '';
$keywords = '';
include $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
?>

<body class="not-found-page" data-page="404">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZW3TMH" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
  ?>

  <main class="main">
    <section class="section not-found">
      <div class="container not-found__container">
        <p class="not-found__img">
          404
        </p>

        <h1 class="not-found__title">
          Страница не найдена
        </h1>
        <p class="not-found__text">
          Неправильно набран адрес или такой страницы не существует. Перейдите к выбору проектов или квартир. Там много всего интересного
        </p>
        <div class="not-found__btns-wrapper">
          <a class="not-found__link btn btn_green" href="/pages/project-item/">
            Проекты
          </a>
          <a class="not-found__link btn btn_light-green" href="/pages/kvartiry/">
            Квартиры
          </a>
        </div>
      </div>
    </section>
    <div>

    </div>

  </main>


  <?
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>

</body>

</html>