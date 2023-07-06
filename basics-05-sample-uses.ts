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

            calculateMore();
        } else {
            console.log( 'You must only perform basic calculations with these operators: +, -, /, *  (i.e. 5 + 4)' );
            askQuestion();
        }

    } );
};

const calculateMore = () => {
    reader.question( 'Another? Type "y" or "n" ', ( input ) => {
        console.log( input );

        switch ( input ) {
            case 'y':
            case 'Y': askQuestion();
                break;
            case 'n':
            case 'N': reader.close();
                break;

            default: {
                console.log( 'Please enter a valid option!' );
                calculateMore();
            }
        }
    } );
};

askQuestion(); // init on program start

// Much of this simple program was typed ahead of time from the library/api being used or only required a few type annotations here and there. The beauty of all this is, you can make sure everything is type-safe so that you will get inline IDE errors without having a bunch of errors thrown at runtime! Pretty simple to integrate TS and get all the benefits!