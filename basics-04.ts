/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inline-comments */
/* eslint-disable array-element-newline */
/* eslint-disable spaced-comment */
/* eslint-disable multiline-comment-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */


//////////////////////
// NULL & UNDEFINED //
//////////////////////

// As far as null and undefined are concerned in TS, they work similarly to JS. The main difference is how they are treated. In TypeScript, there is a much stricter way that they are both handled, and for good reason! Almost all type errors that occur at runtime are because of some variable or value ending up null or undefined when not intended to be. TS helps solve this be not allowing anything to go null or undefined without being checked first.

// the question mark syntax inside here denotes that there are optional properties in this interface
type AlbumAPIResponse = {
    title: string;
    artist?: { //optional means it could be undefined
        name: string;
        bio?: string;
        previousAlbums?: string[];
    };
};

declare const album: AlbumAPIResponse;

// Optional chaining allows us to only access properties if they truly exist, else return undefined
const artistBio = album?.artist?.bio;

// This is already a JS feature but TS enforces it more heavily for type safety
