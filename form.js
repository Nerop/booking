$(document).ready(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "form_registr.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Ajax help");
        });
        return false;
    });
});
