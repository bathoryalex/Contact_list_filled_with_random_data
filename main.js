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
                    "<p>" + item.fname + " " + item.lname + "</p>" +
                    "<p>" + "Address: " + item.city + ", " + item.address + "</p>" +
                    "<p>" + "Email: " + item.email + "</p>" +
                    "<p>" + "Telephone number: " + item.tel + "</p>";
                $("<div class='card'></div>").html(contact).appendTo("#records");
            });
        });
})();