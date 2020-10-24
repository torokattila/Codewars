function killer(suspectInfo, dead) {
  let newObject = [];
  let killer = "";
  let checker = (array, target) =>
    target.every((value) => array.includes(value));

  for (const [key, value] of Object.entries(suspectInfo)) {
    newObject.push({
      name: key,
      seen: value,
    });
  }

  for (let i = 0; i < newObject.length; i++) {
    if (checker(newObject[i].seen, dead)) {
      killer = newObject[i].name;
    }
  }

  return killer;
}

console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
);
