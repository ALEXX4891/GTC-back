<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

include $_SERVER["DOCUMENT_ROOT"] . '/backend/db.php';
$result = mysqli_query($db, "SELECT * FROM contacts");
$row = mysqli_fetch_array($result);

$fieldsArr = [];

$fieldsArr = [
  'key'       => 'a2a837c238adf8f115947e9b1cbebd2a',
  'domain'    => 'siberia-dev.ru',
  // 'type'      => 'call'
];

// TODO передевать type в параметры


$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8'; //кодировка письма
$mail->setLanguage('ru', 'PHPMailer/language/'); //задать язык для отображения ошибок
$mail->isHTML(true); // включить html теги в письме

// от кого письмо
$mail->setFrom('admin@siberia-dev.ru', 'Сибирь');

// кому письмо
$recipients = [
  $row['email'] => 'Person One',
  // 'ALEXX4891@mail.ru' => 'Person One',
  // 'direktor-info.alfa@yandex.ru' => 'Person Two',
];

foreach ($recipients as $email => $name) {
  $mail->addAddress($email, $name);
}

//Добавляет адрес кому отправится скрытая копия:
// $mailer->AddBCC('Ящик 3'); 

// --------- запрос планировок: ----------
if (!empty($_POST['id']) && $_POST['id'] == '2') {

  // тема письма
  $mail->Subject = 'Заказ звонка с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Заказ звонка с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p><br/>';
    $fieldsArr['email'] = $_POST['email'];
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['message'] . '</p><br/>';
    // $fieldsArr['comment'] = $_POST['message'];
  }

  if (trim(!empty($_POST['dataRequest']))) {
    $body .= '<p><strong>Вопрос:</strong> ' . $_POST['dataRequest'] . '</p><br/>';
    // $fieldsArr['comment'] = $_POST['message'];
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '5') {

  // тема письма
  $mail->Subject = 'Бронь квартиры с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Бронь квартиры с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p><br/>';
    $fieldsArr['email'] = $_POST['email'];
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['message'] . '</p><br/>';
    // $fieldsArr['comment'] = 'Комментарий: ' . $_POST['message'] . ".\n";
  }

  if (trim(!empty($_POST['floor']))) {
    $body .= '<p><strong>Этаж:</strong> ' . $_POST['floor'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Этаж: ' . $_POST['floor'] . ".\n";
  }

  if (trim(!empty($_POST['payment']))) {
    $body .= '<p><strong>Способ оплаты:</strong> ' . $_POST['payment'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Способ оплаты: ' . $_POST['payment'] . ".\n";
  }

  if (trim(!empty($_POST['house_id']))) {
    $body .= '<p><strong>Дом id:</strong> ' . $_POST['house_id'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Дом id: ' . $_POST['house_id'] . ".\n";
  }

  if (trim(!empty($_POST['house']))) {
    $body .= '<p><strong>Дом:</strong> ' . $_POST['house'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Дом: ' . $_POST['house'] . ".\n";
  }

  if (trim(!empty($_POST['project']))) {
    $body .= '<p><strong>Проект:</strong> ' . $_POST['project'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Проект: ' . $_POST['project'] . ".\n";
  }

  if (trim(!empty($_POST['apartment']))) {
    $body .= '<p><strong>Квартира:</strong> ' . $_POST['apartment'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Квартира: ' . $_POST['apartment'] . ".\n";
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '10') {

  // тема письма
  $mail->Subject = 'Заказ звонка с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Заказ звонка с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p><br/>';
    $fieldsArr['email'] = $_POST['email'];
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['message'] . '</p><br/>';
    // $fieldsArr['comment'] = 'Комментарий: ' . $_POST['message'] . ".\n";
  }

  if (trim(!empty($_POST['floor']))) {
    $body .= '<p><strong>Этаж:</strong> ' . $_POST['floor'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Этаж: ' . $_POST['floor'] . ".\n";
  }

  if (trim(!empty($_POST['payment']))) {
    $body .= '<p><strong>Способ оплаты:</strong> ' . $_POST['payment'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Способ оплаты: ' . $_POST['payment'] . ".\n";
  }

  if (trim(!empty($_POST['house_id']))) {
    $body .= '<p><strong>Дом id:</strong> ' . $_POST['house_id'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Дом id: ' . $_POST['house_id'] . ".\n";
  }

  if (trim(!empty($_POST['house']))) {
    $body .= '<p><strong>Дом:</strong> ' . $_POST['house'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Дом: ' . $_POST['house'] . ".\n";
  }

  if (trim(!empty($_POST['project']))) {
    $body .= '<p><strong>Проект:</strong> ' . $_POST['project'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Проект: ' . $_POST['project'] . ".\n";
  }

  if (trim(!empty($_POST['apartment']))) {
    $body .= '<p><strong>Квартира:</strong> ' . $_POST['apartment'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Квартира: ' . $_POST['apartment'] . ".\n";
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '6') {

  // тема письма
  $mail->Subject = 'Заказ звонка от агенства с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Заказ звонка от агенства с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['agent-name']))) {
    $body .= '<p><strong>ФИО агента:</strong> ' . $_POST['agent-name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['agent-name'];
  }

  if (trim(!empty($_POST['agent-phone']))) {
    $body .= '<p><strong>Телефон агента:</strong> ' . $_POST['agent-phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['agent-phone'];
  }

  if (trim(!empty($_POST['agency']))) {
    $body .= '<p><strong>Агентство:</strong> ' . $_POST['agency'] . '</p><br/>';
    // $fieldsArr['agency'] = $_POST['agency'];
    // $fieldsArr['comment'] = 'Агентство: ' . $_POST['agency'] . ".\n";
  }

  if (trim(!empty($_POST['client-name']))) {
    $body .= '<p><strong>ФИО клиента:</strong> ' . $_POST['client-name'] . '</p><br/>';
    // $fieldsArr['client_name'] = $_POST['client-name'];
    // $fieldsArr['comment'] .= 'Клиент: ' . $_POST['client-name'] . ".\n";
  }

  if (trim(!empty($_POST['client-phone']))) {
    $body .= '<p><strong>Телефон клиента:</strong> ' . $_POST['client-phone'] . '</p><br/>';
    // $fieldsArr['client_phone'] = $_POST['client-phone'];
    // $fieldsArr['comment'] .= 'Телефон клиента: ' . $_POST['client-phone'] . ".\n";
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['message'] . '</p><br/>';
    // $fieldsArr['comment'] = $_POST['message'];
    // $fieldsArr['comment'] .= 'Комментарий: ' . $_POST['message'] . ".\n";
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '3') {

  // тема письма
  $mail->Subject = 'Подписка на новости с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Подписка на новости с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    // $body .= '<p><strong>ФИО агента:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    // $body .= '<p><strong>Телефон агента:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Подписка на новости:</strong> ' . $_POST['email'] . '</p><br/>';
    // $fieldsArr['comment'] = $_POST['agency'];
    // $fieldsArr['comment'] = 'Подписка на новости: ' . $_POST['email'] . ".\n";
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '8') {

  $file = $_FILES['file'];
  // тема письма
  $mail->Subject = 'Предложение по сотрудничеству от агенства с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Предложение по сотрудничеству от агенства с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя агента:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон агента:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  if (trim(!empty($_POST['work-type']))) {
    $body .= '<p><strong>Агенство:</strong> ' . $_POST['work-type'] . '</p><br/>';
    // $fieldsArr['comment'] = $_POST['agency'];
    // $fieldsArr['comment'] = 'Предложение о сотрудничестве от Агенства: ' . $_POST['work-type'] . ".\n";
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['message'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Комментарий: ' . $_POST['message'] . ".\n";
  }


  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
    // echo  $file['tmp_name'];
    // for ($i = 0; $i < count($file['tmp_name']); $i++) {
    //     if ($file['error'][$i] === 0) 
    $mail->addAttachment($file['tmp_name'], $file['name']);
    // }
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '7') {

  $file = $_FILES['file'];
  // тема письма
  $mail->Subject = 'Предложение по сотрудничеству от подрядной организации, с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Предложение по сотрудничеству от подрядной организации, с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  if (trim(!empty($_POST['work-type']))) {
    $body .= '<p><strong>Организация:</strong> ' . $_POST['work-type'] . '</p><br/>';
    // $fieldsArr['comment'] = $_POST['agency'];
    // $fieldsArr['comment'] = 'Предложение о сотрудничестве от организации: ' . $_POST['work-type'] . ".\n";
  }

  if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Комментарий:</strong> ' . $_POST['message'] . '</p><br/>';
    // $fieldsArr['comment'] .= 'Комментарий: ' . $_POST['message'] . ".\n";
  }


  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
    // echo  $file['tmp_name'];
    // for ($i = 0; $i < count($file['tmp_name']); $i++) {
    //     if ($file['error'][$i] === 0) 
    $mail->addAttachment($file['tmp_name'], $file['name']);
    // }
  }

  $fieldsArr['comment'] = $body;
} elseif (!empty($_POST['id']) && $_POST['id'] == '9') {

  $file = $_FILES['file'];
  // тема письма
  $mail->Subject = 'Предложение по сотрудничеству от банка, с сайта siberia-dev.ru';

  // текст письма
  $body = '<h1>Предложение по сотрудничеству от банка, с сайта siberia-dev.ru:</h1><br/><br/>';

  if (trim(!empty($_POST['theme']))) {
    // $body .= '<p><strong>Тема:</strong> ' . $_POST['theme'] . '</p><br/>';
    $fieldsArr['type'] = $_POST['theme'];
  }

  if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
    $fieldsArr['name'] = $_POST['name'];
  }

  if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
    $fieldsArr['phone'] = $_POST['phone'];
  }

  $fieldsArr['comment'] = $body;
}



// if (!empty($_POST['id']) && $_POST['id'] == '4') {

//   // тема письма
//   $mail->Subject = 'Заказ звонка с сайта siberia-dev.ru';

//   // текст письма
//   $body = '<h1>Заказ звонка с сайта siberia-dev.ru:</h1><br/><br/>';

//   if (trim(!empty($_POST['theme']))) {
//     $body .= '<p><strong>Имя:</strong> ' . $_POST['theme'] . '</p><br/>';
//     $fieldsArr['type'] = $_POST['theme'];
//   }

//   if (trim(!empty($_POST['name']))) {
//     $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
//     $fieldsArr['name'] = $_POST['name'];
//   }

//   if (trim(!empty($_POST['phone']))) {
//     $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
//     $fieldsArr['phone'] = $_POST['phone'];
//   }

//   if (trim(!empty($_POST['email']))) {
//     $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p><br/>';
//     $fieldsArr['email'] = $_POST['email'];
//   }
// }

// // if (!empty($_POST['id']) && $_POST['id'] == '3') {
// if (!empty($_POST['id']) && $_POST['id'] != '2' && $_POST['id'] != '4') {



//   // тема письма
//   $mail->Subject = 'Заявка с сайта siberia-dev.ru/';

//   // текст письма
//   $body = '<h1>Уведомление с сайта siberia-dev.ru/:</h1><br/><br/>';

//   if (trim(!empty($_POST['name']))) {
//     $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
//     $fieldsArr['name'] = $_POST['name'];
//   }

//   if (trim(!empty($_POST['phone']))) {
//     $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
//     $fieldsArr['phone'] = $_POST['phone'];
//   }

//   if (trim(!empty($_POST['message']))) {
//     $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p><br/>';
//     $fieldsArr['comment'] = $_POST['message'];
//   }

//   if (trim(!empty($_POST['email']))) {
//     $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p><br/>';
//     $fieldsArr['email'] = $_POST['email'];
//   }
// }

//------------прикрепить файл:
// if (!empty($_FILES['myfile']['tmp_name'])) {
//   //путь загрузки файла:
//   $filePath = __DIR__ . "/files/" . $_FILES['myfile']['name'];
//   //загрузить файл:
//   if (copy($_FILES['myfile']['tmp_name'], $filePath)) {
//     $fileAttach = $filePath;
//     $body .= '<p><strong>Файл в прлижоении</strong> <a href="' . $fileAttach . '">' . $_FILES['myfile']['name'] . '</a></p><br/>';
//     $mail->addAttachment($fileAttach);
//   }
//   // $mail->addAttachment($_FILES['myfile']['tmp_name'], $_FILES['myfile']['name']);
//   // $body .= '<p><strong>Прикреплен файл:</strong> <a href="' . $_FILES['myfile']['tmp_name'] . '">' . $_FILES['myfile']['name'] . '</a></p><br/>';

// }

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

// if (isset($_POST['name'])) {
//   $body .= 'Имя: ' . $_POST['name'] . '<br />';
// }
// $body .= 'Имя: ' . $_POST['name'] . '<br />';
// $body .= 'Email: ' . $_POST['email'] . '<br />';
// $body .= 'Телефон: ' . $_POST['phone'] . '<br />';
// $body .= 'Сообщение: ' . $_POST['message'] . '<br />';
// $body .= 'Интересует проект: ' . $_POST['project'] . '<br />';
// $mail->Body = $body;


//cURL запрос: 
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://crm.m2lab.ru/ats/sites_hook/leadEventCallBack',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => $fieldsArr,
));

$response = curl_exec($curl);


curl_close($curl);
// echo $response;

// // Отправляем
// if (!$response == "success" && !$mail->send()) {
//   $message = 'Ошибка';
// } else {
//   $message = 'Данные отправлены';
// }