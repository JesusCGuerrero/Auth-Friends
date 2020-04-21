import React from 'react';

const Friend = (props) => {
    console.log(props)
    return (
        <>
            <h5>Friendslist:</h5>
            {props.friends.map((friend) => {
                return (<div>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>)
            })}
        </>
    )
}

export default Friend