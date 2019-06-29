!function () {

    var test = prompt("Enter your string : ");
    var x = prompt("Enter your letter, of which you want to know the index number ? ");

    alert(test.length + " " + test.split(' '));

    //var i = 0;
    //while (i < test.length) {
    alert('Your letter remains in ' + test.indexOf(x, 1) + ' number index.'); // x লেটার টির দ্বিতীয় অবস্থান প্রিন্ট করবে ।
    //    i++;
    //}
    alert(test.toUpperCase());
    alert(test.toLowerCase());

    var n = prompt("From which index to end do you want to see ? ");
    alert(test.substring(n)); // n তম পদ থেকে শেষ পর্যন্ত প্রিন্ট করে দেখাবে ।
    alert(test.substring(n, test.length)); // n তম পদ থেকে শেষ পর্যন্ত প্রিন্ট করে দেখাবে ।
    //var m = n + 2;
    alert(test.substring(n, 6)); // n তম পদ থেকে 5 তম পদ পর্যন্ত প্রিন্ট করার কথা, কিন্তু আউটপুট সঠিক না দেয়ায় কনফিউসড

    alert(test.slice(n)); // substring() এর মত কাজ করবে ।
    alert(test.slice(-n)); // লাস্ট থেকে n তম পদ পর্যন্ত প্রিন্ট করবে ।

    alert(test.trim()); // string এর আগের ও পরের স্পেস বাদ দিয়ে প্রিন্ট করবে ।
}();
