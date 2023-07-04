/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
/* eslint-disable array-element-newline */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-comment-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

/////////////////////////////////
// LET'S GET TO SOME REAL CODE //
/////////////////////////////////


// Let's say we have a super simple command line calculator app and previously we would code it in JS but we want some better type checking so now we are using TS. Here is a sample of what it would look like:

import readline from 'readline';

const reader = readline.createInterface( {
    input: process.stdin
    , output: process.stdout
} );

// So far we haven't had to type a single thing because types for these native NodeJS APIs are already baked into TS so we get autocomplete and everything. Super nice!

reader.question( 'What would you like to calculate? ', ( input ) => {
    const tokens = input.split( ' ' );
    console.log( tokens );
} );