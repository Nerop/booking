$(document).ready(function() {
    var logged = false;
    var jqxhr = $.getJSON( "top8-hotels.json", function() {
      console.log(jqxhr);
    });
    var json = [{
      'img':'http://placehold.it/300x240',
      'hotelName': 'Rixos',
      'description': 'The best hotel in the world',
      'stars': '*****',
      'price': '400$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale1',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale2',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale3',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale4',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale5',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale6',
      'description': 'The second best hotel in the world',
      'stars': '*****',
      'price': '500$'
    },
  ];
    var hotelContent;

    //loading top 8 hotels
    function loadTopHotels() {
        for (var i = 0; i < json.length; i++) {
                var div = '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">' + '<div class="thumbnail">' + '<img src=' + json[i].img + ' ' + 'alt="">' + '<div class="caption" id=topHotel' + i + '>' + '<h3><a href="#">' + json[i].hotelName + "</a></h3>" + "<p>" + json[i].description + "</p>" + "<p>" + json[i].stars + "</p>" + "<p>" + json[i].price + "</p>" + '</div>' + '</div>' + '</div>';
                $('#row-top-offers').append(div);
            }
    }
    loadTopHotels();

    $('#btn-personal-page').hide();
    $('#btn-exit').hide();

    $('#reg-button').click(function() {
        var password1 = document.getElementById('userPasswordRegister1').value;
        var password2 = document.getElementById('userPasswordRegister2').value;

        if (password1 != password2) {
            $('#password-check-result').html('Passwords are different!');
        } else if (!password1 && !password2) {
            $('#password-check-result').html('Enter password!');
        } else {
            $('#password-check-result').html('Successful');
            $('#btn-login').hide();
            $('#btn-register').hide();
            $('#btn-personal-page').show();
            $('#btn-exit').show();
            logged = true;
            return logged;
        }
    });

    $('#btn-exit').click(function() {
        $('#btn-login').show();
        $('#btn-register').show();
        $('#btn-personal-page').hide();
        $('#btn-exit').hide();
        logged = false;
        return logged;
    });

    $("#ex2").slider({});



});
