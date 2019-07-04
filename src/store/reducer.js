import * as types from './types';
let reducer = (state, action) => {
    let { type, payload } = action
    switch (type) {
        case types.view_footer:return Object.assign({}, state, { bfoot: payload });
        case types.change: return Object.assign({}, state, { [payload.name]: payload.content });
        case types.bloadding: return Object.assign({}, state, { bloadding: payload });
        case types.checkUser: return Object.assign({}, state, { user: { auth: true, data: payload } });
        case types.load_slider:  return Object.assign({},state,{slider:payload.data})
        case types.load_list: return Object.assign({},state,{list:payload.data})
        case types.load_goods: return Object.assign({},state,{goods:payload.data})
        case types.buy: {
            var flag = false
            state.car.forEach((item, index) => {
                if (item.product_id == payload) {
                    item.number++
                    flag=true
                }
            })
            if (!flag) {
                state.goods.forEach((item, index) => {
                    if (item.product_id == payload) {
                        state.car.push(item)
                    }
                })
            }
            return Object.assign({},state,{car:[...state.car]})
        }
        case types.change_car: {
            state.car.forEach((item, index) => {
                if (item.product_id == payload.id) {
                    item.number += payload.num;
                    if(item.number == 0 ){
                        item.number = 1
                    }
                }
            })
            return Object.assign({},state,{car:[...state.car]})
        }
        case types.remove_car: {
            state.car.forEach((item, index) => {
                if (item.product_id == payload) {
                    state.car.splice(index,1)
                }
            })
            return Object.assign({},state,{car:[...state.car]})
        }
        case types.clear_car: return Object.assign({}, state, { car: [] })
        case types.get_cookie_car:  return Object.assign({},state,{car:payload})
        default: return state;
    }
};
export default reducer;