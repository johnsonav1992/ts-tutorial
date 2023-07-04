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

type Operators = '+' | '-' | '/' | '*';
const MATH_SYMBOLS: Operators[] = [ '+', '-', '/', '*' ];

const askQuestion = () => {
    reader.question( 'What would you like to calculate? ', ( input ) => {
        let tokens: string[]; // since this isn't initialized, typing it explicitly is important.

        if ( input.includes( ' ' ) ) {
            tokens = input.split( ' ' );
        } else {
            tokens = input.split( '' );
        }

        const operator = tokens.find( token => MATH_SYMBOLS.find( symbol => symbol === token ) );
        const operands = tokens.filter( token => token !== operator );

        const num1 = parseFloat( operands[ 0 ] );
        const num2 = parseFloat( operands[ 1 ] );

        if ( operator ) {
            switch ( operator as Operators ) { // We use typecasting here because we know that if we have an operator returned it will be one of the four we have selected. Gives us better autocompletion in the switch case!
                case '+': console.log( num1 + num2 );
                    break;
                case '-': console.log( num1 - num2 );
                    break;
                case '*': console.log( num1 * num2 );
                    break;
                case '/': console.log( num1 / num2 );
                    break;
            }
        }

        reader.question( 'Another? Type "y" or "n" ', ( input ) => {
            if ( input === 'y' || input === 'Y' ) {
                askQuestion();
            } else {
                reader.close;
            }
        } );
    } );
};

askQuestion(); // init on program start