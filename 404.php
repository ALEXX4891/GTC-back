<?
$title = '404';
$description = '';
$keywords = '';
$page = 'not-found-page';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

  <main class="main">
    <section class="section not-found">
      <div class="container not-found__container">
        <div class="not-found__img">
          <picture>
            <source srcset="/assets/img/banner_img1.webp" type="image/webp"><img src="/assets/img/banner_img1.png"
              alt="">
          </picture>
        </div>

        <h2 class="not-found__number">
          404
        </h2>

        <h1 class="not-found__title">
          Страница не найдена
        </h1>

        <a class="not-found__link" href="/">
          Вернуться на главную
        </a>
      </div>
    </section>
  </main>

  <?
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
?>