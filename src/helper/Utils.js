/**
 * @param {Object[]}  columns columns of table
 * @param {Number} order  order to sort
 * @param {String} sortStandard  order to sort
 * @returns {Object[]}
 */
const sortByColumnIndex = (columns, sortOrder, sortStandard) => {
  if (sortOrder === 0) {
    return columns.slice();;
  }

  //Selection sort
  const res = columns.slice();
  for (let startSearchIndex = 0; startSearchIndex < columns.length; startSearchIndex++) {
    let targetIndex = startSearchIndex;
    for (let searchIndex = startSearchIndex + 1; searchIndex < columns.length; searchIndex++) {
      if (sortOrder === 1) {
        if (res[targetIndex][sortStandard] > res[searchIndex][sortStandard]) {
          targetIndex = searchIndex;
        }
      } else if (sortOrder === 2) {
        if (res[targetIndex][sortStandard] < res[searchIndex][sortStandard]) {
          targetIndex = searchIndex;
        }
      }
    }
    const temp = res[startSearchIndex];
    res[startSearchIndex] = res[targetIndex];
    res[targetIndex] = temp;
  }
  return res;
}

export default sortByColumnIndex