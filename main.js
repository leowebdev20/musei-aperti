// quel  && searchField.length !== 0 è mio zio!
$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function () {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('lista.json', function (data) {
            $.each(data, function (key, value) {
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



function redirect() {
    var searchitem = document.getElementById("search");
    window.location.replace("http://localhost:4000/phptest/index-" + searchitem.value + ".php");
}


$(document).ready(function () {
    $.getJSON("data/dati-table2.json", function (data) {
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
$(document).ready(function () {
    $.getJSON("data/recenti-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.luogo + '</td>';
            numeri += '<td>' + value.aperto + '</td>';
            numeri += '<td>' + value.programmata + '</td>';
            numeri += '</tr>';
        });
        $('#recenti-table').append(numeri);
    });
});
$(document).ready(function () {
    $.getJSON("data/programmate-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.luogo + '</td>';
            numeri += '<td>' + value.aperto + '</td>';
            numeri += '<td>' + value.programmata + '</td>';
            numeri += '</tr>';
        });
        $('#programmate-table').append(numeri);
    });
});
$(document).ready(function () {
    $.getJSON("data/venezia-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            numeri += '<tr>';
            numeri += '<td>' + value.museo + '</td>';
            numeri += '<td>' + value.luogo + '</td>';
            numeri += '<td>' + value.aperto + '</td>';
            numeri += '<td>' + value.programmata + '</td>';
            numeri += '</tr>';
        });
        $('#venezia-table').append(numeri);
    });
});
$(document).ready(function () {
    $.getJSON("data/lazio-table.json", function (data) {
        var numeri = '';
        $.each(data, function (key, value) {
            let apertura;  //qui metto che se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
            if (value.aperto === undefined) {
                apertura = "Se lo sai scrivici!";
            } else {
                apertura = value.aperto;
            };
            let programmazione;  //qui metto che se il dato è non definito ritorno un messaggio altrimenti ritorno il dato
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













// const datiTable = document.querySelector('#dati-table > tbody');

// function loadDati() {
//     const request = new XMLHttpRequest();

//     request.open("get", "data/dati-table.json");
//     request.onload = () => {
//         try {
//             const json = JSON.parse(request.responseText);
//             populateDati(json);
//         } catch (e) {
//             console.warn("Could not load dati table!");
//         }
//     };

//     request.send();
// }

// function populateDati(json) {
//     //clears out existing table data
//     while (datiTable.firstChild) {
//         datiTable.removeChild(datiTable.firstChild);
//     }

//     //populate table
//     json.forEach((row) => {
//         const tr = document.createElement("tr");

//         row.forEach((cell) => {
//             const td = document.createElement("td");
//             td.textContent = cell;
//             tr.appendChild(td);
//         });

//         datiTable.appendChild(tr);
//     });
// }

// document.addEventListener("DOMContentLoaded", () => { loadDati(); })