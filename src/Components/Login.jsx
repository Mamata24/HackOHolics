import React from 'react'

const Login = (props) => {
    const {
        emailID,
        setEmailID,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        accountHolder,
        setaccountHolder,
        emailIDErr,
        passwordErr
    } = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" onFocus required value={emailID} onChange={(e) => setEmailID(e.target.value)} />
                <p className="errorMsg">{emailIDErr}</p>
                <label>Password</label>
                <input type="password" onFocus required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordErr}</p>
                <div className="btnContainer">
                    {accountHolder ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account ? <span onClick={() => setaccountHolder(!accountHolder)}>Sign Up</span></p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleSignUp}>Sign Up</button>
                                <p>Already have an account ? <span onClick={() => setaccountHolder(!accountHolder)}>Sign In</span></p>
                            </>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Login;
