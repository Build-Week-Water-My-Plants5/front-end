import { useState, useEffect } from 'react';
import axios from 'axios';
import { mockUser } from '../data.js';


const Account = () => {
    const [user, setUser] = useState({});
    const uid = localStorage.getItem('uid');

    useEffect(() => {
        axios.get(`https://water-the-plants-api.herokuapp.com/api/users/${uid}`)
        .then(res => {
            setUser(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <span>ID: {user.user_id}</span>
            <span>Username: {user.username}</span>
            <span>Phone: {mockUser.phone}</span>
        </div>
    )
}

export default Account;