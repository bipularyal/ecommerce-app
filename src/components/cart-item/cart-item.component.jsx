import React from 'react';
import './cart-item.styles.css';
const CartItem = ({item:{imageUrl,price,name,quantity}}) =>(
<div className="cart-item">
    <img src={imageUrl} alt="Image Url" />
    <div className="item-details">
        <span className='name'>{name}</span>
        <span className="price">${quantity *price}</span>
    </div>
</div>
)

export default CartItem;