var searchTemplate = _.template(`<div class="row">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-sm-offset-3">
        <div id="imaginary_container">
            <div class="input-group stylish-input-group" id="search-field">
                <input type="text" class="form-control" placeholder="Название отеля, местоположение...">
            </div>
            <div class="settlement-period">
                <label for="in-date">Дата заезда</label>
                <input type="date" class="in-date">
                <label for="out-date">Дата выезда</label>
                <input type="date" class="out-date">
            </div>
            <div class="container">
                <div class="row" id="amounts">
                    <div class="form-group" id="amount-of-rooms" data-width="fit">
                        <label for="filter">Номеров</label>
                        <select class="form-control">
                            <option value="0" selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="4">5</option>
                        </select>
                    </div>
                    <div class="form-group" id="amount-of-stars" data-width="fit">
                        <label for="filter">Звезд</label>
                        <select class="form-control">
                            <option value="0" selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="4">5</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div id="price-slider">
                        <b>€ 10</b>
                        <input id="ex2" type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]"/>
                        <b>€ 1000</b>
                    </div>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-info btn-lg"  id="btn-search">Искать!</button>
                </div>
            </div>
        </div>
    </div>
</div>`);

///////////////////////////////////////////////////////

var userLoginTemplate = _.template(`<button type="button" class="btn btn-info btn-lg" id="btn-personal-page"><span class="glyphicon glyphicon-home"></span> Мой кабинет</button>
<button type="button" class="btn btn-info btn-lg" id="btn-exit"><span class="glyphicon glyphicon-arrow-left"></span> Выйти</button>
<button type="button" class="btn btn-info btn-lg" id="btn-register" data-toggle="modal" data-target="#myModalRegistration"><span class="glyphicon glyphicon-user"></span> Зарегистрироваться</button>
<!-- Modal -->
<div id="myModalRegistration" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <form action="registration_window.php" id="form" enctype="multipart/form-data" method="post">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Добро пожаловать!</h4>
                </div>
                <div class="modal-body">
                    <input name="first_name" type="text" id="nameRegister" class="form-control input-sm chat-input" placeholder="Ваше имя" />
                    </br>
                    <input name="last_name" type="text" id="surnameRegister" class="form-control input-sm chat-input" placeholder="Ваша фамилия" />
                    </br>
                    <input name="email" type="text" id="userEmailRegister" class="form-control input-sm chat-input" placeholder="Email" />
                    </br>
                    <input name="password" type="password" id="userPasswordRegister1" class="form-control input-sm chat-input" placeholder="Пароль" />
                    </br>
                    <input name="repeat password" type="password" id="userPasswordRegister2" class="form-control input-sm chat-input" placeholder="Повторите ввод пароля" />
                    </br>
                    <p id="password-check-result"></p>
                    <div class="avatarPicker">
                        <div class="labelChoice">
                            <label class="control-label">Выберите аватар:</label>
                        </div>
                        <i class="fa fa-user" id="no-avatar-icon" aria-hidden="true"></i>
                        <p>Не больше 1.5мб и размер 250х250</p>
                        <input id="input-1a" type="file" class="file" data-show-preview="false">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-default" id="reg-button">Зарегистрироваться</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
                </div>
            </form>
        </div>

    </div>
</div>


<button type="button" class="btn btn-info btn-lg" id="btn-login" data-toggle="modal" data-target="#myModalSignIn"><span class="glyphicon glyphicon-log-in"></span> Войти</button>
<!-- Modal -->
<div id="myModalSignIn" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <form action="avtorizetion_window.php" id="avtor_form" method="post">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Добро пожаловать!</h4>
            </div>
            <div class="modal-body">
                <input type="text" id="userNameLogin" class="form-control input-sm chat-input" placeholder="Email" />
                </br>
                <input type="password" id="userPasswordLogin" class="form-control input-sm chat-input" placeholder="Пароль" />
                </br>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-default">Войти</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
            </div>
            </form>
        </div>
    </div>
</div>`);
//////////////////////////////////

