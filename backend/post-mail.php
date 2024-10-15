<?php

ini_set('display_errors', true);
ini_set('display_startup_errors', true);
ini_set('html_errors', true);
ini_set('log_errors', false);
ini_set('error_prepend_string', '<pre style="white-space:pre-wrap">');
ini_set('error_append_string', '</pre>');
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

include $_SERVER["DOCUMENT_ROOT"] . '/backend/db.php';



$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8'; //кодировка письма
$mail->setLanguage('ru', 'PHPMailer/language/'); //задать язык для отображения ошибок
$mail->isHTML(true); // включить html теги в письме

// от кого письмо
$mail->setFrom('admin@gtc.ru', 'gtc');

// кому письмо
$recipients = [
  // $row['email'] => 'Person One',
  'ALEXX4891@mail.ru' => 'Person One',
  'ALEXX4891@yandex.ru' => 'Person Two',

  // 'direktor-info.alfa@yandex.ru' => 'Person Two',
];

foreach ($recipients as $email => $name) {
  $mail->addAddress($email, $name);
}

//Добавляет адрес кому отправится скрытая копия:
// $mailer->AddBCC('Ящик 3'); 

// --------- запрос планировок: ----------
// echo 'sdfsdfsdf';
if ($_POST['type'] == "Консультация") {
  // тема письма
  $mail->Subject = 'Заявка на консультацию с сайта gtc.ru';

  // текст письма
  $body = '<h1>Заявка на консультацию с сайта gtc.ru:</h1>';

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
    // $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p>';
    // $fieldsArr['phone'] = $_POST['phone'];
  }
  
  if (trim(!empty($_POST['organization']))) {
    $body .= '<p><strong>Организация:</strong> ' . $_POST['organization'] . '</p>';
    // $fieldsArr['comment'] = 'Комментарий: ' . $_POST['message'] . ".\n";
  }

  if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
    // $fieldsArr['email'] = $_POST['email'];
  }

  if (trim(!empty($_POST['text']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['text'] . '</p>';
    // $fieldsArr['comment'] = 'Комментарий: ' . $_POST['message'] . ".\n";
  }
} 

$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);