/*Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

The first name will come from the month, and the last name will come from the last digit of the date:

Month -> first name

January -> "The Evil"
February -> "The Vile"
March -> "The Cruel"
April -> "The Trashy"
May -> "The Despicable"
June -> "The Embarrassing"
July -> "The Disreputable"
August -> "The Atrocious"
September -> "The Twirling"
October -> "The Orange"
November -> "The Terrifying"
December -> "The Awkward"
Last digit of date -> last name

0 -> "Mustache"
1 -> "Pickle"
2 -> "Hood Ornament"
3 -> "Raisin"
4 -> "Recycling Bin"
5 -> "Potato"
6 -> "Tomato"
7 -> "House Cat"
8 -> "Teaspoon"
9 -> "Laundry Basket"
The returned value should be a string in the form of "First Name Last Name".

For example, a birthday of November 18 would return "The Terrifying Teaspoon"*/

function getVillainName(birthday) {
    const m = { "January": "Evil", "February": "Vile", "March": "Cruel", "April": "Trashy", "May": "Despicable", "June": "Embarrassing", "July": "Disreputable", "August": "Atrocious", "September": "Twirling", "October": "Orange", "November": "Terrifying", "December": "Awkward" };
    const d = { '0': "Mustache", '1': "Pickle", '2': "Hood Ornament", '3': "Raisin", '4': "Recycling Bin", '5': "Potato", '6': "Tomato", '7': "House Cat", '8': "Teaspoon", '9': "Laundry Basket" };
    let villainName = 'The ';
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    birthday = monthNames[birthday.getMonth()] + ' ' + birthday.getUTCDate();

    birthday = birthday.split(' ');

    if (m[birthday[0]]) {
        villainName += m[birthday[0]];
    }

    const lastCharOfDay = birthday[1][birthday[1].length - 1];
    
    if (d[lastCharOfDay]) {
        villainName += ' ' + d[lastCharOfDay];
    }

    return villainName;
}