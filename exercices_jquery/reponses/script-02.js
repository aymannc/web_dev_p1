
$(".box").each(function (index) {
    $(this).delay(100 * index).animate({
        height: '0px',
        width: '0px'
    });
});
$(".box").each(function (index) {
    $(this).animate({
        height: '100px',
        width: '100px'
    });
});