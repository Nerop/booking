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
    var hotelContent;

    //loading top 8 hotels
    function loadTopHotels() {
        for (var i = 0; i < 8; i++) {
                var div = '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">' + '<div class="thumbnail">' + '<img src=' + jsonTop8[i].img + ' ' + 'alt="">' + '<div class="caption" id=topHotel' + i + '>' + '<h3><a href="#">' + jsonTop8[i].hotelName + "</a></h3>" + "<p>" + jsonTop8[i].description + "</p>" + "<p>" + jsonTop8[i].stars + "</p>" + "<p>" + jsonTop8[i].price + "</p>" + '</div>' + '</div>' + '</div>';
                $('#row-top-offers').append(div);
            }
    }
    loadTopHotels();
    $("#search").html(searchTemplate);
    $('#mainView').html(logoTemplate);
    $('#login-block').html(userLoginTemplate);
    $('.footer').html(footerTemplate);
    $('#btn-personal-page').hide();
    $('#btn-exit').hide();

    $('#reg-button').click(function() {
        var password1 = document.getElementById('userPasswordRegister1').value;
        var password2 = document.getElementById('userPasswordRegister2').value;
        var userName = document.getElementById('nameRegister').value;
        var userSurname = document.getElementById('surnameRegister').value;
        var userEmail = document.getElementById('userEmailRegister').value;
        var errorString = '';
        var reLetters = /^[а-яА-Я]+$/;
        var reEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(userName === ''){
            errorString += 'Поле имени не может быть пустым! ';
        }
        if(!reLetters.test(userName)){
            errorString += 'Имя может состоять только из букв!';
        }
        if(userName.length < 2){
            errorString += 'Слишком короткое имя!';
        }
        if(userSurname === ''){
            errorString += 'Поле фамилии не может быть пустым! ';
        }
        if(!reLetters.test(userSurname)){
            errorString += 'Фамилия может состоять только из букв!';
        }
        if(userName.length < 2){
            errorString += 'Слишком короткая фамилия!';
        }
        if(userEmail === ''){
            errorString += 'Поле email не может быть пустым!';
        }
        if(!reEmail.test(userEmail)){
            errorString += 'Email не является валидным!';
        }
        if (userEmail.length < 5){
            errorString += 'Email должен быть длиннее 5 символов! ';
        }
        if (password1.length < 3){
            errorString += 'Пароль должен быть длиннее 3х символов! ';
        }
        if (!password1 && !password2) {
            errorString += 'Введите пароль! ';
        }
        if (password1 != password2) {
            errorString += 'Пароли не совпадают! ';
        }
        else if(errorString === '') {
            errorString += 'Successful';
            $('#btn-login').hide();
            $('#btn-register').hide();
            $('#btn-personal-page').show();
            $('#btn-exit').show();
            logged = true;
            return logged;
        }
        //$('#password-check-result').html(errorString);
        alert(errorString);
    });

    $('#btn-exit').click(function() {
        $('#btn-login').show();
        $('#btn-register').show();
        $('#btn-personal-page').hide();
        $('#btn-exit').hide();
        logged = false;
        return logged;
    });

    $('#btn-search').click(function() {
        $('#search').hide();
        for (var i = 0; i < 8; i++) {
                var div = '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">' + '<div class="thumbnail">' + '<img src=' + jsonTop8[i].img + ' ' + 'alt="">' + '<div class="caption" id=topHotel' + i + '>' + '<h3><a href="#">' + jsonTop8[i].hotelName + "</a></h3>" + "<p>" + jsonTop8[i].description + "</p>" + "<p>" + jsonTop8[i].stars + "</p>" + "<p>" + jsonTop8[i].price + "</p>" + '</div>' + '</div>' + '</div>';
                $('#row-top-offers').append(div);
            }
    });

    $("#ex2").slider({});



});
