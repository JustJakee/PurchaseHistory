async function buildTable() {
    const locale = 'en-US';

    let url = 'https://idme-interview.herokuapp.com/';
    let json = await (await fetch(url)).json();
    console.log(json);
    //TODO Add Testing for this fetch call


    // Date formatter.
    function formatDate(date) {
        var d = new Date(date);

        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        var dateFormatter = new Intl.DateTimeFormat(locale, options);

        return dateFormatter.format(d);
    }

    // Number formatter.
    var numFormatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
    });

    var tr;
    var boldColumn = `<td class="bold">`;
    var icon = `<td class="material-symbols-outlined">more_vert</td>`;

    // Loop through response object to build table
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append(boldColumn + json[i].name + "</td>");
        tr.append(`<img src=${json[i].location}/200>`);
        tr.append("<td>" + formatDate(json[i].purchaseDate) + "</td>");
        tr.append("<td>" + json[i].category + "</td>");
        tr.append("<td>" + json[i].description + "</td>");
        tr.append(boldColumn + numFormatter.format(json[i].price) + "</td>");
        tr.append(icon);
        $('table').append(tr);
    }
}

buildTable();

// NOTES
// Better formatting would be to use moment.js (more flexibility if updated to react)
// How many Categories? 
// Food , Technology, Travel, Footwear, Automotive, Apparel, Entertainment
// Only supporting USD?
// Only support English?