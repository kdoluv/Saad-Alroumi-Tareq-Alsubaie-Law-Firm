<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {

    // إعداد SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.st-lawyers.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'khaled@st-lawyers.com';
    require 'config.php';
    $mail->Password = MAIL_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->CharSet = 'UTF-8';

    // المرسل والمستقبل
    $mail->setFrom('khaled@st-lawyers.com', 'ST Lawyers Website');
    $mail->addAddress('khaled@st-lawyers.com');

    // تنظيف المدخلات
    $firstName = htmlspecialchars($_POST['firstName'] ?? '');
    $lastName  = htmlspecialchars($_POST['lastName'] ?? '');
    $email     = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone     = htmlspecialchars($_POST['countryCode'] . $_POST['phone']);
    $practice  = htmlspecialchars($_POST['practice'] ?? '');
    $message   = htmlspecialchars($_POST['message'] ?? '');

    $mail->Subject = "رسالة جديدة من الموقع";

    $mail->Body = "
الاسم: $firstName $lastName
البريد: $email
الهاتف: $phone
القسم: $practice

الرسالة:
$message
";

    // فلترة المرفقات
    if(isset($_FILES['attachment']) && $_FILES['attachment']['error'] === 0){

        $allowedTypes = ['application/pdf','image/jpeg','image/png'];
        $fileType = mime_content_type($_FILES['attachment']['tmp_name']);

        if(in_array($fileType, $allowedTypes) && $_FILES['attachment']['size'] <= 5 * 1024 * 1024){

            $mail->addAttachment(
                $_FILES['attachment']['tmp_name'],
                $_FILES['attachment']['name']
            );
        }
    }

    $mail->send();

    echo "<script>alert('تم الإرسال بنجاح'); window.location.href='index.html';</script>";

} catch (Exception $e) {
    echo "خطأ في الإرسال: {$mail->ErrorInfo}";
}
?>
