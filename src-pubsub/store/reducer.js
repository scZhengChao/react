import * as types from './types';
let reducer = (state, action) => {
    let { type, payload } = action
    switch (type) {
        case types.view_footer: return Object.assign({}, state, { bfoot: payload });
        default: return state;
    }
};
export default reducer;