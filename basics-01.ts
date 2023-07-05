/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inline-comments */
/* eslint-disable array-element-newline */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-comment-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */


////////////////////////////////////////////////
// STATIC TYPE ANNOTATIONS AND TYPE INFERENCE //
////////////////////////////////////////////////

// Type annotations are the most basic why to type something in TS. It's all about putting the type after a colon following the variable or entity:

const thing: string = 'This string is a string!';

// The Any Type - getting this out of the way first, because it's the big point of debate!!

const iDontCareWhatTypeThisIs: any = 'I can reassign this or do whatever I want...';
type NoTypeSafety = any;

// In TS, if you type something as any, it turns type checking off. This would essentially be the same as writing plain JS. If the point of using TS is to have type checking and catch errors before runtime, using any doesn't make sense 99% of the time. The reason to have any around is in very rare cases where you truly do need it (you absolutely cannot know the type of the entity ahead of time). Otherwise, just don't use TS if you plan on using it! :)

//-- Primitives --//
const numberOfFriends: number = 4;
const firstName: string = 'Alex';
let thisStillWorks = true; // hover over the variable name and see that the type is inferred! TS is smart (Sometimes :) )

//-- Objects --//
const user = {
    firstName: 'Eliot'
    , lastName: 'Johnson'
    , age: 27
    , hobbies: [ 'coding', 'drumming' ]
};

type User = typeof user;

// OR...

type User2 = {
    firstName: string;
    lastName: string;
    age: number;
    hobbies: string[];
};

// An interface as like using the 'type' keyword but it can only be used for objects (and some functions...) and you do not use the = sign
// More on interfaces later!
interface User3 {
    firstName: string;
    lastName: string;
    age: number;
    hobbies: string[];
}

const newUser: User = {
    firstName: 'John'
    , lastName: 'Smith'
    // @ts-expect-error - cannot assign a string to 'age' because it is typed a number
    , age: '40'
    , hobbies: [ 'Dating Pocahontas' ]
};

//-- Arrays --//
const anArray = [ 1, 2, 3 ]; // number[]
const mixedArr = [ 'hello', 4 ]; // (string | number)[]
const strArr: string[] = [ 'these', 'must', 'all', 'be', 'strings' ];
const arrOfObjects: User[] = [
    {
        firstName: 'Some'
        , lastName: 'Person'
        , age: 100
        , hobbies: [ 'nothing' ]
    }
    , {
        firstName: 'Another'
        , lastName: 'Dude'
        , age: 3
        , hobbies: [ 'soccer' ]
    }
]; // Every object in this array must conform to shape of User or else an error will be thrown

//-- Tuples --//
// arrays that are set with a specific number of specific values

type Options = ['this', 'that'];
type Mixed = ['a string', 3];

// @ts-expect-error - cannot assign another value to this tuple because it is "set in stone"
const options: Options = [ 'another option' ];