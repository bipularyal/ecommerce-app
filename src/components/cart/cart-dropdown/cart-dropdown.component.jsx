import React from 'react';
import CustomButton  from '../../custom-button/custom-button.component';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../../cart-item/cart-item.component';
import {selectCartItems} from '../../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch}) =>(
   // connect also passes dispatch for us even if we don't call that function
   <div className="cart-dropdown">      
        <div className="cart-items">
        {cartItems.length ? 
           ( cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))) : (<div class = "error-message"> Your cart is empty</div>)}
        </div>
        <CustomButton onClick = {() => {history.push('/checkout');
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
 {/*  Histoy here is  something we talked abput previously because react does not make new pages, we need tp oush new pages to history */}
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
})
export default withRouter(connect(mapStateToProps)(CartDropdown));