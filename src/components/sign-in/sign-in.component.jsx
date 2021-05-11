import React from 'react';
import './sign-in.styles.css';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth ,signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
        const {email , password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''});
        } catch(error) {
            console.log(error);
        }
    }
    handleChange = (event)=> {
        const{value,name}=event.target; // we are extracting the data we changed in forms
        this.setState({[name]: value}); // now updating that into the state
    } 

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}> 
                {/* handleSubmit is in order to handle what clicking the submit button does most importantly preventDefault */}
                   
                    <FormInput name='email' type='email' label = 'email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name='password' type='password' label = 'password' value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    } 
}
export default SignIn;