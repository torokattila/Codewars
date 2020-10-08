function solution(fullText, searchText) {
    let toRegex = new RegExp(searchText, 'g');
    return (fullText.match(toRegex) || []).length;
}

console.log(solution('abbc', 'b'));