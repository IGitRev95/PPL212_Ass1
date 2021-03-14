import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (txt: string): number =>
    stringToArray(txt).filter(ch=>R.intersection(['a','A','e','E','i','I','o','O','u','U'],[ch]).length===1 ? true:false).length; 

/*
/* Question 2 *
export const runLengthEncoding = (txt: string): string => {

    let A: Array<string>= stringToArray(txt);
    console.log(Json.stringify(A));
    console.log(["a","a","b","b"].reduce((acc,curr)=>acc.concat(curr),[]));
}
*/
/* Question 3 */
export const isPaired = R.pipe(
    ( txt: string ) => stringToArray( txt ),
    ( txtar: string[] ) => txtar.filter( ch => R.intersection(['(',')','{','}','[',']'],[ch])),
    ( bracketsarr: string[] ) => bracketsarr.reduce( ( acc , cur ) => {
        const instF=(arr: any[])=>R.insert(0,"false",arr);
        const removeFirst=(arr: any[])=>R.remove(0,1,arr);
        switch(cur){
            case ')':
                return    acc[0]==='(' ? removeFirst(acc) : instF(acc);
            case '}':
                return    acc[0]==='{' ? removeFirst(acc) : instF(acc);
            case ']':
                return    acc[0]==='[' ? removeFirst(acc) : instF(acc);
            case '(':
            case '{':
            case '[':
                return    R.insert(0,cur,acc);
            default: return acc;
        }
    },[""]),
    ( resultarr: string[] ) => resultarr.filter( ch => R.intersection(['(','{','[','false'],[ch])).length===0 ? true : false
);
/*
const foo=R.pipe(
    ( txt: string ) => stringToArray( txt ),
    ( txtar: string[] ) => txtar.filter( ch => R.intersection(['(',')','{','}','[',']'],[ch])),
    ( bracketsarr: string[] ) => bracketsarr.reduce( ( acc , cur ) => {
        const instF=(arr: any[])=>R.insert(0,"false",arr);
        const removeFirst=(arr: any[])=>R.remove(0,1,arr);
        switch(cur){
            case ')':
                return    acc[0]==='(' ? removeFirst(acc) : instF(acc);
            case '}':
                return    acc[0]==='{' ? removeFirst(acc) : instF(acc);
            case ']':
                return    acc[0]==='[' ? removeFirst(acc) : instF(acc);
            case '(':
            case '{':
            case '[':
                return    R.insert(0,cur,acc);
            default: return acc;
        }
    },[""]),
    ( resultarr: string[] ) => resultarr.filter( ch => R.intersection(['(','{','[','false'],[ch])).length===0 ? true : false
);
*/
console.log(isPaired("This is ([some]) {text}"));