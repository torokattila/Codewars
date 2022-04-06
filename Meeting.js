/*John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result 
between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.*/

function meeting(s) {
    const namesObjectArray = [];
    const namesArray = [];

    s.split(';').forEach((person) => {
        const firstname = person.split(':')[0];
        const lastname = person.split(':')[1];

        namesObjectArray.push({
            lastname: lastname.toUpperCase(),
            firstname: firstname.toUpperCase(),
        });
    });

    namesObjectArray.sort((a, b) => {
        if (a.lastname === b.lastname) {
            if (a.firstname < b.firstname) return -1;
            if (a.firstname > b.firstname) return 1;
            return 0;
        } else {
            if (a.lastname < b.lastname) return -1;
            if (a.lastname > b.lastname) return 1;
            return 0;
        }
    });

    namesObjectArray.forEach((person) => {
        namesArray.push(`(${person.lastname}, ${person.firstname})`);
    });

    return namesArray.join('');
}

const s =
    'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

console.log(meeting(s));
