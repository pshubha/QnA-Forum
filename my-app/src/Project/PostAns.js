//Post Answer

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, useHistory } from 'react-router-dom'

const PostAns = (props) => {
    const [text, setText] = useState('')
    const [que, setQue] = useState('')
    let Active = JSON.parse(sessionStorage.getItem('ActiveUser'))
    const { id } = props.location;
    let history = useHistory();

    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:3000/Questions/' + id).then(res => {
            console.log(res)
            setQue(res.data[0].q_text)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handlerAnsPost = (e) => {
        e.preventDefault();
        console.log(text)
        console.log(id, text, Active.id)
        axios.post('http://localhost:3000/Answers', { q_id: id, ans_text: text, user_id: Active.id }).then(
            res => {
                console.log(res.data)
            }
        ).catch(err => {
            console.log(err)
        })
        console.log(text, id);
        setText('')
    }

    const goBack=()=>{
        history.push('/');
    }

    return (
        <div className="container-fluid">
            <div className="container" style={{ paddingTop: '70px', paddingLeft: '150px', textAlign: 'left', width: '90%', height: '10px' }}>
                <form>
                    <hr></hr>
                    <div className="media mt-2 shadow-textarea">
                        {/* <ion-icon name="person-circle-outline"></ion-icon> */}
                        <div className="media-body ">
                            <i className="fas fa-user prefix grey-text"></i>
                            <h5 className="mt-0 font-weight-bold blue-text">Name: {Active.Name}</h5>
                            <div>
                                <h5>Question : {que}</h5>
                            </div>
                            <div className="form-group basic-textarea rounded-corners">
                                <textarea value={text} onChange={(e) => setText(e.target.value)} className="form-control z-depth-1" id="exampleFormControlTextarea345" rows="3" placeholder="Write your answer..."></textarea>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div >
                    <button style={{marginRight:'10px'}} className="btn btn-dark btn-sm" onClick={handlerAnsPost}>Post Answer</button>
                    <span></span>
                    <button style={{marginRight:'10px'}} className="btn btn-primary btn-sm" onClick={goBack}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostAns



