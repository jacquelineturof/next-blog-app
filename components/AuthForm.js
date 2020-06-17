import React, { useState } from 'react'

import Input from './UI/Input'
import Button from './UI/Button'

import classes from './AuthForm.module.css'

const Header = ({ formType }) => {
    let mainHeading
    let tagLine
    
    if (formType === "login") {
        mainHeading = "Login"
        tagLine = "Sign in and join the conversation"
    } else if (formType === "register") {
        mainHeading = "Register"
        tagLine = "Sign up with email or an auth provider to join the conversation"
    } else {
        mainHeading = "Forgot Password"
        tagLine = "Send an e-mail to the e-mail registered with this account to reset your password"
    }

    return (
        <header className = { classes.Header }>
            <h3 className = { classes.HeaderMain }>{ mainHeading }</h3>
            <p className = { classes.TagLine }>{ tagLine }</p>
        </header>
    )
}

const Inputs = ({
    formType,
    setFormType,
    username, setUsername,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword
}) => {
    /*
        Form Inputs Config
    */
    const USERNAME_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Username'
        },
        iconConfig: {
            name: 'signature',
            package: 'fal'
        },
        value: username,
        changed: e => setUsername(e.target.value)
    }

    const EMAIL_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Email'
        },
        iconConfig: {
            name: 'at',
            package: 'fal'
        },
        value: email,
        changed: e => setEmail(e.target.value)
    }

    const PASSWORD_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
        },
        iconConfig: {
            name: 'lock-alt',
            package: 'fal'
        },
        value: password,
        changed: e => setPassword(e.target.value)
    }

    const CONFIRM_PASSWORD_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Confirm Password'
        },
        iconConfig: {
            name: 'check',
            package: 'fal'
        },
        value: confirmPassword,
        changed: e => setConfirmPassword(e.target.value)
    }

    return (
        <div className = { classes.InputContainer }>
            { 
                formType === 'forgotPassword' 
                    ? null 
                    : <Input { ...USERNAME_CONFIG } /> 
            }
            {
                formType === 'login'
                    ? null
                    : <Input { ...EMAIL_CONFIG } />
            }
            {
                formType === 'forgotPassword'
                    ? null
                    : <Input  { ...PASSWORD_CONFIG } />
            }
            {
                formType === 'register'
                    ? <Input { ...CONFIRM_PASSWORD_CONFIG } />
                    : null
            }
        </div>
    )
}

const AuthProviders = () => (
    <div className = { classes.AuthProvidersContainer }>
        <div className = { classes.LogoContainer }>

        </div>
        <div className = { classes.LogoContainer }>

        </div>
        <div className = { classes.LogoContainer }>

        </div>
    </div>
)

const FormControlButtons = ({ formType }) => (
    <div className = { classes.FormControlButtonsContainer }>
        {
            formType === 'login'
                ? (
                    <Button 
                        type = "Small"
                        clicked = { () => setFormType('forgotPassword') }>
                        Forgot Password?
                    </Button>
                )
                : null
        }
    </div>
)

const AuthForm = () => {
    // form state -> login form will be default
    // 3 types, login, register, forgotPassword
    const [ formType, setFormType ] = useState("login")

    /*
        Form Inputs
    */
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    /*
        Set button label
    */
    let label

    if (formType === "login") {
        label = "Login"
    } else if (formType === "register") {
        label = "Register"
    } else {
        label = "Send Email"
    }
    
    return (
        <form className = { classes.Form }>
            <Header formType = { formType } />
            <Inputs
                formType = { formType }
                setFormType = { setFormType }
                username = { username }
                setUsername = { setUsername }
                email = { email }
                setEmail = { setEmail }
                password = { password }
                setPassword = { setPassword }
                confirmPassword = { confirmPassword }
                setConfirmPassword = { setConfirmPassword } />
            <Button type = "Primary" isSubmit = { true }>
                { label }
            </Button>
            <AuthProviders />
            <FormControlButtons formType = { formType} />
        </form>
    )
}

export default AuthForm