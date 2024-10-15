<?
$title = 'Новость';
$description = '';
$keywords = '';
$page = 'news-item';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/head.php';
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
$result = mysqli_query($db, "SELECT * FROM news WHERE id = " . $_GET['id']);
$row = mysqli_fetch_array($result);
?>

<main class="main">
  <section class="section news-item_section">
    <div class="container news-item__container">
      <a class="news-item__link-back" href="/pages/novosti">
        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_261_2440)">
            <path d="M8.64265 2.4545L2.35693 8.99996L8.64265 15.5454" stroke="#FAB502" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_261_2440">
              <rect width="18" height="11" fill="white" transform="matrix(0 -1 1 0 0 18)" />
            </clipPath>
          </defs>
        </svg>
        Назад к новостям
      </a>

      <div class="news-item__content">
        <h1 class="news-item__title">
          <?= $row['title'] ?>
        </h1>
        <p class="news-item__desc">
          <?= $row['description'] ?>
        </p>

        <div class="swiper-block">
          <div class="news-item__slider swiper news_swiper">

            <ul class="news-item__slider-list swiper-wrapper">

            <? 
              $images = json_decode($row['images'], true);   

              foreach ($images as $item) {

                $alt = $item['alt'];
                $img = $item['path'];

                echo "
                <li class='news-item__slider-item swiper-slide'>
                  <img src='/assets/img/{$img}' alt='{$alt}'>
                </li>

                ";
              }            
            ?>
            
            </ul>
          </div>

          <div class="swiper-pagination swiper-pagination-news"></div>
          <div class="swiper-button swiper-button-next swiper-button-next_res-card__news"></div>
          <div class="swiper-button swiper-button-prev swiper-button-prev_res-card__news"></div>
        </div>

        <p class="news-item__text">
          <?= $row['text'] ?>
        </p>
      </div>
    </div>
  </section>
</main>

<?
include '' . $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php';
?>