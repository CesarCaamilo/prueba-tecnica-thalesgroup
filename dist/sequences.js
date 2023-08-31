"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequences = void 0;
/*
Write the program that monitor a possibly infinite stream of characters from the keyboard (standard
input). If it detects the sequence "aaa" it outputs a "0". If it detects the sequence "aba" it outputs a
"1". DO NOT detect sequences within sequences. The program should exit cleanly when it detects
an <End Of Line>.
*/
const sequences = (input) => {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (input.slice(i, i + 3) === 'aaa') {
            output += '0';
            i += 2;
        }
        else if (input.slice(i, i + 3) === 'aba') {
            output += '1';
            i += 2;
        }
    }
    return output;
};
exports.sequences = sequences;
