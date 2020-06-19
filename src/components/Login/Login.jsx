import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required } from './../../utils/validators';
import { login } from './../../Redux/auth-reducer';
import { connect } from 'react-redux';
import s from '../common/FormsControl/FormsControl.module.css'
import { Redirect } from 'react-router-dom';


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            {props.error
                && <div className={s.formSummaryError}>
                    {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}



const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    if(props.isAuth) {return <Redirect to={'/profile'} />}

    const onSubmit = (formData) => {
        const { login, password, rememberMe } = formData
        props.login(login, password, rememberMe)

    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)