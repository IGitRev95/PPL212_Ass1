export type State<S, A> = (initialState: S) => [S, A];

export const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>): State<S, B> =>{
    return (initialState: S)=> {
        const curState: [S,A] = state(initialState);
        return f(curState[1])(curState[0]);
    }
}
