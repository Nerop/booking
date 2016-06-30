$(document).ready(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "registration_window.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Ajax help");
        });
        return false;
    });
});
