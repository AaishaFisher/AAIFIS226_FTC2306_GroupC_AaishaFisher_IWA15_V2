const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  };
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    const { lists } = data;
    const indices = lists.map(([, arr]) => arr[arr.length - 1]);
  
    const availableIndices = indices.filter(val => !isNaN(val) && val !== undefined);
    
    if (availableIndices.length > 0) {
      const maxIndex = indices.indexOf(Math.max(...availableIndices));
  
      if (lists[maxIndex][1].length > 0) {
        return lists[maxIndex][1].pop();
      } else {
        lists.splice(maxIndex, 1);
        return extractBiggest();
      }
    }
  };
  
  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);
  