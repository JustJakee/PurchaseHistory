async function buildTable() {
    let url = 'https://idme-interview.herokuapp.com/';
    let json = await (await fetch(url)).json();
    console.log(json);

    // Number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].name + "</td>");
        tr.append("<td>" + json[i].location + "</td>");
        // Better formatting would be to use moment.js
        tr.append("<td>" + (json[i].purchaseDate) + "</td>");
        tr.append("<td>" + json[i].category + "</td>");
        tr.append("<td>" + json[i].description + "</td>");
        tr.append("<td>" + formatter.format(json[i].price) + "</td>");
        $('table').append(tr);
    }
}

buildTable();

// NOTES
// Are we only supporting USD
// Language support only English?