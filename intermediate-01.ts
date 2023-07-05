/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inline-comments */
/* eslint-disable array-element-newline */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-comment-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

////////////////
// ASSERTIONS //
////////////////

// Assertions are instances when you (for whatever reason) need to tell TypeScript that you know better about the situation going on and need to essentially override its typechecking with something specific. We have actualy already seen an assertion in our sample program from basics!

//-- As keyword (typecasting) --//
// This keyword allows you to typecast, meaning force something to be a type that it may or may not be
// Let's say you get back something from a database and store it in a variable and it is of type unknown or any but you know it is really a string, you could do this:

let result: unknown = 'hello';
console.log( ( result as string ).length );

// TS allows this because it is unknown. If it knew it was a number, you would have to first convert it to a string and typecasting would throw an error

//-- NonNull Assertion (!) --//
// This assertion is used for when you absoutely know something will exist (not be null or undefined) and you are making TS aware of that. Use this with CAUTION! Only when you are 100% (or more) sure that this is the case.

interface Data {
    data: string;
}

let res: Data | null;

// Normally TS would throw this - 'res' is possibly 'null'.ts(18047)
// But we can say hey, we know that will never happen, so....
const newData = res!.data.toUpperCase();