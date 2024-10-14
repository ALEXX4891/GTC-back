<?php
//Формат текста
function formatting($text)
{
    $text = stripslashes($text);
    $text = trim($text);
    $text = htmlspecialchars($text, ENT_QUOTES);
    return $text;
}

function f_date($date)
{
    $date = date("d.m.Y", strtotime($date));
    return $date;
}

//Подсчет всех строк в определенной таблице
function all_count_table($name_table)
{
    global $db;
    $result = mysqli_query($db, "SELECT * FROM $name_table");
    $all_count_table = mysqli_num_rows($result);
    return $all_count_table;
}

//Подсчет определенных строк в таблице
function line_count_table($table, $column, $znak, $value)
{
    global $db;
    $result = mysqli_query($db, "SELECT * FROM $table WHERE $column $znak '{$value}'");
    $line_count_table = mysqli_num_rows($result);
    return $line_count_table;
}

//Поиск по справочнику
function request_book_name_local($table, $id_item)
{
    global $db;
    $id_item = (int)$id_item;
    $result = mysqli_query($db, "SELECT * FROM $table WHERE id = '{$id_item}'");
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        $request_book_name_local = $row['name'];
    } else {
        $request_book_name_local = '&mdash;';
    }
    return $request_book_name_local;
}

//резка текста
function cropStr($text, $size)
{
    $text = substr($text, 0, $size); //обрежем его на определённое количество символов 
    $text = rtrim($text, "!,.-"); //убедимся, что текст не заканчивается восклицательным знаком, запятой, точкой или тире 
    $text = substr($text, 0, strrpos($text, ' ')); //находим последний пробел, устраняем его и ставим троеточие 
    return $text . ' ...';
}

//Поиск по справочнику по субимени
function request_book_subname_local($table, $id_item)
{
    global $db;
    $id_item = (int)$id_item;
    $result = mysqli_query($db, "SELECT * FROM $table WHERE id = '{$id_item}'");
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        $request_book_name_local = $row['subName'];
    } else {
        $request_book_name_local = '&mdash;';
    }
    return $request_book_name_local;
}


//Месяц словами
function monthRus($month, $case, $uppercase)
{
    if ($case == 'im') //Именительный
    {
        if ($uppercase == 1) //С заглавной буквы
        {
            if ($month == '01') {
                $month = 'Январь';
            } elseif ($month == '02') {
                $month = 'Февраль';
            } elseif ($month == '03') {
                $month = 'Март';
            } elseif ($month == '04') {
                $month = 'Апрель';
            } elseif ($month == '05') {
                $month = 'Май';
            } elseif ($month == '06') {
                $month = 'Июнь';
            } elseif ($month == '07') {
                $month = 'Июль';
            } elseif ($month == '08') {
                $month = 'Август';
            } elseif ($month == '09') {
                $month = 'Сентябрь';
            } elseif ($month == '10') {
                $month = 'Октябрь';
            } elseif ($month == '11') {
                $month = 'Ноябрь';
            } elseif ($month == '12') {
                $month = 'Декабрь';
            }
        } elseif ($uppercase == 2) //все малые
        {
            if ($month == '01') {
                $month = 'январь';
            } elseif ($month == '02') {
                $month = 'февраль';
            } elseif ($month == '03') {
                $month = 'март';
            } elseif ($month == '04') {
                $month = 'апрель';
            } elseif ($month == '05') {
                $month = 'май';
            } elseif ($month == '06') {
                $month = 'июнь';
            } elseif ($month == '07') {
                $month = 'июль';
            } elseif ($month == '08') {
                $month = 'август';
            } elseif ($month == '09') {
                $month = 'сентябрь';
            } elseif ($month == '10') {
                $month = 'октябрь';
            } elseif ($month == '11') {
                $month = 'ноябрь';
            } elseif ($month == '12') {
                $month = 'декабрь';
            }
        }
    } elseif ($case == 'rod') //Родительный
    {
        if ($uppercase == 1) //С заглавной буквы
        {
            if ($month == '01') {
                $month = 'Января';
            } elseif ($month == '02') {
                $month = 'Февраля';
            } elseif ($month == '03') {
                $month = 'Марта';
            } elseif ($month == '04') {
                $month = 'Апреля';
            } elseif ($month == '05') {
                $month = 'Мая';
            } elseif ($month == '06') {
                $month = 'Июня';
            } elseif ($month == '07') {
                $month = 'Июля';
            } elseif ($month == '08') {
                $month = 'Августа';
            } elseif ($month == '09') {
                $month = 'Сентября';
            } elseif ($month == '10') {
                $month = 'Октября';
            } elseif ($month == '11') {
                $month = 'Ноября';
            } elseif ($month == '12') {
                $month = 'Декабря';
            }
        } elseif ($uppercase == 2) //все малые
        {
            if ($month == '01') {
                $month = 'января';
            } elseif ($month == '02') {
                $month = 'февраля';
            } elseif ($month == '03') {
                $month = 'марта';
            } elseif ($month == '04') {
                $month = 'апреля';
            } elseif ($month == '05') {
                $month = 'мая';
            } elseif ($month == '06') {
                $month = 'июня';
            } elseif ($month == '07') {
                $month = 'июля';
            } elseif ($month == '08') {
                $month = 'августа';
            } elseif ($month == '09') {
                $month = 'сентября';
            } elseif ($month == '10') {
                $month = 'октября';
            } elseif ($month == '11') {
                $month = 'ноября';
            } elseif ($month == '12') {
                $month = 'декабря';
            }
        }
    } else {
        $month == null;
    }

    return $month;
}

// функция перевода числа в слово
function num_word($value, $words, $show = true) 
{
	$num = $value % 100;
	if ($num > 19) { 
		$num = $num % 10; 
	}
	
	$out = ($show) ?  $value . ' ' : '';
	switch ($num) {
		case 1:  $out .= $words[0]; break;
		case 2: 
		case 3: 
		case 4:  $out .= $words[1]; break;
		default: $out .= $words[2]; break;
	}
	
	return $out;
}
