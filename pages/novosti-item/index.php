<?
$title = 'Новости';
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
    <section class="section news-page-item__news-content news-content">

      <?php
      $result = mysqli_query($db, "SELECT * FROM news WHERE id = " . $_GET['id']);
      $row = mysqli_fetch_array($result);
      // echo '<pre>';
      // print_r($row);
      // echo '</pre>';
      ?>
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


        <div class="news-content__gallery">
          <ul class="news-content__gallery-list">
            <? for ($i = 1; $i <= 10; $i++) {
              if ($row['image-' . $i] != '') {
                echo '
                <li class="news-content__gallery-item" data-fancybox="1" href="/assets/img/' . $row['image-' . $i] . '">
                <img src="/assets/img/' . $row['image-' . $i] . '" alt="">
                </li>
                ';
              }              
            } 
            ?>
          </ul>
        </div>
      </div>
    </section>

    <section class="section news-page-item__news-slider news-slider">
      <div class="container news-slider__container-top">
        <h2 class="news-slider__title title title_40">
          Другие новости
        </h2>
        <div class="container news-slider__container-bot news-slider_swiper">
          <ul class="news-slider__cards-list swiper-wrapper">
            <?
            // $result = mysqli_query($db, "SELECT * FROM apartments WHERE id = " . $_GET['id']);
            $result = mysqli_query($db, "SELECT * FROM news WHERE status = 1 AND id != " . $row['id'] . " ORDER BY DATE DESC LIMIT 8");

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
                <h2 class="news-slider__card-title">
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

        <div class="swiper-navigation">
          <div class="swiper-button swiper-button-prev">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <rect x="-0.5" y="0.5" width="54" height="54" rx="27" transform="matrix(-1 0 0 1 54.25 0.5)"
                  stroke="#CBCBCB" />
                <path d="M32.25 20.5L23.25 28L32.25 35.5" stroke="#CBCBCB" stroke-width="2" stroke-linejoin="round" />
              </g>
            </svg>
          </div>
          <div class="swiper-button swiper-button-next">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <rect x="-0.5" y="0.5" width="54" height="54" rx="27" transform="matrix(-1 0 0 1 54.25 0.5)"
                  stroke="#CBCBCB" />
                <path d="M23.25 20.5L32.25 28L23.25 35.5" stroke="#CBCBCB" stroke-width="2" stroke-linejoin="round" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  </main>

  <?
  include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
  ?>

  <script>
    const title = document.querySelector('.news-content__title');
    let transTitle = transliterate(title.textContent);
    // title.textContent = transTitle;

    // history.pushState(null, null, transTitle); //заменяет url в браузере

    function transliterate(word) {
      var answer = "",
        a = {};
      a["А"] = "A";
      a["Б"] = "B";
      a["В"] = "V";
      a["Г"] = "G";
      a["Д"] = "D";
      a["Е"] = "E";
      a["Ё"] = "E";
      a["Ж"] = "ZH";
      a["З"] = "Z";
      a["И"] = "I";
      a["Й"] = "Y";
      a["К"] = "K";
      a["Л"] = "L";
      a["М"] = "M";
      a["Н"] = "N";
      a["О"] = "O";
      a["П"] = "P";
      a["Р"] = "R";
      a["С"] = "S";
      a["Т"] = "T";
      a["У"] = "U";
      a["Ф"] = "F";
      a["Х"] = "KH";
      a["Ц"] = "TS";
      a["Ч"] = "CH";
      a["Ш"] = "SH";
      a["Щ"] = "SHCH";
      a["Ъ"] = "";
      a["Ы"] = "Y";
      a["Ь"] = "";
      a["Э"] = "E";
      a["Ю"] = "YU";
      a["Я"] = "YA";
      a["а"] = "a";
      a["б"] = "b";
      a["в"] = "v";
      a["г"] = "g";
      a["д"] = "d";
      a["е"] = "e";
      a["ё"] = "e";
      a["ж"] = "zh";
      a["з"] = "z";
      a["и"] = "i";
      a["й"] = "y";
      a["к"] = "k";
      a["л"] = "l";
      a["м"] = "m";
      a["н"] = "n";
      a["о"] = "o";
      a["п"] = "p";
      a["р"] = "r";
      a["с"] = "s";
      a["т"] = "t";
      a["у"] = "u";
      a["ф"] = "f";
      a["х"] = "kh";
      a["ц"] = "ts";
      a["ч"] = "ch";
      a["ш"] = "sh";
      a["щ"] = "shch";
      a["ъ"] = "";
      a["ы"] = "y";
      a["ь"] = "";
      a["э"] = "e";
      a["ю"] = "yu";
      a["я"] = "ya";


      for (i in word) {
        if (word.hasOwnProperty(i)) {
          if (a[word[i]] === undefined) {
            answer += word[i];
            console.log(word[i]);
          } else {
            answer += a[word[i]];
            console.log(a[word[i]]);
          }
        }
      }
      return answer;
    }
  </script>

</body>

</html>
