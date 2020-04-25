var term = require("terminal-kit").terminal;
var sleep = require("sleep").sleep;
var processLife = require("../life/life");

let count = 0;
let cells = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function render() {
  processLife(cells);
  term.clear();
  count++;
  term.blue(`Turn count ${count}\n`);
  cells.forEach((row) => {
    row.forEach((column) => {
      column ? term.red(column.toString()) : term.green(column.toString());
      term.green(" ");
    });
    term.nextLine();
  });
}

module.exports = async function MainLoop() {
  while (true) {
    render();
    await sleep(1);
  }
};
