<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Grand Budapest Hotel - Pokoje</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/hamburger.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/pokoje.css">
    <script src="https://kit.fontawesome.com/252efe8be7.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="content-wrapper">
        <header>
            <a href="index.php"><h1>The Grand Budapest Hotel</h1></a>

            <div class="breadcrums-container">
                <a href="index.php">Strona główna</a>
                <i class="fa-solid fa-chevron-right"></i>
                <a href="pokoje.php">Pokoje</a>
            </div>

            <div class='hamburger-container'>
                <input type='checkbox'>
                <div class='hamburger'>
                    <div></div>
                </div>
            </div>
        </header>

        <main class="rooms-container">
            <div class="room-container">
                <div class="room-banner hidden bottom anim"></div>
                <div class="room-details hidden bottom anim">
                    hej
                </div>
            </div>

            <div class="room-container">
                <div class="room-banner hidden bottom anim"></div>
                <div class="room-details hidden bottom anim">
                    hej
                </div>
            </div>

            <div class="room-container">
                <div class="room-banner hidden bottom anim"></div>
                <div class="room-details hidden bottom anim">
                    hej
                </div>
            </div>

            <div class="room-container">
                <div class="room-banner hidden bottom anim"></div>
                <div class="room-details hidden bottom anim">
                    hej
                </div>
            </div>

            <div class="room-container">
                <div class="room-banner hidden bottom anim"></div>
                <div class="room-details hidden bottom anim">
                    hej
                </div>
            </div>
        </main>

        <footer class="hidden bottom anim">
            footer
        </footer>

        <div id="hamburger-menu" class="hidden">
            <a href="index.php">Strona główna</a>
            <a href="pokoje.php" class="selected">Pokoje</a>
            <a href="kontakt.php">Kontakt</a>
            <a href="wolneTerminy.php">Wolne terminy</a>
        </div>
    </div>
</body>
<script src="js/animateOnScroll.js"></script>
<script src="js/hamburgerMenu.js"></script>
</html>