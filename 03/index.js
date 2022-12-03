const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });

const rucksacksRaw = input.split("\n");

// split in half
const rucksacks = rucksacksRaw.map((rucksack) => [
  rucksack.slice(0, rucksack.length / 2).split(""),
  rucksack.slice(rucksack.length / 2).split(""),
]);

// find the common items
const getItems = (rucksacks) => {
  const items = [];

  rucksacks.forEach((rucksack, index) => {
    for (const item of rucksack[0]) {
      if (rucksack[1].includes(item)) {
        // console.log({ index, item });
        items.push(item);
        return;
      }
    }
  });
  return items;
};

// convert to priority :
const getPriorities = (values) => {
  const result = values.map((value) => {
    if ((value.charCodeAt(0) >= 97) & (value.charCodeAt(0) <= 122)) {
      return value.charCodeAt(0) - 96;
    } else return value.charCodeAt(0) - 38;
  });
  return result;
};

const items = getItems(rucksacks);
const priorities = getPriorities(items);
const prioritiesSum = priorities.reduce((prev, curr) => prev + curr);
console.log({ prioritiesSum });

// Part two

// Split in groups
const groupedRucksacks = [];

for (let index = 0; index < rucksacksRaw.length; index += 3) {
  const group = rucksacksRaw.slice(index, index + 3);
  const splitedGroup = group.map((rucksack) => rucksack.split(""));
  groupedRucksacks.push(splitedGroup);
}

// Find the common badges
const getBadges = (groupedRucksacks) => {
  const badges = [];
  groupedRucksacks.forEach((group) => {
    for (const badge of group[0]) {
      if (group[1].includes(badge) & group[2].includes(badge)) {
        badges.push(badge);
        return;
      }
    }
  });
  return badges;
};

const badges = getBadges(groupedRucksacks);
const badgesPriorities = getPriorities(badges);
const badgesSum = badgesPriorities.reduce((prev, curr) => prev + curr);
console.log({ badgesSum });
