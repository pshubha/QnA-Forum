//Sign Up
import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');
    const [value, setValue] = useState('')


    const handler = (e) => {
        e.preventDefault();
        if (pass == cpass) {
            axios.post('http://localhost:3000/User', { user_name: name, user_pass: pass }).then(
                res => {
                    console.log(res.data)
                }
            ).catch(err => {
                console.log(err)
            })
        } else {
            setValue('Password should match')
        }
        setName('')
        setCPass('')
        setPass('')
    }


    return (
        <div className='container' style={{ padding: '20px', marginTop: '40px', width: '40%' }}>
            <form>
                <div className='form-group'>
                    <h1>Signup Page</h1>
                    <label style={{ float: 'left' }}>Name:</label>
                    <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    <label style={{ float: 'left' }}>Password:</label>
                    <input type='password' className='form-control' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <label style={{ float: 'left' }}>Confirm Password:</label><span>{value}</span>
                    <input type='password' className='form-control' value={cpass} onChange={(e) => setCPass(e.target.value)} />
                </div>
                <div >
                    <button onClick={handler}>Sign Up</button>
                </div>
                <hr></hr>
                <div style={{ float: 'left' }}>Go Back to Login</div>
                <br></br>
            </form>
        </div>
    )
}

export default Signup
