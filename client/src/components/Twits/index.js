import React from "react";
import './style.css';

export default props => {
    return (
        props.twits ?
            props.twits.map(twit => {
                return (
                    <div key={twit.id} className="tweetHolder">
                        <div className="content">
                            <div className="header">
                                <img className="avatar" src={twit.user.avatar_url} alt="user_avatar" />
                                <span className="fullname">{twit.user.name}</span>
                                <span className="username">@{twit.user.username}</span>
                                <span className="timestamp">- {new Date(twit.created_at).toLocaleString()}</span>
                            </div>
                            <p className="twit-text">{twit.body}</p>
                        </div>
                    </div>
                )
            })
            :
            ''
    )
}

