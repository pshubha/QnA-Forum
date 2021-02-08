import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Display from './Display';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, useHistory } from 'react-router-dom'


const Login = () => {
    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [value, setValue] = useState('')
    const [logIn, setLog] = useState('')
    let history = useHistory();


    useEffect(() => {
        axios.get('http://localhost:3000/User').then(res => {
            console.log(res)
            setUser(res.data)
        }).catch(err => {
            console.log(err)
        })
        // window.location.reload()
    }, [])

    const handler = (e) => {
        e.preventDefault()
        // console.log(name, pass)
        let flag = false;
        let Id = null;
        user.map((u, i) => {
            if (u.user_name == name && u.user_pass == pass) {
                Id = u.user_id
                flag = true
            }
        })
        if (flag == false) {
            setValue(`Please Singup to Login`)
        } else {
            let Active = JSON.parse(sessionStorage.getItem('ActiveUser'))
            if (Active == null) {
                Active = {}
            }
            let obj = { id: Id, Name: name, Password: pass, Status: true, }
            Active = obj
            sessionStorage.setItem('ActiveUser', JSON.stringify(Active))
            // setLog(true)
            history.push('/')
            window.location.reload()

        }
        setName('')
        setPass('')
    }

    return (
        <div className='container' style={{ padding: '20px', marginTop: '40px', width: '40%' }}>
            <form >
                <h1>Login Page</h1>
                <hr></hr>
                <div className="form-group">
                    <label style={{ float: 'left' }}> Name:</label>
                    <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    <label style={{ float: 'left' }}> Password:</label>
                    <input type="password" className='form-control' value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <div >
                    <button onClick={handler}>Submit</button><span>{value}</span>

                    {/* <Link to={{pathname:'/'}} activeClassName="active" onClick={handler} className='btn btn-primary'>Submit</Link> */}


                </div>
                <hr></hr>
                <div>
                    <div style={{ float: 'left' }}>Don't have account!! Click on Sign Up</div>
                    <br></br>
                </div>
            </form>
        </div>
    )
}

export default Login


