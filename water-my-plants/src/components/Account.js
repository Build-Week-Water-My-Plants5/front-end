import { useState, useEffect } from 'react';
import axios from 'axios';


const Account = () => {

    useEffect(() => {
        axios.get('https://water-the-plants-api.herokuapp.com/api/users/')
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div>

        </div>
    )
}

export default Account;