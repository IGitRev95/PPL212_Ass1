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
    ( txt: string ) => {
        return stringToArray( txt );
    },
    ( bracketsarr: string[] ) => 
        bracketsarr.reduce( ( acc , cur ) => 
            //console.log("cur: "+cur+" |acc: "+acc);
            cur===')' ? (acc[0]==='(' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur==='}' ? (acc[0]==='{' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur===']' ? (acc[0]==='[' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur==='(' ? R.concat([cur],acc) :
            cur==='{' ? R.concat([cur],acc) :
            cur==='[' ? R.concat([cur],acc) :
            acc 
    ,[""]),
    ( resultarr: string[] ) => {
       return resultarr.filter( ch => R.intersection(['(','{','[','false'],[ch])).length===1 ? true : false
    }
    );
/*
const foo=R.pipe(
    ( txt: string ) => {
        return stringToArray( txt );
    },
    ( bracketsarr: string[] ) => 
        bracketsarr.reduce( ( acc , cur ) => 
            //console.log("cur: "+cur+" |acc: "+acc);
            cur===')' ? (acc[0]==='(' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur==='}' ? (acc[0]==='{' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur===']' ? (acc[0]==='[' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur==='(' ? R.concat([cur],acc) :
            cur==='{' ? R.concat([cur],acc) :
            cur==='[' ? R.concat([cur],acc) :
            acc 
    ,[""]),
    ( resultarr: string[] ) => {
       return resultarr.filter( ch => R.intersection(['(','{','[','false'],[ch])).length===1 ? true : false
    }
    );
*/