const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });

const elvesDetail = input
  .split("\n\n")
  .map((elf) => elf.split("\n").map((item) => parseInt(item)));

const elvesSum = elvesDetail.map((elf) =>
  elf.reduce((prev, curr) => prev + curr)
);

const getHighest = (array) => {
  return Math.max(...array);
};

const highest = getHighest(elvesSum);

const getThreeHighest = (array) => {
  const first = getHighest(array);
  array.splice(
    array.findIndex((a) => a === first),
    1
  );
  const second = getHighest(array);
  array.splice(
    array.findIndex((a) => a === second),
    1
  );
  const third = getHighest(array);
  const total = first + second + third;

  return total;
};

const threeHighest = getThreeHighest(elvesSum);

console.log(highest);
console.log(threeHighest);
