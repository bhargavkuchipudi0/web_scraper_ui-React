import React from 'react';
import { logo } from '../../images/index';
import { Link, withRouter } from 'react-router-dom';
import { sharedService } from '../../services/shared.service';
import './login_component.scss'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            username: '',
            email: '',
            password: '',
            form_errors: {
                username: '',
                email: '',
                password: ''
            },
            errors: false,
            alpha_numberic_regEx: /^[a-z\d\-_\s]+$/i,
            email_regEx: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g,
        }
        this.updateForm = this.updateForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            this.checkTypeOfAccess();
        });
    }
    componentDidMount = () => {
        this.checkTypeOfAccess();
    }
    checkTypeOfAccess() {
        this.setState({ isLogin: window.location.href.includes('login') ? true : false });
    }
    updateForm({e = null, name = null, value = null} = {}) {
        if (e) {
            name = e.target.name;
            value = e.target.value;
        }
        this.setState({
            [name]: value
        });
    }
    updateStateForFormErrors(key, value) {
        this.setState({
            form_errors: {
                ...this.state.form_errors,
                [key]: value
            }
        });
    }
    validateAllFields(callback) {
        // username validation
        if (this.state.username.length < 3) {
            console.log('1')
            this.updateForm({name: 'errors', value: true});
            this.updateStateForFormErrors('username', 'Minimum 3 characters required!');
        } else if (!this.state.username.match(this.state.username)) {
            this.updateForm({name: 'errors', value: true});
            this.updateStateForFormErrors('username', 'Invalid Username!');
        } else {
            this.updateForm({name: 'errors', value: false});
            this.updateStateForFormErrors('username', '');
        }
        // Email validation
        if (!this.state.email.match(this.state.email_regEx)) {
            this.updateForm({name: 'errors', value: true});
            this.updateStateForFormErrors('email', 'Invalid Email address!');
        } else {
            this.updateForm({name: 'errors', value: false});
            this.updateStateForFormErrors('email', '');
        }
        // Password validation
        if (this.state.password.length < 3) {
            this.updateForm({name: 'errors', value: true});
            this.updateStateForFormErrors('password', 'Minimum 3 characters required!');
        } else {
            this.updateForm({name: 'errors', value: false});
            this.updateStateForFormErrors('password', '');
        }
        console.log(2);
        callback(null, !this.state.errors);
    }
    submitForm() {
        this.validateAllFields((err, valid) => {
            console.log(err, valid);
            if (valid) {
                const payload = this.state.isLogin ?
                {
                    'email': this.state.email,
                    'password': this.state.password
                } :
                {   
                    'username': this.state.username,
                    'email': this.state.email,
                    'password': this.state.password
                }
                this.state.isLogin ? 
                sharedService.login(payload).then((res) => {
                    console.log(res);
                }).catch((error) => {
                    console.log(error);
                }) :
                sharedService.signup(payload).then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error);
                });
            }
        });
    }
    render() {
        return (
            <div className='login_main'>
                <div className='bg_img'>
                    <div className='l_cont'>
                        <h2>Why do you need this service? </h2>
                        <p>
                            Online shopping is getting more popular day by day, but it is a tricky thing to deal with,
                            because of unpredictable price drops! The product that is priced at Rs.8000 today,
                            can be bought for Rs.5000 tomorrow. You never know when the price is going to drop.
                            In our busy schedule it also gets difficult to check regularly for the latest price.
                            This might lead to a wrong decision. We have faced such problems too and finally
                            developed something for you.
                        </p>
                        <Link className='links' to='/home'><button className='back_btn'>Back to Home</button></Link>
                    </div>
                    <div className='form_cont'>
                        {
                            this.state.isLogin ? <h3>Login to your account</h3> : <h3>Create an account</h3>
                        }
                        <img src={logo} alt='logo' />
                        <div>
                            {
                                this.state.isLogin ? null :
                                    <div className='inp username'>
                                        <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.updateForm} />
                                        {
                                            this.state.form_errors.username ? 
                                            <p className='form_error'>Invalid Username</p> : 
                                            ''
                                        }
                                    </div>
                            }
                            <div className='inp email'>
                                <input type='email' name ='email' placeholder='Email' value={this.state.email} onChange={this.updateForm} />
                                        {
                                            this.state.form_errors.email ? 
                                            <p className='form_error'>Invalid Email Address</p> : 
                                            ''
                                        }
                            </div>
                            <div className='inp password'>
                                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.updateForm} />
                                        {
                                            this.state.form_errors.password ? 
                                            <p className='form_error'>Invalid Password</p> : 
                                            ''
                                        }
                            </div>
                            <button className='frm_btn' onClick={this.submitForm} >{this.state.isLogin ? 'Login' : 'Signup'}</button>
                        </div>
                        <hr />
                        <div className='switch_ac'>
                            {this.state.isLogin ?
                                <p>Don't have an account? <Link className='links' to='/signup'>Signup</Link> </p> :
                                <p>Already have an account? <Link className='links' to='/login'>Login</Link> </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginComponent)