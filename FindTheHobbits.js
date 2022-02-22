/*You are a lonely hobbit, and you've been given a manifest of all the residents in this side of the country. 
The manifest is an array of hashes, that have the form: {name: 'string', race: 'string', home: 'string'}

You want to find all of the other hobbits! Your task is to return an array from a given manifest that contains 
all of the potential halflings in the list. From your experience you know that hobbits don't always follow the rules, 
and some may have entered their race under their home and vice versa. You also know that some hobbits will refer 
to themselves as halflings, and that popular homes for hobbits include the shire, south farthing, and hobbiton.

TLDR; For a given array of hashes of the form {name: 'string', race: 'string', home: 'string'}, 
return an array of all the objects that have the words halfling,hobbit,shire,farthing, 
or hobbiton anywhere within the race or home field.*/

function findHobbitsIn(manifest) {
    return manifest.filter((hobbit) => {
        if (
            (hobbit.race && hobbit.race.toLowerCase().includes('halfling')) ||
            (hobbit.home && hobbit.home.toLowerCase().includes('halfling')) ||
            (hobbit.race && hobbit.race.toLowerCase().includes('hobbit')) ||
            (hobbit.home && hobbit.home.toLowerCase().includes('hobbit')) ||
            (hobbit.race && hobbit.race.toLowerCase().includes('shire')) ||
            (hobbit.home && hobbit.home.toLowerCase().includes('shire')) ||
            (hobbit.race && hobbit.race.toLowerCase().includes('farthing')) ||
            (hobbit.home && hobbit.home.toLowerCase().includes('farthing')) ||
            (hobbit.race && hobbit.race.toLowerCase().includes('hobbiton')) ||
            (hobbit.home && hobbit.home.toLowerCase().includes('hobbiton'))
        ) {
            return hobbit;
        }
    });
}

const test = [
    { name: 'Joe', race: 'Human', home: 'Bree' },
    { name: 'Dwalin', race: 'Dwarve', home: 'the mountain' },
    { name: 'Oen', race: null, home: 'hobbiton' },
    { name: 'Loen', race: 'Hobbit', home: ' ' },
];

console.log(findHobbitsIn(test));
