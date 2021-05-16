import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux';
import './cart-icon.styles.css';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shoppingIcon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapDispatchTOProps = (dispatch)=>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) =>({
        itemCount:selectCartItemsCount(state)
})
export default connect(mapStateToProps,mapDispatchTOProps)(CartIcon);        