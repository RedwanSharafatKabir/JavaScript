var ar = [];
var ar2 = [10, 20, 35, 65, 911, 1, 0, 901];
var ar3 = ['a','b','c','d'];
var n = prompt("Enter array size: ");

for (i = 0; i < n; i++) {
    ar[i] = prompt("Enter array elements: ");
}

ar.push('last');  // array.push(value) ফাংশনটি array এর শেষে এলিমেন্ট যোগ করে
ar.unshift('0');  // array.unshift(value) ফাংশনটি array এর শুরুতে এলিমেন্ট যোগ করে
ar.pop(); // array.pop() মেথড টি array এর লাস্ট এলিমেন্ট ডিলিট করবে
ar.shift(); // array.shift() মেথড array এর ইনডেক্স এক ঘর আগে নিবে
ar.splice(0, 2); // 0 থেকে 2 পর্যন্ত 2 টি এলিমেন্ট ডিলিট হবে 
ar.splice(1, 4, 'A', 'B', 'C', 'D'); // 1 থেকে 4 পর্যন্ত 4 টি এলিমেন্ট এ A,B,C,D রিপ্লেস হবে
ar.reverse(); // array কে রিভার্স করবে 
ar.sort(); // array কে সর্ট করবে ( প্রথমে 0 থেকে 9 এরপর A থেকে Z অনুসারে )

for (i = 0; i < ar.length; i++) {
    alert(ar[i]);
}

// ascending or descending order এ অ্যাকুরেট শো করবে 
ar2.sort(function (a, b) {
    if (a < b)
        return -1;
    else if (a === b)
        return 0;
    else
        return 1;
});
alert(ar2);

// join() function array কে string এ প্রিন্ট করে
console.log(ar3);
console.log(ar3.join());
console.log(ar3.join(''));

// indexOf() function টি array element এর ইন্ডেক্স প্রিন্ট করে
console.log(ar3.indexOf('d'));

// slice() function টি index 0 থেকে selected element পর্যন্ত ডিলিট করে
console.log(ar3.slice(2));
console.log(ar3.slice(-2)); // - sign দিলে শেষ থেকে তত সংখ্যক পর্যন্ত element exist থাকবে
