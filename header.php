<?php
// header.php
function renderHeader($title, $pathPrefix = "./") {
    ?>
    <!DOCTYPE html>
    <html lang="ro">
    <head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
    <link rel="icon" type="image/x-icon" href="<?php echo $pathPrefix; ?>IMAGE/image.ico">
    <link rel="stylesheet" href="<?php echo $pathPrefix; ?>CSS/style.css">
    <?php
    // Logic to find script.js which you have inside the HTML/ folder
    $scriptPath = ($pathPrefix === "./") ? "./HTML/script.js" : "./script.js";
    ?>
    <script src="<?php echo $scriptPath; ?>" defer></script>
    </head>
    <body>
    <?php
}
?>
