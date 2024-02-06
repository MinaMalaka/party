let side = document.getElementById('side')
let open = document.getElementById('open')
$('#open').click(() => {
    $('#open').css('left', '21%')
    $('#side').css({ 'width': '300px', 'padding': '70px 30px' })

})
$('#close').click(() => {
    $('#open').css('left', '1%')
    $('#side').css({ 'width': '0px', 'padding': '0' })

})
$('#first-singer').click(function () {
    $('#para-1').slideToggle(500);
    $('#para-2,#para-3,#para-4').slideUp(500);

});
$('#second-singer').click(function () {
    $('#para-2').slideToggle(500);
    $('#para-1,#para-3,#para-4').slideUp(500);


});
$('#third-singer').click(function () {
    $('#para-3').slideToggle(500);
    $('#para-2,#para-1,#para-4').slideUp(500);


});
$('#fourth-singer').click(function () {
    $('#para-4').slideToggle(500);
    $('#para-2,#para-3,#para-1').slideUp(500);


});


function count() {
    let event = new Date('10 october 2021')
    let eventMs = event.getTime()
    let eventS = eventMs / 1000
    let eventM = eventS / 60
    let eventH = eventM / 60
    let eventDays = eventH / 24
    let eNow = new Date()
    let eMs = eNow.getTime()
    let eS = eMs / 1000
    let eM = eS / 60
    let eH = eM / 60
    let eDays = eH / 24
    let daysCount = Math.floor(eventDays - eDays)
    let hoursCount = Math.floor(((eventH - eH) - (daysCount * 24)))
    let minCount = Math.floor((eventM - eM) - (daysCount * 24 * 60) - (hoursCount * 60))
    let secondsCount = Math.floor(((eventS - eS) - (daysCount * 24 * 60 * 60)) - (hoursCount * 60 * 60) - (minCount * 60))
    $('#days').html(daysCount)
    $('#hours').html(hoursCount)
    $('#mins').html(minCount)
    $('#seconds').html(secondsCount)
}
window.onload = () => {
    setInterval(count, 1000)
}
$('#message').keyup(function () {
    let msgLen = $(this).val().length
    if (msgLen > 100) {
        $('#count').html('your available character finished')
    } else {
        $('#count').html(100 - msgLen)
    }
}
)
