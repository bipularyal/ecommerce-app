import React from 'react';
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import {auth} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import './header.styles.css';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link to='/' className='logo-container  '>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link  className='option' to='/shop'>SHOP</Link>
            <Link  className='option' to='/contact'>CONTACT</Link>
            {
                currentUser? 
                <div className='option' onClick={()=> {auth.signOut();} }>SIGN OUT</div>
                // auth.signout is provided to us by the firebase library
                :
                <Link className='option' to = '/signin'> SIGN IN</Link>
            }
            <CartIcon/>
        </div>
          { hidden?null: <CartDropdown/>}
    </div>
)
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);