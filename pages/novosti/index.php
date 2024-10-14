<?
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
ini_set('html_errors', true);
ini_set('log_errors', false);
ini_set('error_prepend_string', '<pre style="white-space:pre-wrap">');
ini_set('error_append_string', '</pre>');
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$title = 'Новости';
$description = '';
$keywords = '';
$page = 'news-page';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
// $result = mysqli_query($db, "SELECT * FROM news WHERE status = 1 ORDER");
// $row = mysqli_fetch_array($result);
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
        <?
        // $result = mysqli_query($db, "SELECT * FROM apartments WHERE id = " . $_GET['id']);
        $result = mysqli_query($db, "SELECT * FROM news WHERE status = 1");

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
            // var_dump($row['images']);
            // var_dump(json_decode($row['images']));
            // $json = '[{"alt":"картинка","path":"news-slide-0-1.jpg"},{"alt":"картинка","path":"news-slide-0-2.jpg"},{"alt":"картинка","path":"news-slide-0-3.jpg"},{"alt":"картинка","path":"news-slide-0-4.jpg"},{"alt":"картинка","path":"news-slide-0-5.jpg"}]';
            // $json = '["alt":"картинка","path":"news-slide-0-1.jpg"},{"alt":"картинка","path":"news-slide-0-2.jpg"},{"alt":"картинка","path":"news-slide-0-3.jpg"},{"alt":"картинка","path":"news-slide-0-4.jpg"},{"alt":"картинка","path":"news-slide-0-5.jpg"}]';


            // $img = json_decode($row['images'])[0];
            // $img = json_decode($json)[0];

            $arr = [
              '0' => [
                'alt' => 'картинка',
                'path' => 'news-slide-0-1.jpg'
              ],
              '1' => [
                'alt' => 'картинка',
                'path' => 'news-slide-0-2.jpg'
              ],
              '2' => [
                'alt' => 'картинка',
                'path' => 'news-slide-0-3.jpg'
              ],
              '3' => [
                'alt' => 'картинка',
                'path' => 'news-slide-0-4.jpg'
              ],
              '4' => [
                'alt' => 'картинка',
                'path' => 'news-slide-0-5.jpg'
              ]
            ];

            var_dump($arr);
            // $json = json_encode($arr, JSON_UNESCAPED_UNICODE)[0];
            // var_dump($json);






            // var_dump($img);
            // $alt = json_decode($row['images'])[0]['alt'];
            // var_dump($alt);

            // "[{"alt":"картинка","path":"news-slide-0-1.jpg"},{"alt":"картинка","path":"news-slide-0-2.jpg"},{"alt":"картинка","path":"news-slide-0-3.jpg"},{"alt":"картинка","path":"news-slide-0-4.jpg"},{"alt":"картинка","path":"news-slide-0-5.jpg"}]"
            // "[{alt = 'картинка', path = 'news-slide-0-1.jpg'}, {alt = 'картинка', path = 'news-slide-0-2.jpg'}, {alt = 'картинка', path = 'news-slide-0-3.jpg'}, {alt = 'картинка', path = 'news-slide-0-4.jpg'}, {alt = 'картинка', path = 'news-slide-0-5.jpg'}, ]"
            // echo 123;
            echo "
              <li class='news-page__item'>
              <div class='news-page__item-img'>
                  <img src='/assets/img/{$img}'
                    alt='{$alt}'>
              </div>
              <div class='news-page__item-text-wrapper'>
                <h2 class='news-page__item-title'>
                  {$row['title']}
                </h2>
                <p class='news-page__item-text'>
                  {$row['description']}
                </p>
                <a class='news-page__item-btn btn btn_trans-orange' href='/pages/novosti-item/index.php?id={$row['id']}'>
                  Подробнее
                </a>
              </div>
  
            </li>


                ";
          } while ($row = mysqli_fetch_array($result));
        }
        ?>

      </ul>

  </section>

</main>

<?
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
?>