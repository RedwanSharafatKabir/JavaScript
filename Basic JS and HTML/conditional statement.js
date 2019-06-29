
!function () {
    'use strict';    /* "use strict" is used to make the variables in strict mood &
                         it will show an error for the undeclared variables. */
    if (true === false) {
        console.log('We can not see this.');
    }
    else {
        console.log('We can see this.');
    }

    var array = ['item1'];
    if (array.length) {
        console.log(array[0]);
    }
    /* true or 1  */
    /* false or 0 */
    (0) ? console.log('This is a ternary value.') : console.log('This is a false value.');
}();
