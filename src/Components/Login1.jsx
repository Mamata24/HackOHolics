import React, { Component } from 'react'
import axios from 'axios'
class Login1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_email: '',
            password: '',
            org_domain: 'ft4l0l2l',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const history = useHistory();
        axios({
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "GrantType": "password",
            },
            url: "https://api.revvsales.com/api/v2/auth/initiate-auth",
            data: {
                user_email: this.state.user_email,
                password: this.state.password,
                org_domain: "ft4l0l2l",
            },
        }).then(res => {
            if (res.status === 200) {
                this.props.history.push('/Dashboard')
            }
        })
            .catch(error => {
                alert("You entered wrong credentials")
            })


    }
    render() {
        const { user_email, password } = this.state
        return (
            <React.Fragment>
                <div
                    style={{
                        height: '80px',
                        background: '#4867aa',
                        padding: '10px 40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'Roboto',
                    }}
                >
                    <h1 style={{ color: 'white' }}>Heritage Houses</h1>
                </div>
                <section className="login">
                    <div className="loginContainer">
                        <form onSubmit={this.handleSubmit}>
                            <label>Username</label>
                            <input type="text" name="user_email" autoFocus required value={user_email} onChange={this.handleChange} />
                            {/* <p className="errorMsg">{emailIDErr}</p> */}
                            <label>Password</label>
                            <input type="password" name="password" required value={password} onChange={this.handleChange} />
                            {/* <p className="errorMsg">{passwordErr}</p> */}
                            <div className="btnContainer">
                                <button type="Submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Login1
