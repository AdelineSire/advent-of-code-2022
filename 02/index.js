const fs = require("fs");

const input = fs.readFileSync("./input.txt", { encoding: "utf-8" });

const convertedValues = input
  .replace(/A|X/g, 1)
  .replace(/B|Y/g, 2)
  .replace(/C|Z/g, 3);

const convertedInput = convertedValues
  .split("\n")
  .map((round) => round.split(" "));

const rounds = convertedInput.map((round) =>
  round.map((string) => Number(string))
);

const getEndPoints = (round) => {
  if (round[0] === round[1]) {
    return 3;
  }
  if (
    ((round[0] === 1) & (round[1] === 2)) |
    ((round[0] === 2) & (round[1] === 3)) |
    ((round[0] === 3) & (round[1] === 1))
  ) {
    return 6;
  } else {
    return 0;
  }
};

const roundsPoints = rounds.map((round) => {
  const endPoints = getEndPoints(round);
  const totalPoints = round[1] + endPoints;
  return totalPoints;
});

const score = roundsPoints.reduce((prev, curr) => prev + curr);

console.log({ score });

// Part 2

const calculatePoints = (round) => {
  if (round[1] === 3) {
    if (round[0] === 1) {
      return 8;
    }
    if (round[0] === 2) {
      return 9;
    }
    if (round[0] === 3) {
      return 7;
    }
  }
  if (round[1] === 2) {
    if (round[0] === 1) {
      return 4;
    }
    if (round[0] === 2) {
      return 5;
    }
    if (round[0] === 3) {
      return 6;
    }
  }
  if (round[1] === 1) {
    if (round[0] === 1) {
      return 3;
    }
    if (round[0] === 2) {
      return 1;
    }
    if (round[0] === 3) {
      return 2;
    }
  }
};

const roundsPoints2 = rounds.map((round) => {
  const points = calculatePoints(round);
  return points;
});

const score2 = roundsPoints2.reduce((prev, curr) => prev + curr);

console.log({ score2 });
