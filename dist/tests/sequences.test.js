"use strict";
// Creation of the sequences test based on the technical test - Cesar Camilo
Object.defineProperty(exports, "__esModule", { value: true });
const sequences_1 = require("../sequences");
describe('detectSequences', () => {
    it('should detect aaa and aba sequences correctly', () => {
        const sequence1 = "aababaaabaaa";
        const sequence2 = "aaababaaaabbababa";
        expect((0, sequences_1.sequences)(sequence1)).toBe('100');
        expect((0, sequences_1.sequences)(sequence2)).toBe('0101');
    });
    it('should return an empty string for no matches', () => {
        const sequence = "abcabcabc";
        expect((0, sequences_1.sequences)(sequence)).toBe('');
    });
});
