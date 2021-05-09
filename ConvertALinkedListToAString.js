/*Create a function stringify which accepts an argument list/$list and returns a string representation of the list. 
The string representation of the list starts with the value of the current Node, specified by its data/$data/Data property, 
followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. 
The end of the string representation of a list must always end with null/NULL/None/nil/nullptr/null() (all caps or all 
    lowercase depending on the language you are undertaking this Kata in). For example, given the following list:

new Node(1, new Node(2, new Node(3)))
... its string representation would be:

"1 -> 2 -> 3 -> null"
And given the following linked list:

new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
... its string representation would be:

"0 -> 1 -> 4 -> 9 -> 16 -> null"
Note that null/NULL/None/nil/nullptr/null() itself is also considered a valid linked list. In that case, its string 
representation would simply be "null"/"NULL"/"None"/"nil"/"nullptr"/@"NULL"/"null()" (again, depending on the language).

For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative integer values. 
For example, you will not encounter a Node whose data/$data/Data property is "Hello World".*/

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

function stringify(list) {
	if (list !== null) {
		let nodesArray = [];
		let currentNode = list;

		nodesArray.push(list.data);

		while (currentNode.next !== null) {
			currentNode = currentNode.next;
			nodesArray.push(currentNode.data);
		}

		nodesArray.push(null);

		nodesArray = nodesArray.map(node => {
			if (node == null) {
				node = "null";
			}

			return node.toString();
		});

		return nodesArray.join(" -> ");
	} else {
		return "null";
	}
}

console.log(stringify(new Node(1, new Node(2, new Node(3)))));
