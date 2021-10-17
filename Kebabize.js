/*Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters*/

function kebabize(str) {
	return str
        .replace(/[^A-Za-z-]/g, '')
		.split(/(?=[A-Z])/)
		.map(word => word.toLowerCase())
		.join('-');
}

console.log(kebabize('myCamelHas3Humps'));
