import React from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend';

const FriendsList = (props) => {
    console.log(props);
    if (props.friends.length === 0) {
        return <h3>Loading your friends...</h3>;
    }

    return (
        <div className="list-container">
        <div className="friend-list">
            {props.friends.map(friend => (

                <Friend name={friend.name} 
                age={friend.age}
                id={friend.id}
                key={friend.id}
                deleteFriend={props.deleteFriend}
                handleUpdate={props.editFriend}
                />

            ))}
            </div>
            <h1>Friends List</h1>
            <Link to="/add" className="add-friend-btn">
                Add Friend
            </Link>
        </div>
    )

}

export default FriendsList;