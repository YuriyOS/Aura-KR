<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


// Load Composer's autoloader

require './src/Exception.php';
require './src/PHPMailer.php';
require './src/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$mail->CharSet = 'UTF-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$form_id = $_POST['form_id'];

if (empty($name) ||
    empty($phone)
  ) {

    die('Please fill all required fields!');
}

$ini = parse_ini_file('/home/cs394727/mail.ini', true);

try {

     $mail->isSMTP();
       $mail->Host       = 'mail.adm.tools';
       $mail->SMTPAuth   = true;
       $mail->Username   = $ini['email']['username'];
       $mail->Password   = $ini['email']['password'];
       $mail->SMTPSecure = 'ssl';
       $mail->Port       = 465;

    //Recipients
    $mail->setFrom($ini['email']['username'], 'Aura Center');
    $mail->addAddress('aura.aparts@gmail.com', 'Sales Department');
    $mail->addAddress('key.idc.m@gmail.com', 'Sales Department');


    // Content
    $mail->isHTML(true);
        $mail->Subject = 'Заявка на ' . $form_id;
    $mail->Body    = '
        Заповнено форму на сайті. <br>
        Ім\'я: ' . $name . '<br>
        Телефон: ' . $phone;

    $mail->AltBody = '
        Заповнено форму на сайті.
        Имя: ' . $name . '
        Телефон: ' . $phone;


    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
