<?
error_reporting(E_ALL);

$inputData = file_get_contents('php://input');

if (!$inputData) {
  die('No data');
}

include $_SERVER["DOCUMENT_ROOT"] . '/backend/db.php';
include $_SERVER["DOCUMENT_ROOT"] . '/backend/f.php';

if ($inputData) {
  $data = json_decode($inputData, true);
  $arrKeys = array_keys($data);

  foreach ($arrKeys as $key) {
    if ($key == 'function') {
      $function = $data[$key];
    }

    if ($key == 'table') {
      $table = $data[$key];
    }
  }

  if ($function == 'get') {
    // $query = sprintf(
    //   "SELECT * FROM `$table` WHERE `id` = '%s'",
    //   mysqli_real_escape_string($db, $id)
    // );

    $query = "SELECT * FROM `$table`";

    $result = mysqli_query($db, $query);
    // $row = mysqli_fetch_assoc($result);
    while ($row = mysqli_fetch_assoc($result)) {
      $arr[] = $row;
    } 

  }

  echo json_encode($arr, JSON_UNESCAPED_UNICODE);
}

// $query = "SELECT * FROM `price`";

// $result = mysqli_query($db, $query);
// $arr = mysqli_fetch_all($result);


// echo json_encode($arr, JSON_UNESCAPED_UNICODE);
