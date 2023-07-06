/* eslint-disable max-len */
/* eslint-disable no-inline-comments */
/* eslint-disable array-element-newline */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-comment-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

///////////////////////
// BASIC UNION TYPES //
///////////////////////

// Union types are essentially a type where you can say that the type is this, or this, or that

type UnionOfStuff = 'car' | 'table' | 'sink';
type AnotherRandoUnion = 1 | true | 'heck yeah';

const anArrayUsingAUnionType: UnionOfStuff[] = [ 'car', 'table' ]; // Can only contain things from the union

const functionUsingRandomUnion = ( argument: AnotherRandoUnion ) => {
    return argument;
};

functionUsingRandomUnion( 1 ); // this works
functionUsingRandomUnion( 'heck yeah' ); // this works

//@ts-expect-error - doesn't work because 78 isn't a member of the union type
functionUsingRandomUnion( 78 ); // No worky work


///////////////////////////
// UNKNOWN, VOID & NEVER //
///////////////////////////

//-- UNKNOWN --//
type SomeTypeThatWeDontKnowWhatItIs = unknown;

// unknown is like any except instead of allowing anything to work it allows nothing to work unless it knows for sure that it can infer the type

const thisTakesInWhatever = ( thing: unknown ) => {
    // @ts-expect-error - won't work because we can't operate on something that is unknown
    return thing + thing;
};

// The above will error because you can't add two things that are 'unknown'
// However, if you do a type check right before, you can eradicate the error, like so...

const thisTakesInWhatever2 = ( thing: unknown ) => {
    if ( typeof thing === 'number' ) {
        return thing + thing;
    } else {
        return thing;
    }
};

//-- VOID --//
const thisFunctionReturnsNothing = () => {
    return;
};

const log = () => {
    console.log( 'hi' );
};

// You can see the type of this is () => void, which means it returns nothing


//-- NEVER --//

type ThisCouldNeverWork = never;

// Never only comes up in producing code (usually for libraries or in utils and things like that) in order to state that some way of using a type or interface would be impossible and 'never' actually work or return anything, hence the name.

const throwError = ( errorMsg: string ) => {
    throw new Error( errorMsg );
};

// This function will never actually executes because it always throws an error and doesn't actually get to return, the return type of it is never
// If you are ever writing functional code and your code accidentally returns never, that generally means you set up your function(s) in a way that won't produce inferrable results and in some cases are just not correct. This will happen especially frequently when using library APIs incorrectly
