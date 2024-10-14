<?
$title = 'Акция';
$description = '';
$keywords = '';
include $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
?>

<body class="news-page-item">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZW3TMH" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
  ?>

  <main class="main news-page-item__main">
    <?php
    $result = mysqli_query($db, "SELECT * FROM events WHERE id = " . $_GET['id']);
    $row = mysqli_fetch_array($result);
    // echo '<pre>';
    // print_r($row);
    // echo '</pre>';
    ?>
    <section class="section news-page-item__news-content news-content">
      <div class="container news-content__container">
        <a class="news-content__btn news-content__btn_white" href="/pages/novosti/">
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 13.5L1.25 7.5L8.25 1.5" stroke="#646464" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <p class="news-content__btn-text">
            Все новости
          </p>
        </a>
        <h1 class="news-content__title title title_40">
          <?= $row['title'] ?>
        </h1>

        <p class="news-content__date">
          <?= date("d", strtotime($row['date'])) . ' '
            . monthRus(date("m", strtotime($row['date'])), 'rod', 2) . ' '
            . date("Y", strtotime($row['date'])) ?>
        </p>

        <div class="news-content__img-wrapper">
          <img src="/assets/img/<?= $row['photo'] ?>" alt="Проект">
        </div>

        <p class="news-content__text">
          <?= $row['description'] ?>
        </p>
      </div>
    </section>

    <section class="section news-page-item__news-slider news-slider">
      <div class="container news-slider__container-top">
        <h2 class="news-slider__title title title_40">
          Другие новости
        </h2>
      </div>
      <div class="container news-slider__container-bot news-slider_swiper">
        <ul class="news-slider__cards-list swiper-wrapper">
        <?
          // $result = mysqli_query($db, "SELECT * FROM apartments WHERE id = " . $_GET['id']);
          $result = mysqli_query($db, "SELECT * FROM news WHERE status = 1 ORDER BY DATE DESC LIMIT 8");

          $row = mysqli_fetch_array($result);

          // if ($row == '') {
          //   echo 'Ничего не нашлось';
          // }

          // echo '<pre>';
          // print_r($row);
          // echo '</pre>';

          // Сосновый | ГП 8 | 1 / 2 этаж

          if (mysqli_num_rows($result) > 0) {
            do {
              echo '
                <li class="news-slider__cards-item swiper-slide">
                  <div class="news-slider__card-img-wrapper">
                      <img src="/assets/img/' . $row['photo'] . '" alt="' . $row['title'] . '">
                  </div>
                  <p class="news-slider__card-date">
                    ' . date("d", strtotime($row['date'])) . ' '
                    . monthRus(date("m", strtotime($row['date'])), 'rod', 2) . ' '
                    . date("Y", strtotime($row['date'])) . '
                  </p>
                  <a class="news-slider__card-link" href="/pages/novosti-item/?id=' . $row['id'] . '">
                    ' . $row['title'] . '
                  </a>
                </li>
                ';
            } while ($row = mysqli_fetch_array($result));
          }
          ?>

        </ul>
      </div>

      <div class="swiper-navigation">
        <div class="swiper-button swiper-button-prev">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <rect x="-0.5" y="0.5" width="54" height="54" rx="27" transform="matrix(-1 0 0 1 54.25 0.5)"
                stroke="#CBCBCB" />
              <path d="M23.25 20.5L32.25 28L23.25 35.5" stroke="#CBCBCB" stroke-width="2" stroke-linejoin="round" />
            </g>
          </svg>
        </div>

        <div class="swiper-button swiper-button-next">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <rect x="-0.5" y="0.5" width="54" height="54" rx="27" transform="matrix(-1 0 0 1 54.25 0.5)"
                stroke="#CBCBCB" />
              <path d="M32.25 20.5L23.25 28L32.25 35.5" stroke="#CBCBCB" stroke-width="2" stroke-linejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  </main>

  <?
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>

</body>

</html>

