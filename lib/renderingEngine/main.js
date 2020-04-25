var term = require("terminal-kit").terminal;
var sleep = require("sleep").sleep;
var processLifecycle = require("../lifecycle/lifeCycle");

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
  processLifecycle(cells);
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
