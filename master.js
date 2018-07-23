$(".step1, .step3").submit(function (e) {
    e.preventDefault();
});

function toggle(el, el2) {
    $(el).removeClass("is-active");
    $(el2).addClass("is-active");
}

$('#bonusCheck').change(function() {
    $('#bonusCode').fadeToggle();
});