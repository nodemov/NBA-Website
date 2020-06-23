import React, { useState } from 'react'
import Axios from 'axios';

const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmail = (e) => {
        e.preventDefault();
        Axios('http://localhost:3005/subscriptions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ email })
        }).then(response => {
            setEmail("");
        })
    }

    return (
        <div className="subcribe_panel">
            <h3>Subscribe to us</h3>
            <div>
                <code>{email}</code>
                <form onSubmit={handleSubmail}>
                    <input type="text" onChange={handleEmail} />
                </form>

            </div>
        </div>
    )
}

export default Subscribe;
