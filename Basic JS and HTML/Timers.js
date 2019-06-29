
var n = prompt(),
    n2 = prompt();

function test(msg) {
    alert(msg + " is my age.");
}

setTimeout(function () {
    test(n);
}, 1000);

var count = 0;
function test2(msg2) {
    alert(msg2 + " is not my age.");
    count++;
    if (count == 3)
        clearInterval(intervalID);
}

var intervalID = setInterval(function () {
    test2(n2);
}, 2000);
