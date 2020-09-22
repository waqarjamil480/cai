$(".year-ranges li").click(function() {
    $(".year-ranges li").removeClass("active");
    $(this).addClass("active");
});

$(function() {
    $(".cus-btn-group .btn").click(function() {
        $(".cus-btn-group .btn").removeClass("active");
        $(this).addClass("active");
    });
});