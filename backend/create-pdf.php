<?
require_once 'tcpdf/tcpdf.php'; // Подключаем библиотеку
ob_start();
// require 'tcpdf/tcpdf.php';
// include 
// ob_end_clean();
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-7', false);

// устанавливаем описание документа
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Config');
$pdf->SetTitle('Config');
$pdf->SetSubject('Config');
$pdf->SetKeywords('Config');

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


$s = '
    <h1>Тестerrrwr22424</h1>
    <p>текст 442424 424234текст текст test.pdf</p>
';

$pdf->writeHTML($s, true, false, true, false, '');
ob_end_clean();
// ob_end_clean();
$pdf->Output($_SERVER['DOCUMENT_ROOT'] . 'test.pdf', 'F');