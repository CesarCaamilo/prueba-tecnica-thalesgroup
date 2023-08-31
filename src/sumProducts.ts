/*
Given a string describing the number of objects you bought in a shop, code a solution that gives
the total sum of products in the string:
*/
export const sumProducts = (input: string): number => {
  const parts = input.split(/[\s,]+/);
  let total = 0;
  for (let part of parts) {
    const match = part.match(/\d+/);
    if (match) {
      total += parseInt(match[0], 10);
    }
  }
  return total;
}
