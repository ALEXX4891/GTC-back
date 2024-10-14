<?
error_reporting(0);

$host = 'localhost'; // имя хоста
$database = 'wwserver_tgc'; // имя бд
$user = 'wwserver_tgc'; // имя пользователя
$pswd = 'mfKZwSrad6f%'; //пароль

$db = mysqli_connect($host, $user, $pswd, $database) or die("Ошибка БД localhost #1");