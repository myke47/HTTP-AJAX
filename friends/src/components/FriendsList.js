import React from 'react';
import { Link } from 'react-router-dom';


const FriendsList = (props) => {
    console.log(props);
    if (props.friendsArray.length === 0) {
        return <h3>Loading items...</h3>;
    }

    return (
        <div>
            {props.friendsArray.map(friend => (

                <Link to={`/friends-list/${friend.id}`} key={friend.id}>
                HELLO WORLD
                </Link>
            ))}
            <h1>Friends List</h1>
            <button>
                Button Pending
            </button>
        </div>
    )

}

export default FriendsList;