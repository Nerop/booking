$(document).ready(function() {
    var logged = false;
    var jqxhr = $.getJSON("top8-hotels.json", function() {
        console.log(jqxhr);
    });
    var jsonTop8 = [{
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Rixos',
        'description': 'The best hotel in the world',
        'stars': '*****',
        'price': '400$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale1',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale2',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale3',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale4',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale5',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }, {
        'img': 'http://placehold.it/300x240',
        'hotelName': 'Belle Royale6',
        'description': 'The second best hotel in the world',
        'stars': '*****',
        'price': '500$'
    }];
    var hotelContent;

    function initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 48.429135,
                lng: 35.038124
            },
            zoom: 18
        });
    }
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

    $('#main-page').click(function() {
        /*$('#topOffers').show();
        $('#mainView').html(logoTemplate);
        $("#search").html(searchTemplate);
        $('#login-block').html(userLoginTemplate);
        $('.footer').html(footerTemplate);*/
    });

    $('#about-us-page').click(function() {
        $('#search').html(teamTemplate);
        $('#topOffers').hide();
    });

    $('#help-page').click(function() {
        $('#search').html(helpTemplate);
        $('#topOffers').hide();
    });

    $('#contacts-page').click(function() {
        $('#search').html(contactsTemplate);
        initMap();
        $('#topOffers').hide();
    });

    //REGISTRATION FORM'S FIELDS CHECK
    var password1 = document.getElementById('userPasswordRegister1').value;
    var password2 = document.getElementById('userPasswordRegister2').value;
    var userName = document.getElementById('nameRegister').value;
    var userSurname = document.getElementById('surnameRegister').value;
    var userEmail = document.getElementById('userEmailRegister').value;
    var errorString = '';
    var reLetters = /^[а-яА-Я]+$/;
    var reEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var nameRegisterSuccess = false;
    var surnameRegisterSuccess = false;
    var userEmailRegisterSuccess = false;
    var userPasswordRegister1Success = false;
    var userPasswordRegister2Success = false;

    $('#nameRegister').focusout(function() {
        if ($('#nameRegister').val() !== '' && reLetters.test($('#nameRegister').val()) && $('#nameRegister').val().length > 2) {
            $('#nameRegister').removeClass('not-valid');
            nameRegisterSuccess = true;
        }
    });
    $('#surnameRegister').focusout(function() {
        if ($('#surnameRegister').val() !== '' && reLetters.test($('#surnameRegister').val()) && $('#surnameRegister').val().length > 2) {
            $('#surnameRegister').removeClass('not-valid');
            surnameRegisterSuccess = true;
        }
    });
    $('#userEmailRegister').focusout(function() {
        if ($('#userEmailRegister').val() !== '' && reEmail.test($('#userEmailRegister').val()) && userEmail.length < 5) {
            $('#userEmailRegister').removeClass('not-valid');
            userEmailRegisterSuccess = true;
        }
    });
    $('#userPasswordRegister1').focusout(function() {
        var userPasswordRegister1Length = $('#userPasswordRegister1').val().length;
        if (userPasswordRegister1Length > 3) {
            $('#userPasswordRegister1').removeClass('not-valid');
            userPasswordRegister1Success = true;
        }
    });
    $('#userPasswordRegister2').focusout(function() {
        if (password1 === password2) {
            $('#userPasswordRegister2').removeClass('not-valid');
            userPasswordRegister2Success = true;
        }
    });

    $('#reg-button').click(function() {
        $('#regForm').on('submit', function(event) {
            if (nameRegisterSuccess === true && surnameRegisterSuccess === true && userEmailRegisterSuccess === true && userPasswordRegister1Success === true && userPasswordRegister2Success === true) {
                $('#btn-login').hide();
                $('#btn-register').hide();
                $('#btn-personal-page').show();
                $('#btn-exit').show();
                logged = true;
                return logged;
            } else if (nameRegisterSuccess === false || surnameRegisterSuccess === false || userEmailRegisterSuccess === false || userPasswordRegister1Success === false || userPasswordRegister2Success === false){
                event.preventDefault();
            }
        });
    });
    // END OF REGISTRATION FORM'S FIELDS CHECKS

    //LOGIN FORM'S FIELDS CHECKS
    var userNameLoginSuccess = false;
    var userPasswordLoginSuccess = false;


    $('#userNameLogin').focusout(function() {
        if ($('#userNameLogin').val() !== '' && reEmail.test($('#userNameLogin').val()) && $('#userNameLogin').length < 5) {
            $('#userNameLogin').removeClass('not-valid');
            userNameLoginSuccess = true;
        }
    });
    $('#userPasswordLogin').focusout(function() {
        var userPasswordLoginLength = $('#userPasswordLogin').val().length;
        if (userPasswordLoginLength > 3) {
            $('#userPasswordLogin').removeClass('not-valid');
            userPasswordLoginSuccess = true;
        }
    });
    $('#login-button').click(function() {
        $('#avtor_form').on('submit', function(event) {
            if (userNameLoginSuccess === true && userPasswordLoginSuccess === true) {
                logged = true;
                return logged;
            } else if (userNameLoginSuccess === false || userPasswordLoginSuccess === false){
                event.preventDefault();
            }
        });
    });
    //END OF LOGIN FORM'S FIELDS CHECKS

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
