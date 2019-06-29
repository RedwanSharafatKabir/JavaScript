
var n1 = prompt("What is your name ?");
var n2 = prompt("Enter password :");
var n3 = prompt("Enter your favourite color :");

function func1(n) {
    var name = {
        munna: '\nRedwan Sharafat Kabir'
    };
    return name[n] || "\nPlease enter a valid username";
}
function func2(p) {
    var pass = {
        valo: '\nID: 171-15-8737'
    }
    return pass[p] || "\nInvalid password.";
}
var func3 = function func3(c) {
    var colors = {
        green: '\nSection- D'
    };
    return colors[c] || "\nInvalid Color.\nCan't remember your favourite choice ?";
}

alert(func1(n1) + func2(n2) + func3(n3) );