var footerTemplate = _.template(`<hr />
<div class="row">
    <div class="col-lg-12">
        <ul class="nav nav-pills nav-justified">
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Помощь</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="/">© 2016 BookMeNow! Company</a></li>
        </ul>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <li class="social-networks">
            <a href="https://www.facebook.com/"><i class="fa fa-facebook-square fa-3x social"></i></a>
            <a href="https://vk.com"><i class="fa fa-vk fa-3x social"></i></a>
        </li>
    </div>
</div>
<hr>`);
//////////////////////////////////
var logoTemplate = _.template(`<div class="row">
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!--Лого-->
                <div class="navbar-left glyphicon glyphicon-send" id="logo"></div>
                <div class="navbar-brand" id="site-name">BookMeNow!</div>
            </div>
            <!--Навигация-->
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active" id="main-page"><a href="#">Главная</a></li>
                    <li id="about-us-page"><a href="#">О нас</a></li>
                    <li id="help-page"><a href="#">Помощь</a></li>
                    <li id="contacts-page"><a href="#">Контакты</a></li>
                </ul>
                <!--Авторизация-->
                <ul class="nav navbar-nav navbar-right" id="login-block">
                </ul>
            </div>
        </div>
    </nav>
</div>`);
////////////////////////////////
var teamTemplate = _.template(`<div class="container" id="team-view">
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <div class="col-lg-12">
        <h6 class="description">Наша команда</h6>
        <div class="row pt-md">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 profile">
            <div class="img-box">
              <img src="http://placehold.it/600x700" class="img-responsive" alt="Пуюл">
            </div>
            <h1>Пуюл Владислав</h1>
            <h2>Backend Developer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 profile">
            <div class="img-box">
              <img src="http://placehold.it/600x700" class="img-responsive" alt="Сазонов">
            </div>
            <h1>Сазонов Владислав</h1>
            <h2>Frontend Developer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 profile">
            <div class="img-box">
              <img src="http://placehold.it/600x700" class="img-responsive" alt="Явон">
            </div>
            <h1>Явон Антон</h1>
            <h2>QA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
//////////////////////////////
var adminTemplate = _.template(`<div class="row">
    <div class="col-md-2 sidebar">
        <ul class="nav nav-pills nav-stacked">
            <li><a href="#">Пользователи</a></li>
            <li><a href="#">Отели</a></li>
            <li><a href="#">Номера</a></li>
            <li><a href="#">Заявки</a></li>
        </ul>
    </div>
    <div class="col-md-10 content">
        <div class="panel panel-default">
            <div class="panel-heading">
                Рабочая область
            </div>
            <div class="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
</div>`);
/////////////////////////////
var contactsTemplate = _.template(`<div class="row fluid">
    <div class="col-sm-8">
        <div id="map"></div>
    </div>

    <div class="col-sm-4">
        <h2>BookMeNow! Company</h2>
        <address>
        <strong>BookMeNow</strong><br>
        проспект Гагарина 76<br>
        Днепр<br>
        Днерпопетровская область<br>
        Украина<br>
        <abbr title="Phone">Телефон:</abbr> 2405845
    </address>
    </div>
</div>`);
/////////////////////////////
var helpTemplate = _.template(`<div class="row">
    <div class="col-sm-12">
        <h3>Правила бронирования отелей</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Рекомендации</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="form-area">
            <form role="form">
                <br style="clear:both">
                <h3 style="margin-bottom: 25px; text-align: center;">Есть вопросы? Задайте их нам!</h3>
                <div class="form-group">
                    <input type="text" class="form-control" id="name" name="name" placeholder="Имя" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Мобильный телефон" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Тема" required>
                </div>
                <div class="form-group">
                    <textarea class="form-control" type="textarea" id="message" placeholder="Сообщение" maxlength="140" rows="7"></textarea>
                    <span class="help-block"><p id="characterLeft" class="help-block ">Лимит исчерпан!</p></span>
                </div>

                <button type="button" id="btn-submit" name="submit" class="btn btn-primary pull-right">Отправить</button>
            </form>
        </div>
    </div>
</div>`);
/////////////////////////////
var hotelTemplate = _.template(`<div class="row" id="hotel-viewer">
        <div class="col-sm-4">
            <h1>Hotel_Name</h1>
            <div class="carousel slide article-slide" id="article-photo-carousel">

                <!-- Wrapper for slides -->
                <div class="carousel-inner cont-slider">

                    <div class="item active">
                        <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                    </div>
                    <div class="item">
                        <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                    </div>
                    <div class="item">
                        <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                    </div>
                    <div class="item">
                        <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                    </div>
                </div>
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li class="active" data-slide-to="0" data-target="#article-photo-carousel">
                        <img class="img-responsive" alt="" src="http://placehold.it/250x180" width="54" height="100">
                    </li>
                    <li class="" data-slide-to="1" data-target="#article-photo-carousel" width="54" height="100">
                        <img class="img-responsive" alt="" src="http://placehold.it/250x180">
                    </li>
                    <li class="" data-slide-to="2" data-target="#article-photo-carousel" width="54" height="100">
                        <img class="img-responsive" alt="" src="http://placehold.it/250x180">
                    </li>
                    <li class="" data-slide-to="3" data-target="#article-photo-carousel" width="54" height="100">
                        <img class="img-responsive" alt="" src="http://placehold.it/250x180">
                    </li>
                </ol>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="hotel-description">
                <p>Количество звезд</p>
                <p>Цена от: 100$</p>
                <p>Список доступных номеров:</p>
                <h3>Описание:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <button type="button" class="btn btn-primary" id="btn-proceed-to-rooms">Перейти к выбору номеров</button>
        </div>
    </div>`);
////////////////////////////////
var personalPageTemplate = _.template(`<div class="container" id="personal-page-viewer">
    <div class="row">
        <div class="col-sm-6 col-md-4">
            <img src="http://placehold.it/360x200" class="img-responsive" alt="User">
        </div>
        <div class="col-sm-6 col-md-8">
            <div class="row">
                <div class="col-sm-4">
                    <p>Имя пользователя</p>
                </div>
                <div class="col-sm-8 ">

                </div>

            </div>

        </div>
    </div>
    <div class="container">

    </div>
    <div class="row archieve-settings">
        <div class="col-sm-6 col-md-4">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-4 col-md-4">
                            <label class="control-label" for="textinput">Изменить Email:</label>
                        </div>
                        <div class="col-sm-8 col-md-8">
                            <input id="textinput" name="textinput" type="text" placeholder="Ваш новый Email" class="form-control input-md">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <label class="control-label" for="textinput">Новый пароль:</label>
                        </div>
                        <div class="col-sm-8">
                            <input id="textinput" name="textinput" type="text" placeholder="Ваш новый пароль" class="form-control input-md">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <label class="control-label" for="textinput">Повторите пароль:</label>
                        </div>
                        <div class="col-sm-8">
                            <input id="textinput" name="textinput" type="text" placeholder="Повторите пароль" class="form-control input-md">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <label class="control-label" for="textinput">Выберите аватар:</label>
                        </div>
                        <div class="col-sm-8">
                            <input id="input-1a" type="file" class="file" data-show-preview="false">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <button type="button" class="btn btn-primary" id="accept-settings-changes">Применить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-8">
            <div class="form-group">
                <label for="comment">История бронирований:</label>
                <textarea class="form-control" rows="5" id="archieve-booking"></textarea>
            </div>
        </div>
    </div>
</div>`);
/////////////////////////////
var roomTemplate = _.template(`<div class="row" id="rooms-viewer">
    <div class="col-sm-4">
        <h1>Ваш номер</h1>
        <div class="carousel slide article-slide" id="article-photo-carousel">

            <!-- Wrapper for slides -->
            <div class="carousel-inner cont-slider">

                <div class="item active">
                    <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                </div>
                <div class="item">
                    <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                </div>
                <div class="item">
                    <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                </div>
                <div class="item">
                    <img class="img-responsive" alt="" title="" src="http://placehold.it/200x300" width="350" height="450">
                </div>
            </div>
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#article-photo-carousel">
                    <img class="img-responsive" alt="" src="http://placehold.it/250x180" width="54" height="100">
                </li>
                <li class="" data-slide-to="1" data-target="#article-photo-carousel" width="54" height="100">
                    <img class="img-responsive" alt="" src="http://placehold.it/250x180">
                </li>
                <li class="" data-slide-to="2" data-target="#article-photo-carousel" width="54" height="100">
                    <img class="img-responsive" alt="" src="http://placehold.it/250x180">
                </li>
                <li class="" data-slide-to="3" data-target="#article-photo-carousel" width="54" height="100">
                    <img class="img-responsive" alt="" src="http://placehold.it/250x180">
                </li>
            </ol>
        </div>
    </div>
    <div class="col-sm-8">
        <div class="hotel-description">
            <p>Тип номера</p>
            <p>Цена: 100$</p>
            <h3>Описание:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button type="button" class="btn btn-primary" id="btn-proceed-to-rooms" data-toggle="modal" data-target="#booking-modal">Перейти к бронированию</button>
        <!-- Modal -->
        <div id="booking-modal" class="modal fade" role="dialog">
            <div class="modal-dialog modal-sm">

                <!-- Modal content-->
                <div class="modal-content">
                    <form action="booking-action.php" id="booking-form" method="post">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3>Бронирование</h3>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="sel1">Хочу жить в:</label>
                                    <select class="form-control" id="sel1">
                                        <option>Люксе</option>
                                        <option>Стандарте</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <label for="sel1">Расплачиваюсь:</label>
                                    <select class="form-control" id="sel1">
                                        <option>Visa</option>
                                        <option>Mastercard</option>
                                    </select>
                                </div>
                            </div>
                            </br>

                            <div class="row">
                                <div class="col-sm-12">
                                    <label for="in-date">Приезжаю:</label>
                                    <input type="date" class="in-date">
                                </div>
                            </div>
                            </br>

                            <div class="row">
                                <div class="col-sm-12">
                                    <label for="out-date">Уезжаю:</label>
                                    <input type="date" class="out-date">
                                </div>
                            </div>
                        </br>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="sum">
                                        <h4>Итого: 400$</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-default" id="book-button">Забронировать</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>`);
///////////////////////////////
var searchResultTemplate = _.template(`<div class="row" id="row-top-offers">

</div>
<div class="container">
    <div class="row" id="pages">
        <ul class="pagination pagination-sm" id="pages-counter"></ul>
    </div>
</div>`);
////////////////////////////////
var successfulBookTemplate = _.template(`<div class="container" id="successful-book-viewer">
    <div class="row">
        <div class="col-sm-12">
            <div class="book-holder">
                <h2>Вы успешно забронировали номер!</h2>
                <button type="button" class="btn btn-info btn-lg" id="btn-book-more"><span class="glyphicon glyphicon-plus-sign"></span> Забронировать еще!</button>
            </div>
        </div>
    </div>
</div>`);
///////////////////////////////
var taskTemplate = _.template(`<li class="task">
<p contenteditable="true"><%= name %></p></li>
<button class="btn btn-primary edit">Edit</button>
<button type="button" class="btn btn-default delete">Edit</button>`);
