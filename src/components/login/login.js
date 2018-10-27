import React, { Component } from 'react';
import { googleAuth, firebase } from '../../firebase/firebase'
import style from './login.scss'

class Login extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            status: false
        }
    }

    signIn (){
        firebase.auth().signInWithPopup(googleAuth)
    }
    signOut(){
        firebase.auth().signOut()
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                status:user?false:true
            })
        })
    }

    render() {
        return (
            <div className={style.container}>
                {this.state.status ? <button onClick={this.signIn}>Login</button>
                    :
                <button onClick={this.signOut}>Logout</button>}
            </div>
        )
    }
}
export default Login