"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const rankedCount = parseInt(readLine().trim(), 10);

  const ranked = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((rankedTemp) => parseInt(rankedTemp, 10));

  const playerCount = parseInt(readLine().trim(), 10);

  const player = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((playerTemp) => parseInt(playerTemp, 10));

  const climbingLeaderboard = (ranked, player) => {
    // Write your code here
    const newArr = ranked.filter(function (num, position) {
      return ranked.indexOf(num) == position;
    });
    for (let score of player) {
      for (let i = 0; i < newArr.length; i++) {
        if (score < newArr[newArr.length - 1]) {
          let ans = newArr.length + 1;
          console.log(`${ans}`);
          break;
        }
        if (score >= newArr[i]) {
          let ans = i + 1;
          console.log(`${ans}`);
          break;
        }
      }
    }
  };

  climbingLeaderboard(ranked, player);
  ws.end();
}
