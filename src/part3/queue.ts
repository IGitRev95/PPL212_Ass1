import { State, bind } from "./state";
import * as R from 'ramda';
export type Queue = number[];

export const enqueue = (x:number): State<Queue,number> => {
    return (oldQueue: Queue) => [R.concat(oldQueue,[x]),x];
};

export const dequeue: State<Queue,number> = 
(oldQueue: Queue) => [R.tail(oldQueue),oldQueue[0]];

export const queueManip : State<Queue,number> =
bind(dequeue, (x:number)=>bind(enqueue(x*2),z=>bind(enqueue(x/3),s=>dequeue)));