<?php
// Check if form is submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['fname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate and sanitize input (you can add more validation as needed)

    // Send email
    $to = 'terratechpacks@gmail.com';  // Replace with your email address
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        // Email sent successfully
        echo json_encode(['success' => true]);
    } else {
        // Failed to send email
        echo json_encode(['success' => false]);
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>
