/*No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]*/

export function equalize(array: number[]): string[] {
	const firstElement: number = array[0];

	return array.map((num: number) => `${num}`).map((item: string) => {
		if (Number(item) === firstElement) {
			item = '+0';
		} else if (Number(item) < firstElement) {
			item = `-${firstElement - Number(item)}`;
		} else if (Number(item) > firstElement) {
			item = `+${Number(item) - firstElement}`;
		}

		return item;
	});
}

console.log(equalize([10, 12, 24, 50, 0, 15, 20]));
