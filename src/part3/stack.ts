import { State, bind } from "./state";
import * as R from 'ramda';
export type Stack = number[];

export const push =  (x:number): State<Stack,undefined> => {
    return (oldStack: Stack) => [R.concat([x],oldStack),undefined];
};

export const pop: State<Stack,number> = 
(oldStack: Stack) => [R.tail(oldStack),oldStack[0]];

export const stackManip : State<Stack,undefined> =
bind(pop, (x:number)=>bind(push(x**2),z=>bind(pop,s=>push(x+s))));