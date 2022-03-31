import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialValues = {
  email:'',
  pwd: '',
  emailValid:false,
  pwdValid:false,
};
class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {...initialValues}
}
  // handleEmail = ({target:{value}}) => this.setState({email: value})
  // handlePassword = ({target:{value}}) => this.setState({pwd: value})
  handleInput = ({target:{name,value}}) => this.setState({
    [name]: value,
    [`${name}Valid`]: !value.includes(' ')
  });

  handleForm = (event)=>{
    event.preventDefault();
    event.target.reset();
    this.setState({...initialValues});
  }
  render() {

    function cx (object){
      return Object.entries(object)
              .filter(([className, condition])=>condition)
              .map(([className, condition])=>className)
              .join(' ')
    }

    const {email,pwd,emailValid,pwdValid} = this.state;
    const emailClassName = cx({
      [styles.input]:true,
      [styles.invalis]:!emailValid,
    })

    return (
      <form className={styles.container}
      onSubmit={this.handleForm}>
        <h2 className={styles.title}>Sign in form</h2>
        <input type='email' 
        name='email' 
        placeholder='email'
        onChange={this.handleInput}
        className={emailClassName}/>
        <input type='password' 
        name='pwd' 
        placeholder='password'
        onChange={this.handleInput}
        className={pwdClassName}/>
        <input type='submit' 
        value='Sign in' className={styles.btn}/>
      </form>
    );
  }
}

export default SignInForm;
