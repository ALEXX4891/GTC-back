<?php
error_reporting(0);

$host = 'localhost'; // имя хоста
$database = 'wwserver_sib_dev'; // имя бд
$user = 'wwserver_sib_dev'; // имя пользователя
$pswd = 'n1WbPE%u'; //пароль

$db = mysqli_connect($host, $user, $pswd, $database) or die("Ошибка БД localhost #1");

// ///////////////
// $db = mysqli_connect("localhost", "my_user", "my_password", "world");

// $city = "'s-Hertogenbosch";

// /* этот запрос с экранированным $city будет работать */
// $query = sprintf("SELECT CountryCode FROM City WHERE name='%s'",
//     mysqli_real_escape_string($db, $city));
// // $result = mysqli_query($db, $query);