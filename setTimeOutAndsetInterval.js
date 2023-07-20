
//tek bir sefer çalışır zaman diliminde
setTimeout(function() {
    console.log("setTimeout çalıştı");
}, 2000);

//belirli zamandan sonra çalışır sonsuza kadar kapanır tekrar çalışır.
setInterval( function()  {
    console.log("setInterval çalıştı");
}, 3000);

