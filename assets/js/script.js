// Check off items by clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('clicked');
});

// Deleting items when clicking 'x'
$('ul').on('click', '.delete', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function (event) {
    // If user hits enter
    if (event.which === 13) {
        // saves what user typed into item
        let item = $(this).val();
        // sets input to blank
        $(this).val('');
        // creats li to add to ul
        $('ul').append('<li><span class="delete">X</span> ' + item + '</li>');
    }
});