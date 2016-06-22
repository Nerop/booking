$(function() {
    var logged = false;
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
});
