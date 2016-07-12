$(document).ready(function(){
    $('#characterLeft').text('Осталось 140 символов');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Вы исчерпали лимит');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' осталось символов');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});
