import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import './cart-icon.styles.css';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCartHidden}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon"/>
        <span className="item-count">0</span>
    </div>
)
const mapDispatchTOProps = (dispatch)=>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchTOProps)(CartIcon);        