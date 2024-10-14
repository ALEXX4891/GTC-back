<?
$title = 'Акции';
$description = '';
$keywords = '';
include $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
?>

<body class="promo-page">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZW3TMH" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
  ?>

  <main class="main promo-page__main">
    <section class="section promo-page__section">
      <div class="container promo-page__container">
        <h1 class="promo-page__title title title_25">
          Акции Сибири
        </h1>
        <div class="promo-page__btn-wrapper">
          <a class="promo-page__btn promo-page__btn_white" href="/pages/novosti/">
            Новости
          </a>
          <a class="promo-page__btn promo-page__btn_green" href="/pages/akcii/">
            Акции
          </a>
        </div>

        <ul class="promo-page__cards-list">
          <?
          // include $_SERVER["DOCUMENT_ROOT"] . '/backend/f.php';
          // $result = mysqli_query($db, "SELECT * FROM apartments WHERE id = " . $_GET['id']);
          $result = mysqli_query($db, "SELECT * FROM events WHERE status = 1");

          $row = mysqli_fetch_array($result);

          $eventArr = [];

          // if ($row == '') {
          //   echo 'Ничего не нашлось';
          // }

          // echo '<pre>';
          // print_r($row);
          // echo '</pre>';

          // Сосновый | ГП 8 | 1 / 2 этаж

          if (mysqli_num_rows($result) > 0) {
            do {
              $eventArr[] = $row;
              $now = date('Y-m-d H:i:s');
              $time = date('Y-m-d H:i:s', strtotime($row['time']));
              $dateDiff = date_diff(date_create($now), date_create($time));

              $end = '';

              if ($time > $now) {
                $end = 'Осталось ' . num_word($dateDiff->format("%a"), ['день', 'дня', 'дней']);
              } else {
                $end = 'Акция закончилась';
              }

              // echo $dateDiff->format("%a");
              echo '
                  <li class="promo-page__cards-item">
                  <div class="promo-page__card-img-wrapper">
                    <img src="/assets/img/' . $row['photo'] . '" alt="promo_1">
                  </div>
                  <span class="promo-page__card-date">
                  ' . date("d", strtotime($row['time'])) . ' '
                . monthRus(date("m", strtotime($row['time'])), 'rod', 2) . ' '
                . date("Y", strtotime($row['time'])) . '
                  </span>
                  <span class="promo-page__card-period">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_937_4871)">
                        <path
                          d="M8.75 4.31579V8.36842L10.9605 10.2105M15.75 8C15.75 11.866 12.616 15 8.75 15C4.88401 15 1.75 11.866 1.75 8C1.75 4.13401 4.88401 1 8.75 1C12.616 1 15.75 4.13401 15.75 8Z"
                          stroke="#748D55" stroke-width="1.5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_937_4871">
                          <rect width="16" height="16" fill="white" transform="translate(0.75)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p class="promo-page__card-date-text">
                      ' . $end . ' 
                    </p>
                  </span>
                  <button class="promo-page__card-link promo-link popup-link" href="#promo" data-id="' . $row['id'] . '" data-request="Акция: ' . $row['title'] . '">
                    <h2 class="promo-page__card-title">
                    ' . $row['title'] . '
                    </h2>
                  </button>
                </li>
                ';
            } while ($row = mysqli_fetch_array($result));
          }
          ?>
        </ul>
      </div>
    </section>
  </main>

  <?
  // include '' . $_SERVER["DOCUMENT_ROOT"] . '/pages/akcii/popup.php';
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>


</body>
</html>