//change mode, main code
import React, { useState, useEffect } from 'react'
import useDarkMode from './useDarkMode';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Login from './Login';
import PostAns from './PostAns'

const Display = () => {
    const [Ques, setQue] = useState([])
    const [Ans, setAns] = useState([])
    const [user, setUser] = useState([])
    const [data, setData] = useState([])
    let Active = JSON.parse(sessionStorage.getItem('ActiveUser'))
    const [stat, setStat] = useState(Active.Status)
    const [postAns, setPost] = useState()
    const [postQue, setPostQ] = useState()



    useEffect(() => {
        axios.get('http://localhost:3000/Questions').then(res => {
            // console.log(res)
            setQue(res.data)
        }).catch(err => {
            console.log(err)
        })

        axios.get('http://localhost:3000/Answers').then(res => {
            console.log("All Answers :" + res)
            setAns(res.data)
        }).catch(err => {
            console.log(err)
        })

        axios.get('http://localhost:3000/User').then(res => {
            // console.log(res)
            setUser(res.data)
        }).catch(err => {
            console.log(err)
        })

        console.log(stat)
    }, [])

    const handlerQuePost = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/Questions', { user_id: Active.id, q_text: postQue }).then(
            res => {
                console.log(res.data)
            }
        ).catch(err => {
            console.log(err)
        })
        console.log(postQue)
        setPostQ('')
        window.location.reload()
    }


    return (
        <div className="container-fluid">
            <div style={{ height: '100vw' }}>
                <>
                    <div className="container" style={{ padding: '80px', textAlign: 'left', width: '90%' }}>
                        <hr></hr>
                        {stat
                            ?
                            <>
                                {
                                    user.map((u) => {
                                        if (u.user_id === Active.id) {
                                            return <h3 style={{ fontFamily: ('Papyrus', 'Fantasy'), marginLeft: '60px' }}>Welcome {u.user_name}.... </h3>
                                        }
                                    })
                                }
                                <div style={{ marginLeft: '60px' }}>
                                    <textarea value={postQue} onChange={(e) => setPostQ(e.target.value)} style={{ width: '68%' }} placeholder='Add Question' />
                                    <br></br>
                                    <button onClick={handlerQuePost} className='btn btn-outline-primary btn-sm'>Add Question</button>
                                </div>
                                <hr></hr>

                                <ul>
                                    {
                                        Ques.map((q, i) => {
                                            return (
                                                <div style={{ padding: '20px' }} key={q.q_id}><li><h5> {q.q_text}</h5></li>
                                                    <form>
                                                        <Link to={{ pathname: '/postAns', id: q.q_id }} activeClassName="active" className='btn btn-secondary btn-sm' >Post Answer</Link>
                                                    </form>
                                                    {
                                                        Ans.map((a, n) => {
                                                            return (
                                                                <div key={a.ans_id}>{q.q_id === a.q_id ? <><h7>User:[{a.user_name}]</h7> <h6>Ans.: {a.ans_text}</h6></> : <span></span>}</div>
                                                            )
                                                        })
                                                    }</div>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                            :
                            <ul>
                                {
                                    Ques.map((q, i) => {
                                        return (
                                            <div style={{ padding: '20px' }} key={q.q_id}><li><h5> {q.q_text}</h5></li>{
                                                Ans.map((a, n) => {
                                                    return (
                                                        <div key={a.ans_id}>{q.q_id === a.q_id ? <><h7>User:[{a.user_name}]</h7> <h6>Ans.: {a.ans_text}</h6></> : <span></span>}</div>
                                                    )
                                                })
                                            }</div>
                                        )
                                    })
                                }
                            </ul>}

                    </div>
                </>
            </div>
        </div>

    )
}

export default Display
