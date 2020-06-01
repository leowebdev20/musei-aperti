<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musei Aperti</title>
    <link rel="icon" href="./img\favicon.ico"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./style.css">
    <script src="./main.js" defer></script>

</head>

<body>


    <nav>
        <div class="nav-container">
            <a href="http://localhost:4000/phptest/index.php"><img src="./img\logomuseiaperti.png" class="logomuseiaperti"
                    alt="logo-museiaperti"></a>
            <div class="logo">
                <a href="http://localhost:4000/phptest/index.php">
                    <h1>MuseiAperti.it</h1>
                </a>
            </div>
            <form action="javascript:redirect()" autocomplete="off" class="moveRight">
                <input type="search" name="search" id="search" class="form-control"
                    placeholder="Cerca la tua Regione...">
                <ul class="lista list-group" id="result"></ul>
                <button type="submit">
                    <img src="./img\lente2.png" class="search-icon" alt="search-icon">
                </button>
            </form>
        </div>
    </nav>