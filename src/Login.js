import React from 'react'
    
class Login extends React.Component {
    render() {
        return(
        <form>
            <h1>Login</h1>
            <div>
                <input type="text" name="username"
placeholder="Username" />
                <label htmlFor="Username">Username</label>
            </div>
            <div>
                <input type="password" name="password"
placeholder="Password" />
                <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="login" />
    </form>
        )
    }
}

export default Login