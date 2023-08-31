// Creation of the sumProduct test based on the technical test - Cesar Camilo

import {sumProducts} from "../sumProducts";
describe('sumProducts', () => {
  it('should return the correct sum for a string with products', () => {
    expect(sumProducts("32 Pencils, 15 Pens, 2 notebooks")).toBe(49);
  });

  it('should return 0 for a string with no numbers', () => {
    expect(sumProducts("Nothing")).toBe(0);
  });

  it('should return the number for a string with just a number', () => {
    expect(sumProducts("23567")).toBe(23567);
  });

  it('should return the correct sum for a string with random text and numbers', () => {
    expect(sumProducts("adafgrgrgr56, adfddf2")).toBe(58);
  });
});
