const count = document.querySelector('#reg-slots')

$(document).ready(function () {
    $("#circles").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    startCount()
})

function startCount() {
    setInterval(() => {
        count.textContent = +Math.floor(Math.random() * 5) + 1
    }, 7000)
}