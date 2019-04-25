import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addUser } from '../actions';

class Screen2 extends Component {

  constructor (props) {
    super (props);
  }

  static propTypes = {
    users: PropTypes.array,
    addNewUser: PropTypes.func.isRequired
  };

  addNewUser = () => {
    let users = 'John Doe';
    this.props.addNewUser(users);
  }

  render () {
    return (
      <div className="col-6 bg-info">
        <h3>Screen2</h3>
        <p>{this.props.users ? this.props.users : 'User removed'}</p>
        <button className="btn btn-success" onClick={this.addNewUser}>Add User</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  users: state.root.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewUser: (users) => dispatch(addUser(users))
})

export default connect(mapStateToProps, mapDispatchToProps) (Screen2);
