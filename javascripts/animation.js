$(document).ready(function () {
// смена веток
$(".vetka1").click(function() {
    $(".vetka1").addClass("none");
    $(".vetka2").removeClass("none");
});
$(".vetka3").click(function() {
    $(".vetka3").addClass("none");
    $(".vetka4").removeClass("none");
});
$(".vetka5").click(function() {
    $(".vetka5").addClass("none");
    $(".vetka6").removeClass("none");
});
$(".vetka7").click(function() {
    $(".vetka7").addClass("none");
    $(".vetka8").removeClass("none");
});
$(".vetka9").click(function() {
    $(".vetka9").addClass("none");
    $(".vetka10").removeClass("none");
});
$(".vetka11").click(function() {
    $(".vetka11").addClass("none");
    $(".vetka12").removeClass("none");
});
$(".vetka13").click(function() {
    $(".vetka13").addClass("none");
    $(".vetka14").removeClass("none");
});
$(".vetka15").click(function() {
    $(".vetka15").addClass("none");
    $(".vetka16").removeClass("none");
});
$(".vetka17").click(function() {
    $(".vetka17").addClass("none");
    $(".vetka18").removeClass("none");
});

// смена ёлок
$(".drevo1").click(function() {
    $(".drevo1").addClass("none");
    $(".drevo2").removeClass("none");
});
$(".drevo3").click(function() {
    $(".drevo3").addClass("none");
    $(".drevo4").removeClass("none");
});
$(".drevo5").click(function() {
    $(".drevo5").addClass("none");
    $(".drevo6").removeClass("none");
});
$(".drevo7").click(function() {
    $(".drevo7").addClass("none");
    $(".drevo8").removeClass("none");
});


// смена кнопок и экрана
$(".nach").click(function() {
    $(".nach").addClass("none");
    $(".pravilo").removeClass("none");
});
$(".pravilo").click(function() {
    $(".pravilo").addClass("none");
    $(".game").removeClass("none");
});
$(".game").click(function() {
    $(".game").addClass("none");
    $(".block1").addClass("none");
    $(".block2").removeClass("none");
});
$(".dom1").click(function() {
    $(".dom1").addClass("none");
    $(".block2").addClass("none");
    $(".block3").addClass("none");
    $(".block1").removeClass("none");
});
$(".povtor").click(function() {
    $(".povtor").addClass("none");
    $(".block1").addClass("none");
    $(".block3").addClass("none");
    $(".block2").removeClass("none");
    $(".povtor").removeClass("none");
});
$(".ber").click(function() {
    $(".ber").addClass("none");
    $(".block4").addClass("none");
    $(".block3").addClass("none");
    $(".block4").addClass("none");
    $(".block1").removeClass("none");
});
$(".snova").click(function() {
    $(".snova").addClass("none");
    $(".block4").addClass("none");
    $(".block3").addClass("none");
    $(".block1").addClass("none");
    $(".block2").removeClass("none");
    $(".snova").removeClass("none");
});

$(".ber").click(function(){
    location.reload()
});
$(".dom1").click(function(){
    location.reload()
});
$(".pro").click(function() {
    $(".pro").addClass("none");
    $(".povorot").addClass("none");
});




// ИГРА
const hero = document.getElementById("hero");
const mooh = document.getElementById("mooh");
const golb = document.getElementById("golb");
const koch = document.getElementById("koch");
const moh = document.getElementById("moh");
const nart = document.getElementById("nart");
const grib = document.getElementById("grib");
const koch2 = document.getElementById("koch2");
const moh2 = document.getElementById("moh2");
const golb2 = document.getElementById("golb2");
const rosa = document.getElementById("rosa");
const koch3 = document.getElementById("koch3");
const pen = document.getElementById("pen");
const mooh2 = document.getElementById("mooh2");
const golb3 = document.getElementById("golb3");
const rosa2 = document.getElementById("rosa2");
const fin = document.getElementById("fin");

document.addEventListener("click", function(event) {
    jump();
});
// прыжки по клику

function jump () {
    if (hero.classList != "jump") {
        hero.classList.add("jump")
    }
    setTimeout( function() {
        hero.classList.remove("jump")
    }, 300)
};

// препятствия

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var moohLeft = parseInt(window.getComputedStyle(mooh).getPropertyValue("left"));

    if (moohLeft < 417 && moohLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var golbLeft = parseInt(window.getComputedStyle(golb).getPropertyValue("left"));

    if (golbLeft < 417 && golbLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var kochLeft = parseInt(window.getComputedStyle(koch).getPropertyValue("left"));

    if (kochLeft < 417 && kochLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var mohLeft = parseInt(window.getComputedStyle(moh).getPropertyValue("left"));

    if (mohLeft < 417 && mohLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var nartLeft = parseInt(window.getComputedStyle(nart).getPropertyValue("left"));

    if (nartLeft < 417 && nartLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var gribLeft = parseInt(window.getComputedStyle(grib).getPropertyValue("left"));

    if (gribLeft < 417 && gribLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var koch2Left = parseInt(window.getComputedStyle(koch2).getPropertyValue("left"));

    if (koch2Left < 417 && koch2Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var moh2Left = parseInt(window.getComputedStyle(moh2).getPropertyValue("left"));

    if (moh2Left < 417 && moh2Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var golb2Left = parseInt(window.getComputedStyle(golb2).getPropertyValue("left"));

    if (golb2Left < 417 && golb2Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var rosaLeft = parseInt(window.getComputedStyle(rosa).getPropertyValue("left"));

    if (rosaLeft < 417 && rosaLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var koch3Left = parseInt(window.getComputedStyle(koch3).getPropertyValue("left"));

    if (koch3Left < 417 && koch3Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var penLeft = parseInt(window.getComputedStyle(pen).getPropertyValue("left"));

    if (penLeft < 417 && penLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var mooh2Left = parseInt(window.getComputedStyle(mooh2).getPropertyValue("left"));

    if (mooh2Left < 417 && mooh2Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var golb3Left = parseInt(window.getComputedStyle(golb3).getPropertyValue("left"));

    if (golb3Left < 417 && golb3Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var rosa2Left = parseInt(window.getComputedStyle(rosa2).getPropertyValue("left"));

    if (rosa2Left < 417 && rosa2Left > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block4").removeClass("none");
    }
}, 10);

var isAlive = setInterval ( function() {
    var heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var finLeft = parseInt(window.getComputedStyle(fin).getPropertyValue("left"));

    if (finLeft < 417 && finLeft > 0  && heroTop >= 170) {
        $(".block2").addClass("none");
        $(".block3").removeClass("none");
    }
}, 10);






})