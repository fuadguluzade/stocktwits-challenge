import React from "react";

export default props => {
    return (
        props.twits ?
            props.twits.map(twit => {
                return (
                    <div className="twit-card" key={twit.id}>
                        <div className="user-name">{twit.user.username}</div>
                        <div className="user-avatar">{twit.user.avatar_url}</div>
                        <div className="twit-date">{twit.created_at}</div>
                        <div className="twit-body">{twit.body}</div>
                    </div>
                )
            })
            :
            <h1>No twits found</h1>
    )
}