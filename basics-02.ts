/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
/* eslint-disable array-element-newline */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-comment-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

///////////////////////////
// BASIC FUNCTION TYPING //
///////////////////////////

//-- Typing Function arguments and returns --//

                                                // v return type annotation
const aBasicFunctionWithTypes = ( argument: any ): any => {
                                        // ^ arg type annotation
    return;
};

// This func. above uses basic type annotations in two places, one for its argument(s)/param(s) and one for its return type
// We are using any here just to show where the types go but as you know... types preferred always!
// Note -  Many times you don't have to type the return because it is inferred, like so...

const add = ( num1: number, num2: number ) => {
    return num1 + num2;
};

// TS knowns in this case that the return is a number because it is returning something using only the arguments passed in and it already knows what type those are
// You could still annotate the type by putting : number after the function parentheses

// Here is what we get if we try to pass a string into a number slot of this function...

// @ts-expect-error - Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
add( '2', 3 );


//-- Functions as Types (Function Signatures) --//

type Func = ( num1: number, num2: number ) => number;

const testFunc: Func = ( a, b ) => {
    return a + b;
};

// Here is the explicit type of this function for the above 'add' function but stored in a type - this is called a function signature
// To type a function signature, all you need is the parentheses with arguments (typed) inside, the arrow, and then the return type. You must have all three things (or at least two if no arguments) in order to have a valid function signature