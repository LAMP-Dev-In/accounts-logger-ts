"use strict";
var logDetails = function (uid, item) {
    console.log("This " + item + " has a uid " + uid);
};
logDetails(34, 'Pen');
var greet = function (user) {
    console.log(user.name + " has uid " + user.uid + " & says hello");
};
greet({ name: 'gtm', uid: 'KD12MO' });
var greetAgain = function (user) {
    console.log(user.name + " has uid " + user.uid + " & greet again hello");
};
greetAgain({ name: 'Kuchiku', uid: '123POK' });
