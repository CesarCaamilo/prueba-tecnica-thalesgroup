"use strict";
// Creation of the sumProduct test based on the technical test - Cesar Camilo
Object.defineProperty(exports, "__esModule", { value: true });
const sumProducts_1 = require("../sumProducts");
describe('sumProducts', () => {
    it('should return the correct sum for a string with products', () => {
        expect((0, sumProducts_1.sumProducts)("32 Pencils, 15 Pens, 2 notebooks")).toBe(49);
    });
    it('should return 0 for a string with no numbers', () => {
        expect((0, sumProducts_1.sumProducts)("Nothing")).toBe(0);
    });
    it('should return the number for a string with just a number', () => {
        expect((0, sumProducts_1.sumProducts)("23567")).toBe(23567);
    });
    it('should return the correct sum for a string with random text and numbers', () => {
        expect((0, sumProducts_1.sumProducts)("adafgrgrgr56, adfddf2")).toBe(58);
    });
});
