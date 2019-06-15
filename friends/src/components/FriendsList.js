import React from "react";
import { Link } from "react-router-dom";
import Friend from "./Friend";
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const FriendsList = props => {
  console.log(props);
  if (props.friends.length === 0) {
    return <h3>Loading your friends...</h3>;
  }

  return (
    <Container>
      <h1>Friends List</h1>
      <Link to="/add" className="add-friend-btn">
        Add Friend
      </Link>
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          {props.friends.map(friend => (
            <Friend
              name={friend.name}
              age={friend.age}
              email={friend.email}
              id={friend.id}
              key={friend.id}
              deleteFriend={props.deleteFriend}
              handleUpdate={props.editFriend}
            />
          ))}
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default FriendsList;
