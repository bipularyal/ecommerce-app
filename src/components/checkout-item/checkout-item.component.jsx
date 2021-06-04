import React from 'react';
import './checkout-item.styles.scss';
import {clearItemsFromCart,addItem,subtractItem} from '../../redux/cart/cart.actions'
import{connect} from 'react-redux'

const CheckoutItem = ({cartItem,clearItem,addItem,subtractItem}) =>{
    const {name, imageUrl,price,quantity} = cartItem
  return  ( <div className='checkout-item'>
        <div className="image-container">
            <img alt ='item' src = {imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={() => subtractItem(cartItem)}> &#10094;</div>
          <span className="value"> {quantity}</span> 
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}> &#10005;</div>

    </div>)
}
const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch (clearItemsFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    subtractItem: item => dispatch(subtractItem(item))
    // so the difference I felt between map state and map dispatch to props is ... 
    //if action were to happen on start like populating something we need mapStateToProps and 
    //if action were to happen adter we populate that is performing some click action / form action we use mapDispatchToProps
})
export default connect(null, mapDispatchToProps)(CheckoutItem); 