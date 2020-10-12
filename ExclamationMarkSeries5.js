function remove(s) {
    return s.replace(/([a-z+])[!]+/ig, '$1');
}

console.log(remove("!!!Hi !!hi!!! !hi"));