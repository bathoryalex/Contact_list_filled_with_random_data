(function() {
    var url = "http://www.filltext.com/?callback=?";
    $.getJSON( url, {
        'rows': 20,
        'fname': '{firstName}',
        'lname': '{lastName}',
        'city': '{city}',
        'address': '{streetAddress}',
        'email': '{email}',
        'tel': '{phone|format}',
    })
        .done(function( data ) {
            $.each( data, function( i, item ) {
                var contact =
                    "<td>" + item.fname + "</td>" +
                    "<td>" + item.lname + "</td>" +
                    "<td>" + item.city + "</td>" +
                    "<td>" + item.address + "</td>" +
                    "<td>" + item.email + "</td>" +
                    "<td>" + item.tel + "</td>"
                    ;
                $("<tr/>").html(contact).appendTo("#records");
            });
        });
})();