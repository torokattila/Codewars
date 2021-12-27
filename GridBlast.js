/*Ready! Set! Fire... but where should you fire?

The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

var grid = ['top left',    'top middle',    'top right',
            'middle left', 'center',        'middle right',
            'bottom left', 'bottom middle', 'bottom right']
HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

fire(0,0); => 'top left'
fire(1,2); => 'bottom middle'
etc.
Notice the grid is a monodimensional array, good luck!*/

const grid = [
	'top left',
	'top middle',
	'top right',
	'middle left',
	'center',
	'middle right',
	'bottom left',
	'bottom middle',
	'bottom right'
];

function fire(x, y) {
	const firstColumn = [];
	const secondColumn = [];
	const thirdColumn = [];

	grid.forEach((item, index) => {
		if (index === 0 || index == 3 || index === 6) firstColumn.push(item);
        if (index === 1 ||index === 4 || index === 7) secondColumn.push(item);
        if (index === 2 || index === 5 || index === 8) thirdColumn.push(item);
	});

	return [firstColumn, secondColumn, thirdColumn][x][y];
}

console.log(fire(1, 2));
