import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels = (txt: string): number =>{
    return stringToArray(txt).filter(ch=>
        ch==='a' ? true :
        ch==='A' ? true :
        ch==='e' ? true :
        ch==='E' ? true :
        ch==='i' ? true :
        ch==='I' ? true :
        ch==='o' ? true :
        ch==='O' ? true :
        ch==='u' ? true :
        ch==='U' ? true : false
    ).length; 
};

/* Question 2 */
export const runLengthEncoding = (txt: string): string => {

    let A: Array<string>= stringToArray(txt);
    console.log(Json.stringify(A));
    console.log(["a","a","b","b"].reduce((acc,curr)=>acc.concat(curr),[]));
}

/* Question 3 */
export const isPaired = (txt: string): boolean =>{
    return 

};