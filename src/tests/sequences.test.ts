// Creation of the sequences test based on the technical test - Cesar Camilo

import { sequences } from '../sequences';
describe('detectSequences', () => {
  it('should detect aaa and aba sequences correctly', () => {
    const sequence1 = "aababaaabaaa";
    const sequence2 = "aaababaaaabbababa";

    expect(sequences(sequence1)).toBe('100');
    expect(sequences(sequence2)).toBe('0101');
  });

  it('should return an empty string for no matches', () => {
    const sequence = "abcabcabc";
    expect(sequences(sequence)).toBe('');
  });
});
