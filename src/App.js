import React, { useState, useEffect } from 'react'
import configFire from './configFire'
import Login from './Components/Login'
import Trial from './Components/Trial'
import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [emailID, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const [emailIDErr, setEmailIDErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [accountHolder, setaccountHolder] = useState('');

  const clearInputs = () => {
    setEmailID('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailIDErr('');
    setPasswordErr('');
  }
  const handleLogin = () => {
    clearErrors();
    configFire
      .auth()
      .signInWithEmailAndPassword(emailID, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailIDErr(err.message);
            break;
          case "auth/wrong-password":
            setPasswordErr(err.message)
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    configFire
      .auth()
      .createUserWithEmailAndPassword(emailID, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailIDErr(err.message);
            console.log(err.message)
            break;
          case "auth/weak-password":
            setPasswordErr(err.message)
            break;
        }
      });
    // let recaptcha = new configFire.auth.RecaptchaVerifier('recaptcha')
    // let number = '+916371999130';
    // configFire.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
    //   let code = prompt("Enter the OTP", '');
    //   if (code == null) return;
    //   e.confirm(code).then((result) => {
    //     window.location.href = <Trial />
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    //})
  };

  const handleLogout = () => {
    configFire.auth().signOut();
  };

  const authListener = () => {
    configFire.auth().onAuthStateChanged(user => {
      if (user) {
        //console.log(user)
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      {user ? (<Trial handleLogout={handleLogout} />
      ) : (
          <Login
            emailID={emailID}
            setEmailID={setEmailID}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            accountHolder={accountHolder}
            setaccountHolder={setaccountHolder}
            emailIDErr={emailIDErr}
            passwordErr={passwordErr} />
        )};

    </div>
  )
}

export default App
