import { Result, makeFailure, makeOk, bind, either } from "../lib/result";
import * as R from "ramda";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult =  <T>(pred: (x: T) => boolean, a: T[]): Result<T> =>{
    const filteredArray = a.filter(pred);
    return R.isEmpty(filteredArray) ? makeFailure("no such element exist"): makeOk(filteredArray[0]);
};

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => {
    return bind(findResult(x => x % 2 === 0, a ), x => makeOk( x**2 ));
};

export const returnSquaredIfFoundEven_v3 = (a: number[]):number => {
    return either(findResult(x => x % 2 === 0, a ), x =>  x**2 , str => -1 );
};

// TODO: run tests