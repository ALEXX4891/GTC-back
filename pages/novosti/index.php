<?
$title = 'Новости';
$description = '';
$keywords = '';
include $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
?>

<body class="news-page">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMZW3TMH" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
  ?>

  <main class="main news-page__main">
    <section class="section news-page__section">
      <div class="container news-page__container">
        <h1 class="news-page__title title title_25">
          Новости Сибири
        </h1>
        <div class="news-page__btn-wrapper">
          <a class="news-page__btn news-page__btn_green" href="/pages/novosti/">
            Новости
          </a>
          <a class="news-page__btn news-page__btn_white" href="/pages/akcii/">
            Акции
          </a>
        </div>
        <ul class="news-page__cards-list">

          <?
          // $result = mysqli_query($db, "SELECT * FROM apartments WHERE id = " . $_GET['id']);
          $result = mysqli_query($db, "SELECT * FROM news WHERE status = 1 ORDER BY DATE DESC");

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
                <li class="news-page__cards-item">
                <div class="news-page__card-img-wrapper">
                  <img src="/assets/img/' . $row['photo'] . '" alt="' . $row['title'] . '">
                </div>
                <p class="news-page__card-date">
                ' . date("d.m.Y", strtotime($row['date'])) . '
                </p>
                <a class="news-page__card-link" href="/pages/novosti-item/?id=' . $row['id'] . '">
                  <h2 class="news-page__card-title">
                  ' . $row['title'] . '
                  </h2>
                </a>
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
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>

</body>

</html>