function friend(friends) {
    return friends.filter(x => {
        return x.length === 4;
    });
}

console.log(friend(["Ryan", "Kieran", "Mark"]));