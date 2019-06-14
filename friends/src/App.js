import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import FriendInput from './components/FriendInput';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    }
  }

componentDidMount = () => {
  axios
  .get('http://localhost:5000/friends')
  .then(res => { this.setState({ friends: res.data});
  })
  .catch(err => { this.setState({ error: err});
  });
}

handleUpdateList = (friends) => {
  this.setState({
    friends,
  })
}

handleEditFriend = ( name, age, email, id ) => {
  axios.put(`http://localhost:5000/friends/${id}`, {
    name,
    age: Number(age),
    email
  })
  .then(res => this.setState({ friends: res.data }))
  .catch(err => { this.setState({ error: err});
  })
}

handleDeleteFriend = (id) => {
  axios.delete(`http://localhost:5000/friends/${id}`)
  .then(res => this.setState({ friends: res.data }))
  .catch(err => { this.setState({ error: err});

  })
}

render() {

  return (
    <div className="App">
      <header className="App-header">
      <Route exact path="/" render={props => (
                <FriendsList
                {...props}
                friends={this.state.friends}
                editFriend={this.handleEditFriend}
                deleteFriend={this.handleDeleteFriend}
                 />

      )} />
      <Route path="/add" render={props => <FriendInput {...props} updateList={this.handleUpdateList} /> } />
      </header>
    </div>
  );
}
}

export default App;
