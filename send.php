if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {

    // إعداد SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.google.com'; // سيرفر الاستضافة
    $mail->SMTPAuth   = true;
    $mail->Username   = 'khaled@st-lawyers.com'; // ايميل الموقع
    $mail->Password   = 'k@0472890860S';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // المرسل والمستقبل
    $mail->setFrom('khaled@st-lawyers.com', 'ST Lawyers Website');
    $mail->addAddress('khaled@st-lawyers.com');

    // بيانات النموذج
    $firstName = $_POST['firstName'];
    $lastName  = $_POST['lastName'];
    $email     = $_POST['email'];
    $phone     = $_POST['phone'];
    $practice  = $_POST['practice'];
    $message   = $_POST['message'];

    $mail->Subject = "رسالة جديدة من الموقع";

    $mail->Body = "
    الاسم: $firstName $lastName
    البريد: $email
    الهاتف: $phone
    القسم: $practice

    الرسالة:
    $message
    ";

    // إرفاق الملف
    if(isset($_FILES['attachment']) && $_FILES['attachment']['error'] == 0){
        $mail->addAttachment(
            $_FILES['attachment']['tmp_name'],
            $_FILES['attachment']['name']
        );
    }

    $mail->send();
    echo "تم الإرسال بنجاح";

} catch (Exception $e) {
    echo "خطأ في الإرسال: {$mail->ErrorInfo}";
}
?>
