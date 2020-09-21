function solve(st, a, b) {
    let start = st.substring(0, a);
    let end = st.substring(b + 1);
    let between = st.substring(a, b + 1).split('').reverse().join('');

    return start + between + end;
}

console.log(solve("FunctionalProgramming", 2, 15));