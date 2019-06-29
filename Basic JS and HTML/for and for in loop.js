// for loop
var n = prompt("Enter array size: ");
var ar = [];

for (var i = 0; i < n; i++) {
    if(i==0)
        ar[i] = prompt("Enter 1st element: ");
    else if (i == 1)
        ar[i] = prompt("Enter 2nd element: ");
    else if (i == 2)
        ar[i] = prompt("Enter 3rd element: ");
    else if (i > 2)
        ar[i] = prompt("Enter " + (i+1) + "th element: ");
}

for (var i = 0; i < n; i++) {
    alert(ar[i] + " ");
}

// for in loop
var obj = {
    n1: 'Redwan',
    n2: 'Sharafat',
    n3: 'Kabir'
};
for (var j in obj) {
    alert(obj[j]);
}
