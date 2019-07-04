
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as types from '../../store/types';
import { asyncAction } from '../../store/asyncAction';
import './car.scss';
class Car extends React.Component{
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        // let { getCookie } = this.props;
        // var data = JSON.parse( localStorage.getItem("goods"))
       
        // // console.log(data)
        // getCookie(data)
    }
    componentWillReceiveProps(nextprops) {
    }
    render() {
        let { car, changeItem, removeItem, clearBuycar } = this.props
        // console.log(car)
        let num = 0
        car.map((item, index) => { 
            num += parseFloat(item.number) * parseFloat(item.price)
        })
        return (
            <div className="buycar">
                {car.map((item, index) => {
                    return (
                        <dl key={index}>
                            <dt>标题:{item.price}</dt>
                            <dd>描述:{item.name}</dd>
                            <dd>
                                <input  type="button" value="+" onClick={changeItem.bind(null,item.product_id,1)} className="box"/>
                                {item.number}
                                <input  type="button" value="-" onClick={changeItem.bind(null,item.product_id,-1)} className="box2"/>
                            </dd>
                            <dd><input  type="button" value="删除" onClick={removeItem.bind(null,item.product_id)} /></dd>
                        </dl>
                  )
              })}
                <input type="button" value="清空购物车" onClick={clearBuycar} />
                <p>合计:{num.toFixed(2)}</p>
            </div>
        )
    }
   
    
}
let mapStateToProps = (state, props) => ({
    car: state.car,
})

let mapDispatchToProps = (dispatch, props) => ({
    changeItem: (id,num) => dispatch({type:types.change_car,payload:{id,num}}),
    removeItem: (id) => dispatch({ type: types.remove_car, payload: id }),
    clearBuycar: () => dispatch({ type: types.clear_car }),
    // getCookie: (data) => dispatch({ type: types.get_cookie_car, payload: data }),
})
export default connect(mapStateToProps,mapDispatchToProps)(Car);