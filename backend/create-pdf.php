<?
require_once 'tcpdf/tcpdf.php'; // Подключаем библиотеку
// require_once 'tcpdf_include.php';
ob_start();
// require 'tcpdf/tcpdf.php';
// include 
// ob_end_clean();
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// устанавливаем описание документа
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('TGC');
$pdf->SetTitle('Расчет АЗС');
$pdf->SetSubject('Расчет АЗС');
$pdf->SetKeywords('Расчет АЗС');

// выключаем заголовки, т.к. они нам не нужны
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->setFooterMargin(10);

// устанавливаем поля
$pdf->SetMargins(9, 9, 9, 9);

// автоперенос на новую страницу
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// пропорционирование картинок
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// языковые настройки
$pdf->setLanguageArray($l);

// Устанавливаем шрифт
$pdf->setFontSubsetting(true);
$pdf->SetFont('dejavusans', '', 7, '', true);
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// Вывод данных из HTML в PDF
$pdf->AddPage();

// set JPEG quality
$pdf->setJPEGQuality(75);

$image = '';
$price = '';
$description = '';
$characteristics = '';

$s = '<h1>Калькуляция</h1><br>';

if ($_POST['image']) {
    $image = $_POST['image'];
    // $image = '/assets/img/renders/Open_S_1r_1k.png';
    // $image = '/assets/img/renders/Close_L_4r_4k.png';

    // осторожнее с ковычками!!!!
  $s .= '<img src="' . $image . '" style="
            width: 450px;
            height: auto;
            max-height: 350px;
            display: block;
            object-fit: contain;
            object-position: center;"/>
        '; 
//   $s .= "<p>{$image}</p>";
//   $pdf->Image($image, 10, 10, 250, 250, 'PNG', '', '', false, 150, '', false, false, 1, false, false, false);
}

if ($_POST['price']) {
  $price = $_POST['price'];
  $s .= "<p>{$price}</p>";
}

if ($_POST['description']) {
  $description = $_POST['description'];
  $s.= "<p>{$description}</p>";
}

if ($_POST['characteristics']) {
  $characteristics = $_POST['characteristics'];
  $s.= "<p>{$characteristics}</p>";
}
$pdf->writeHTML($s, true, false, true, false, '');
ob_end_clean();
// echo $s;
$pdf->Output($_SERVER['DOCUMENT_ROOT'] . 'calc.pdf', 'F');

    // $image = '/assets/img/renders/Open_S_1r_1k.png';
