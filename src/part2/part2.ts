import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (txt: string): number =>
    stringToArray(txt).filter(ch=>R.intersection(['a','A','e','E','i','I','o','O','u','U'],[ch]).length===1 ? true:false).length; 
    /* 
    filtering the array only to vowels and returning the length
    thats by using ramda intersection to findout if the current characture is a vowel.
    */


/* Question 2 */
export const runLengthEncoding = (txt:string):string=> { 
    // recursive function that split array of string to array of a linking letters array
    const SplitToArrays = (empty: string[][], word: string[]): string[][] =>  { 
        const x: string[][] = R.splitWhen(x=>x!==word[0],word);
        return (R.isEmpty(x[1]))?  empty.concat([x[0]]): SplitToArrays(empty.concat([x[0]]),x[1]);
    } // function that return 
    const LinkLetterAndLength = (a: string[]):string => a[0]+((a.length===1)? "":a.length); 
    // map with a Link every letter with Length and then linking all the string in the araay
    const FuncAndLink= R.pipe(R.map(LinkLetterAndLength),R.reduce((acc,curr)=>acc+curr,""));
    return R.empty(txt)? "":FuncAndLink(SplitToArrays([],stringToArray(txt)));
    }


/* Question 3 */
export const isPaired = R.pipe(
    ( txt: string ) => {
        return stringToArray( txt ); //spliting to array of charactures
    },
    ( bracketsarr: string[] ) => 
        bracketsarr.reduce( ( acc , cur ) => 
        /*
         using the acc as stack
         any time cur is opener bracket put it in the begining of acc
         while getting to a closer bracket if the last opener bracket
         is of the same type remove it from the "stack" otherwise add
         an indicator of non legal string (/"false").
         if met one "false" indicator non of the condition will be met
         ever again therefore it will be easly recognized later.
        */
            cur===')' ? (acc[0]==='(' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur==='}' ? (acc[0]==='{' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur===']' ? (acc[0]==='[' ? R.drop(1,acc) : R.concat(["false"],acc)) :
            cur==='(' ? R.concat([cur],acc) :
            cur==='{' ? R.concat([cur],acc) :
            cur==='[' ? R.concat([cur],acc) :
            acc
    ,[""]),
    ( resultarr: string[] ) => {
        /*
         if the string is legal so the array will only contain the 
         original and only value "" otherwise it will contain more
         values.
        */ 
         return resultarr.length===1 ? true : false
    }
    );
