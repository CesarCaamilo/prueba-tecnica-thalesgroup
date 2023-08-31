/*
Given an array of strings with file names you must check that you don't have duplicate file names
in the array. In case you found repeated names you should rename the file adding “(x)” .... X is the
smallest integer such that the obtained name is not used yet.
*/

export const duplicateFiles = (files: string[]): string [] => {
  const fileCount: {[key: string]: number} = {};
  const res: string[] = [];

  for (let file of files) {
    if(!fileCount[file]) {
      fileCount[file] = 1;
      res.push(file);
    } else {
      let count = fileCount[file] || 1;
      let newName  = `${file}(${count})`;

      while (fileCount[newName]) {
        count ++;
        newName = `${file}(${count})`;
      }
      fileCount[file] = count + 1;
      fileCount[newName] = 1;
      res.push(newName);
    }
  }
  return res;
}
