import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return 0;
    }
}

const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});



// let state = reducer(undefined, {});
// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);