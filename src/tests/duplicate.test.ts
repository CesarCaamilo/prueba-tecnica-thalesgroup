// Creation of the duplicate tests based on the technical test - Cesar Camilo
import {duplicateFiles} from '../duplicate'
describe('duplicateFiles function', () => {
  it('rename files correctly case 1', () => {
    const test1 = ["txt", "txt", "image", "txt(1)", "txt"];
    expect(duplicateFiles(test1)).toEqual(["txt", "txt(1)", "image", "txt(1)(1)", "txt(2)"]);
  });

  it('rename files correctly case 2', () => {
    const test2 = ["file","file","file(1)","file(3)","file(2)","file(2)"];
    expect(duplicateFiles(test2)).toEqual(["file","file(1)","file(1)(1)","file(3)","file(2)","file(2)(1)"]);
  });

  it('rename files correctly case 3', () => {
    const test3 = ["b(1)","b(6)","b","b","b","b","b","b","b","b","b","b"];
    expect(duplicateFiles(test3)).toEqual(["b(1)","b(6)","b","b(2)","b(3)","b(4)","b(5)","b(7)","b(8)","b(9)","b(10)","b(11)"]);
  });
});
