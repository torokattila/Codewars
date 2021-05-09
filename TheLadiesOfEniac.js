/*Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the 
University of Pennsylvania’s Moore School of Engineering (1945). Through their contributions, we gained the first software 
application and the first programming classes! The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

To keep: only alpha characters, space characters and exclamation marks.
To remove: numbers and these characters: %$&/£?@

Result should be all in uppercase.*/

function radLadies(name) {
	const pattern = name.match(/[a-zA-Z\s\!]/g);

    return pattern.join('').toUpperCase();
}

console.log(radLadies("9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%"));
