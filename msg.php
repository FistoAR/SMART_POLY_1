<?php
<?php
header("Content-Type: application/json");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
// Include PHPMailer (path may vary)
require __DIR__ . '/phpMailer/vendor/autoload.php';
 
// Function to clean input
function clean_input($data) {
    return htmlspecialchars(stripslashes(trim($data)), ENT_QUOTES, 'UTF-8');
}
 
// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "Invalid request method.";
    exit;
}
 
// Collect form data
$fname    = clean_input($_POST['fname'] ?? '');
$mobile   = clean_input($_POST['mobile'] ?? '');
$width    = clean_input($_POST['width'] ?? '');
$length   = clean_input($_POST['length'] ?? '');
$gsm      = clean_input($_POST['gsm'] ?? '');
$quantity = clean_input($_POST['quantity'] ?? '');
$message  = clean_input($_POST['message'] ?? '');
 
// Validate mandatory fields
if (empty($fname) || empty($mobile) || empty($message)) {
    echo "Please fill all required fields.";
    exit;
}
 
// Initialize PHPMailer
$mail = new PHPMailer(true);
 
try {
    // SMTP server settings (your domain hosting)
    $mail->isSMTP();
    $mail->Host       = 'host11.cloudindianserver.com'; // <- Use this hostname
    $mail->SMTPAuth   = true;
    $mail->Username   = 'support@smartpolypackaging.co.in';
    $mail->Password   = 'support@2025smart';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
 
    // From & To addresses
    $mail->setFrom('support@smartpolypackaging.co.in', 'Smart Poly Website');
    $mail->addAddress('fistotech01@gmail.com', 'Smart Poly'); // receiver email
 
    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry from Smart Poly Website';
    $mail->Body = "
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> {$fname}</p>
        <p><strong>Mobile:</strong> {$mobile}</p>
        <p><strong>Width:</strong> {$width} inches</p>
        <p><strong>Length:</strong> {$length} inches</p>
        <p><strong>GSM:</strong> {$gsm} gauge</p>
        <p><strong>Quantity:</strong> {$quantity}</p>
        <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
        <hr>
        <p>Sent from Smart Poly Contact Form</p>
    ";
    $mail->AltBody = "Name: $fname\nMobile: $mobile\nWidth: $width\nLength: $length\nGSM: $gsm\nQuantity: $quantity\nMessage:\n$message\n";
 
    // Send mail
    $mail->send();
    echo `Thank you, $fname! Your enquiry has been sent successfully.`;
 
} catch (Exception $e) {
    echo "<p>Sorry, message could not be sent. Mailer Error: {$mail->ErrorInfo}</p>";
}
?>