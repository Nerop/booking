$(document).ready(function() {
    var logged = false;
    var jqxhr = $.getJSON( "top8-hotels.json", function() {
      console.log(jqxhr);
    });
    var jsonTop8 = [{
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
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale6',
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
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale6',
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
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale6',
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
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale6',
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
    {
      'img':'http://placehold.it/300x240',
      'hotelName': 'Belle Royale6',
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
    }
  ];
    var amountOfPages;

    //loading top 8 hotels
    function loadHotelsSearch() {
        for (var i = 0; i < 16; i++) {
                var div = '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">' + '<div class="thumbnail">' + '<img src=' + jsonTop8[i].img + ' ' + 'alt="">' + '<div class="caption" id=topHotel' + i + '>' + '<h3><a href="#">' + jsonTop8[i].hotelName + "</a></h3>" + "<p>" + jsonTop8[i].description + "</p>" + "<p>" + jsonTop8[i].stars + "</p>" + "<p>" + jsonTop8[i].price + "</p>" + '</div>' + '</div>' + '</div>';
                $('#row-top-offers').append(div);
            }
    }
    //loadHotelsSearch();

    function countPages() {
        var left = jsonTop8.length % 16;
        if (left !== 0) {
            amountOfPages = Math.floor(jsonTop8.length / 16 + 1);
        }
        else {
            amountOfPages = jsonTop8.length / 16;
        }
        for (var i = 0; i < amountOfPages; i++) {
            var div = '<li><a href="#">'+ Number(i+1) +'</a></li>';
            $('#pages-counter').append(div);
        }
    }
    countPages();
});
