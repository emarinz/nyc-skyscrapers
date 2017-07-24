/*global $*/
$(document).ready(function () {
$('#slide').click(function () {
        $('.slide-box').effect('slide', 
        {direction: 'down'}, 'slow')
    });
});