import React, { useState, useEffect} from 'react';
import Nav from './nav';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'
import Friend from './friend'

const FriendsList = () => {

    const [friends, setFriends] = useState([])

    const submitChanges = (e) => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', setFriends)
    }

    const handleChanges = (e) => {
        e.preventDefault()
        console.log(friends)
        setFriends({ 
            ...friends,
            [e.target.name]: e.target.value
        })
    }

    const getfriends = () => {
        console.log('Hi from getfriends', localStorage)
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('Here Is The Friends List:', res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getfriends()
    }, [])

    return (
        <div>
            <p></p>
            <Nav />
            <form onSubmit={submitChanges}>
                <input type="text" name='name' onChange={handleChanges} placeholder='full name'/>
                <input type="text" name='age'  onChange={handleChanges} placeholder='age'/>
                <input type="text" name='email'  onChange={handleChanges} placeholder='email'/>
                <input type="submit"/>
            </form>
            <Friend friends={friends}/>
        </div>
    )
}

export default FriendsList