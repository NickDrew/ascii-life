module.exports = function processLifecycle(lifeGrid) {
  //add single lifecycle iteration here
  lifeGrid.forEach((row, rowIndex, rowArray) => {
    rowArray[rowIndex].forEach((cell, cellIndex, cellArray) => {
      if (cell === 0) {
        cellArray[cellIndex] = 1;
      } else {
        cellArray[cellIndex] = 0;
      }
    });
  });
  return lifeGrid;
};
