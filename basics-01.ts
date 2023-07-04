/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */


// STATIC TYPE ANNOTATIONS

// Primitives
const numberOfFriends: number = 4;
const firstName: string = 'Alex';
let thisStillWorks = true;

// Objects/Arrays/Tuples
const user = {
    firstName: 'Eliot'
    , lastName: 'Johnson'
    , age: 27
    , hobbies: [ 'coding', 'drumming' ]
};

type User = typeof user;

// OR //

type User2 = {
    firstName: string;
    lastName: string;
    age: number;
    hobbies: string[];
};

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