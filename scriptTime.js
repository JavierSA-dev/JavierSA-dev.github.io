const d = new Date(Date.now());
$('.divTime').text(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())

setInterval(function () {
    const d = new Date(Date.now());

    $('.divTime').text(d.getHours() + ":" + d.getMinutes()  + ":" + d.getSeconds())
}, 1000); 
    

   