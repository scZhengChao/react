
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as types from '../../store/types';
import { asyncAction } from '../../store/asyncAction';
import './shop.scss';
class Shop extends React.Component{
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        let { load_goods } = this.props;
        load_goods()
    }
    render() {
        let {push,innerCar,goods} = this.props
        return (
            <div className="shopcar" > 
                <Link to='/car'>
                    <input type="button" value="点击进入购物车" className="shop_input" />
                </Link>
                {goods.map((item, index) => {
                    return (
                        <dl key={index} className="shop_list">
                            <dt>标题:{item.price}</dt>
                            <dd>描述:{item.name}</dd>
                            <input type="button" value="点击加入购物车" onClick={()=>{push(item.product_id)}} className="shop_input" />
                        </dl>
                    )
                })}
            </div>
        )
    }
   
    
}
let mapStateToProps = (state, props) => ({
   goods:state.goods

})
let mapDispatchToProps = (dispatch, props) => ({
    push: (id) => dispatch({type:types.buy,payload:id}) ,
    load_goods: () => dispatch(asyncAction(
        types.load_goods,
        'http://localhost:3000/car'
    ))
})
export default connect(mapStateToProps,mapDispatchToProps)(Shop);