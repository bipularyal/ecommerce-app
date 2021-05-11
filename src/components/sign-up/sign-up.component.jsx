import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, CreateUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.css';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.handleChange = this.handleChange.bind(this); // so handlechange recognizes this as SignUp conponent not the input
    }
    handleSubmit = async (event) => {
        console.log(this);
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if ( password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await CreateUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
                // clear our form after everything happens
            })
            
        } catch(error){
            console.log(error);
        }
    }
    handleChange(event){
        console.log(this);
        const{name,value} = event.target;
        this.setState({[name]: value});
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className='title'> I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' label = 'Display Name' value={displayName} handleChange={this.handleChange} required />
                <FormInput name='email' type='email' label = 'Email' value={email} handleChange={this.handleChange} required />
                <FormInput name='password' type='password' label = 'Password' value={password} handleChange={this.handleChange} required />
                <FormInput name='confirmPassword' type='password' label = 'Password' value={confirmPassword} handleChange={this.handleChange} required />
                <CustomButton type='submit'> Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;
