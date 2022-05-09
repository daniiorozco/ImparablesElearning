$(() => {
    $("h1").slideUp("slow", function () {
    $("h2").fadeIn(3000);
    }).slideDown(1000);
});