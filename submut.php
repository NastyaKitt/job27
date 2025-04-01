<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Получаем данные
    $name = htmlspecialchars(trim($_POST["name"]));
    $tel = htmlspecialchars(trim($_POST["tel"]));

    // Валидация данных
    if (empty($name) || empty($tel)) {
        echo "Имя и телефон обязательны для заполнения!";
        exit;
    }

    // Установка параметров для письма
    $to = "your-email@example.com"; // Замените на вашу электронную почту
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $tel";
    $headers = "From: webmaster@example.com"; // Укажите свой адрес

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Ваше сообщение отправлено успешно!";
    } else {
        echo "Произошла ошибка при отправке сообщения.";
    }

} else {
    echo "Неверный метод запроса.";
}
?>