import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Badge
} from "reactstrap";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      nameInput: this.props.name,
      ageInput: this.props.age,
      emailInput: this.props.email
    };
  }
  handleInput = (e, type) => {
    const key = type + "Input";
    this.setState({ [key]: e.target.value });
  };
  handleEdit = e => {
    e.preventDefault();
    if (!this.state.nameInput || !this.state.ageInput || !this.state.emailInput)
      return alert("Please complete the form");
    this.props.handleUpdate(
      this.state.nameInput,
      this.state.ageInput,
      this.state.emailInput,
      this.props.id
    );
    this.setState({
      editing: false
    });
  };
  render() {
    return this.state.editing ? (
      <form onSubmit={this.handleEdit}>
        <div>
          <span>Name:</span>
          <input
            type="text"
            placeholder="Name"
            value={this.state.nameInput}
            onChange={e => this.handleInput(e, "name")}
          />
        </div>

        <div>
          <span>Age:</span>
          <input
            type="number"
            placeholder="Age"
            value={this.state.ageInput}
            onChange={e => this.handleInput(e, "age")}
          />
        </div>

        <div>
          <span>Email:</span>
          <input
            type="email"
            placeholder="Email"
            value={this.state.emailInput}
            onChange={e => this.handleInput(e, "email")}
          />
        </div>
        <button className="submit">Submit</button>
        <div className="controls">
          <button
            className="stop-edit"
            onClick={() => this.setState({ editing: false })}
          >
            Go Back
          </button>
          <span>-</span>
          <button
            className="delete-friend"
            onClick={() => this.props.deleteFriend(this.props.id)}
          >
            Delete
          </button>
        </div>
      </form>
    ) : (
      <ListGroup>
        <ListGroupItemHeading>Still on the list...</ListGroupItemHeading>
        <ListGroupItem color="info">{this.props.name}</ListGroupItem>
        <ListGroupItem color="info">{`${
          this.props.age
        } "years old"`}</ListGroupItem>
        <ListGroupItem color="info">
          {this.props.email}
        </ListGroupItem>
        <section className="controls-a">
          <ListGroupItem
            color="warning"
            className="edit-person"
            tag="button"
            onClick={() => this.setState({ editing: true })}
          >
            Edit
          </ListGroupItem>

          <ListGroupItem
            color="danger"
            className="delete-person"
            tag="button"
            onClick={() => this.props.deleteFriend(this.props.id)}
          >
            Delete
          </ListGroupItem>
        </section>
      </ListGroup>
    );
  }
}
export default Friend;
