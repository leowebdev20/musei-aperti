// live search (richiamare elenco regioni come suggerimento barra di ricerca)
$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function () {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('./data/lista.json', function (data) {
            $.each(data, function (key, value) {
                // && searchField.length !== 0 è per evitare che i risultati escano quando il campo di ricerca è vuoto
                if (value.regione.search(expression) != -1 && searchField.length !== 0) {
                    $('#result').append('<li class="list-group-item link-class"><img src="' + value.image + '" height="30" width="30" class="img-thumbnail" /> ' + '<span class="text-muted">' + value.regione + '</span>' + ' | <span class="text-muted"> Musei: ' + value.totmusei + '</span></li>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function () {
        var click_text = $(this).text().split('|');
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
    });
});

$(document).ready(function () {
    $("#results-container").hide();
    function search() {
        $.ajaxSetup({ cache: false });
        $('#search').keyup(function () {
            $('#state').val('');
            var searchField = $('#search').val();
            var expression = new RegExp(searchField, "i");
            $.getJSON('./data/veneto-table.json', function (data) {
                var numeri = '';
                $.each(data, function (key, value) {
                    let apertura;  //se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
                    if (value.aperto === undefined) {
                        apertura = "Se lo sai scrivici!";
                    } else {
                        apertura = value.aperto;
                    };
                    let programmazione;  //se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
                    if (value.programmata === undefined) {
                        programmazione = "Se lo sai scrivici!";
                    } else {
                        programmazione = value.programmata;
                    };             // parte del getting the data from the json for the table, se l'utente conferma la ricerca con l'esatto nome della regione, per ora solo per il Veneto
                    if (searchField.toLowerCase() === "veneto") {
                        numeri += '<tr>';
                        numeri += '<td>' + value.museo + '</td>';
                        numeri += '<td>' + value.citta + '</td>';
                        numeri += '<td>' + apertura + '</td>';
                        numeri += '<td>' + programmazione + '</td>';
                        numeri += '</tr>';
                    }
                });
                $('#results-table').append(numeri);
            });
        });
    }

    $("#button").click(function () {
        $(".containerZ").hide();
        $("#result").hide();
        search();
        $("#results-container").show();
    });
    $('#search').keyup(function (e) {
        if (e.keyCode == 13) {
            $(".containerZ").hide();
            $("#result").hide();
            search();
            $("#results-container").show();
        }
    });
});

// // indirizzare l'user alla pagina della regione cercata - disattivato vista l'inutilita con github pages / netlify
// function redirect() {
//     var searchitem = document.getElementById("search");
//     window.location.replace("http://127.0.0.1:5500/index-" + searchitem.value + ".html");
// }

// ricevere dal json i dati della dati-table e mostrarli nella rispettiva html table

$(document).ready(function () {
    $.getJSON("data/dati-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.dato + '</td>';
            numeri += '<td>' + value.numero + '</td>';
            numeri += '</tr>';
        });
        $('#dati-table').append(numeri);
    });
});

// ricevere dal json i dati della regioni-table e mostrarli nella rispettiva html table
$(document).ready(function () {
    $.getJSON("data/regioni-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.regione + '</td>';
            numeri += '<td>' + value.numero + '</td>';
            numeri += '</tr>';
        });
        $('#regioni-table').append(numeri);
    });
});

// ricevere dal json i dati della recenti-table e mostrarli nella rispettiva html table
$(document).ready(function () {
    $.getJSON("data/recenti-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.citta + '</td>';
            numeri += '<td>' + value.aperto + '</td>';
            numeri += '<td>' + value.programmata + '</td>';
            numeri += '</tr>';
        });
        $('#recenti-table').append(numeri);
    });
});

// ricevere dal json i dati della programmate-table e mostrarli nella rispettiva html table
$(document).ready(function () {
    $.getJSON("data/programmate-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.citta + '</td>';
            numeri += '<td>' + value.aperto + '</td>';
            numeri += '<td>' + value.programmata + '</td>';
            numeri += '</tr>';
        });
        $('#programmate-table').append(numeri);
    });
});

// ricevere dal json i dati della veneto-table e mostrarli nella rispettiva html table
$(document).ready(function () {
    $.getJSON("data/veneto-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            let apertura;  //se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
            if (value.aperto === undefined) {
                apertura = "Se lo sai scrivici!";
            } else {
                apertura = value.aperto;
            };
            let programmazione;  //se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
            if (value.programmata === undefined) {
                programmazione = "Se lo sai scrivici!";
            } else {
                programmazione = value.programmata;
            };             // parte del getting the data from the json for the table
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.citta + '</td>';
            numeri += '<td>' + apertura + '</td>';
            numeri += '<td>' + programmazione + '</td>';
            numeri += '</tr>';

        });
        $('#veneto-table').append(numeri);
    });
});

// ricevere dal json i dati della lazio-table e mostrarli nella rispettiva html table
$(document).ready(function () {
    $.getJSON("data/lazio-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            let apertura;  //se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
            if (value.aperto === undefined) {
                apertura = "Se lo sai scrivici!";
            } else {
                apertura = value.aperto;
            };
            let programmazione;  //se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
            if (value.programmata === undefined) {
                programmazione = "Se lo sai scrivici!";
            } else {
                programmazione = value.programmata;
            }; // fin qui, mentre ora inizia il getting the data from the json for the table
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.citta + '</td>';
            numeri += '<td>' + apertura + '</td>';
            numeri += '<td>' + programmazione + '</td>';
            numeri += '</tr>';

        });
        $('#lazio-table').append(numeri);
    });
});


// sorting lazio-table  
function sortLazio(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("lazio-table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};

// sorting veneto-table  
function sortVeneto(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("veneto-table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};

// sorting recenti-table  
function sortRecenti(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("recenti-table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};

// sorting programmate-table  
function sortProgrammate(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("programmate-table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};
// sorting results-table 
function sortResults(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("results-table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};